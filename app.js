(function () {
  "use strict";

  const mapBounds = L.latLngBounds(
    [24.396308, -141.0],
    [60.0, -52.0]
  );

  const networkRoutes = Array.isArray(window.RAIL_NETWORK_ROUTES)
    ? window.RAIL_NETWORK_ROUTES
    : [];
  const routeLookup = new Map(networkRoutes.map((route) => [route.id, route]));
  const defaultViewBounds = buildDefaultViewBounds(networkRoutes, mapBounds);

  const rawTrips = Array.isArray(window.TRAIN_TRIPS) ? window.TRAIN_TRIPS : [];
  const warnings = [];
  const trips = rawTrips
    .map((trip) => normalizeTrip(trip, warnings))
    .filter(Boolean);

  const tripListElement = document.getElementById("trip-list");
  const tripSelectElement = document.getElementById("trip-select");
  const tripDetailsElement = document.getElementById("trip-details");
  const clearSelectionButton = document.getElementById("clear-selection");
  const warningElement = document.getElementById("validation-warnings");

  const map = L.map("map", {
    minZoom: 3,
    maxZoom: 11,
    zoomControl: true
  });
  map.fitBounds(defaultViewBounds, { padding: [20, 20] });
  map.setMaxBounds(mapBounds.pad(0.25));

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: "abcd"
  }).addTo(map);

  const networkLayer = L.layerGroup().addTo(map);
  const allTripsLayer = L.layerGroup().addTo(map);
  const selectedTripLayer = L.layerGroup().addTo(map);
  const markerLayer = L.layerGroup().addTo(map);

  let selectedTripId = null;

  clearSelectionButton.addEventListener("click", () => {
    setSelectedTrip(null);
  });
  tripSelectElement.addEventListener("change", () => {
    const selectedValue = tripSelectElement.value;
    setSelectedTrip(selectedValue || null);
  });

  renderWarnings();
  renderNetworkLayer();
  renderTripList();
  renderMapLayers();
  renderTripDetails(null);

  function setSelectedTrip(tripId) {
    selectedTripId = tripId;
    renderTripList();
    renderMapLayers();
    const selectedTrip = getSelectedTrip();
    renderTripDetails(selectedTrip);

    if (selectedTrip) {
      fitMapToTrip(selectedTrip);
      return;
    }

    map.fitBounds(defaultViewBounds, { padding: [20, 20] });
  }

  function getSelectedTrip() {
    if (!selectedTripId) {
      return null;
    }

    return trips.find((trip) => trip.id === selectedTripId) || null;
  }

  function renderWarnings() {
    if (!warnings.length) {
      warningElement.classList.remove("visible");
      warningElement.textContent = "";
      return;
    }

    warningElement.classList.add("visible");
    warningElement.textContent =
      "Trip data warnings: " + warnings.slice(0, 4).join(" | ");
  }

  function renderNetworkLayer() {
    networkLayer.clearLayers();

    networkRoutes.forEach((route) => {
      if (!Array.isArray(route.path) || route.path.length < 2) {
        return;
      }

      L.polyline(route.path, {
        color: "#5a6d7f",
        opacity: 0.38,
        weight: 2,
        lineCap: "round",
        lineJoin: "round"
      }).addTo(networkLayer);
    });
  }

  function buildDefaultViewBounds(routes, fallbackBounds) {
    const points = [];
    routes.forEach((route) => {
      if (!route || !Array.isArray(route.path)) {
        return;
      }

      route.path.forEach((point) => {
        if (!Array.isArray(point) || point.length < 2) {
          return;
        }

        const lat = point[0];
        const lon = point[1];
        if (!isValidCoordinate(lat, lon)) {
          return;
        }

        points.push([lat, lon]);
      });
    });

    if (points.length < 2) {
      return fallbackBounds;
    }

    return L.latLngBounds(points);
  }

  function renderTripList() {
    tripListElement.innerHTML = "";
    tripSelectElement.innerHTML = "";
    clearSelectionButton.disabled = !selectedTripId;

    if (!trips.length) {
      const emptyItem = document.createElement("li");
      emptyItem.className = "trip-item";
      emptyItem.textContent = "No trips loaded yet.";
      tripListElement.appendChild(emptyItem);

      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = "No trips loaded yet.";
      emptyOption.disabled = true;
      emptyOption.selected = true;
      tripSelectElement.appendChild(emptyOption);
      tripSelectElement.disabled = true;
      return;
    }
    tripSelectElement.disabled = false;

    const allOption = document.createElement("option");
    allOption.value = "";
    allOption.textContent = "All trips";
    tripSelectElement.appendChild(allOption);

    trips.forEach((trip) => {
      const listItem = document.createElement("li");
      listItem.className = "trip-item";

      const button = document.createElement("button");
      button.type = "button";
      if (trip.id === selectedTripId) {
        button.classList.add("is-selected");
      }

      const tripName = document.createElement("span");
      tripName.className = "trip-name";
      tripName.textContent = trip.displayName;

      const tripMeta = document.createElement("span");
      tripMeta.className = "trip-meta";
      tripMeta.textContent = `${trip.segments.length} segment${
        trip.segments.length === 1 ? "" : "s"
      }`;

      button.appendChild(tripName);
      button.appendChild(tripMeta);
      button.addEventListener("click", () => {
        const isSelected = selectedTripId === trip.id;
        setSelectedTrip(isSelected ? null : trip.id);
      });

      listItem.appendChild(button);
      tripListElement.appendChild(listItem);

      const option = document.createElement("option");
      option.value = trip.id;
      option.textContent = `${trip.displayName} (${trip.segments.length} segment${
        trip.segments.length === 1 ? "" : "s"
      })`;
      tripSelectElement.appendChild(option);
    });

    tripSelectElement.value = selectedTripId || "";
  }

  function renderMapLayers() {
    allTripsLayer.clearLayers();
    selectedTripLayer.clearLayers();
    markerLayer.clearLayers();

    const hasSelection = Boolean(selectedTripId);

    trips.forEach((trip) => {
      const isSelected = trip.id === selectedTripId;
      const targetLayer = isSelected ? selectedTripLayer : allTripsLayer;
      const selectedTraversalCounts =
        hasSelection && isSelected ? new Map() : null;
      const style = hasSelection
        ? isSelected
          ? {
              color: "#d17b1e",
              opacity: 0.95,
              weight: 5
            }
          : {
              color: "#2f658d",
              opacity: 0.16,
              weight: 3
            }
        : {
            color: "#2f658d",
            opacity: 0.5,
            weight: 3
          };

      trip.segments.forEach((segment) => {
        if (segment.mode === "non_rail") {
          return;
        }

        const path = getSegmentPath(trip, segment);
        if (!path || path.length < 2) {
          return;
        }

        const lineStyle = resolveSegmentStyle(
          style,
          segment,
          selectedTraversalCounts
        );

        L.polyline(path, {
          color: lineStyle.color,
          opacity: lineStyle.opacity,
          weight: lineStyle.weight,
          dashArray: lineStyle.dashArray,
          lineCap: "round",
          lineJoin: "round"
        }).addTo(targetLayer);
      });

      if (isSelected) {
        renderSelectedTripStops(trip);
      }
    });
  }

  function renderSelectedTripStops(trip) {
    const labeledRoles = new Set([
      "origin",
      "destination",
      "transfer",
      "intermediate",
      "stopover"
    ]);
    const displayStops = buildDisplayStops(trip.stops, labeledRoles);
    const labelTargets = [];

    displayStops.forEach((stop) => {
      const markerStyle = markerStyleForRole(stop.markerRole);
      const marker = L.circleMarker([stop.lat, stop.lon], markerStyle).addTo(markerLayer);

      if (!stop.shouldLabel) {
        return;
      }

      labelTargets.push({
        marker,
        stop,
        html: buildStopLabel(stop),
        sizeText: buildStopSizeText(stop)
      });
    });

    const placements = computeLabelPlacements(labelTargets);
    placements.forEach((placement) => {
      placement.marker.bindTooltip(placement.html, {
        direction: placement.direction,
        offset: placement.offset,
        permanent: true,
        className: "trip-label"
      });
    });
  }

  function computeLabelPlacements(labelTargets) {
    if (!Array.isArray(labelTargets) || !labelTargets.length) {
      return [];
    }

    const isSmallViewport = map.getSize().x < 640;
    const shiftStep = isSmallViewport ? 12 : 10;
    const maxShift = isSmallViewport ? 36 : 28;

    const placements = labelTargets.map((target) => ({
      marker: target.marker,
      html: target.html,
      anchorPoint: map.latLngToLayerPoint([target.stop.lat, target.stop.lon]),
      labelSize: estimateLabelSize(target.sizeText),
      direction: "top",
      xShift: 0
    }));

    const maxIterations = 4;
    for (let iteration = 0; iteration < maxIterations; iteration += 1) {
      let changed = false;
      const boxes = placements.map((placement) => placementBox(placement));

      for (let i = 0; i < placements.length; i += 1) {
        for (let j = i + 1; j < placements.length; j += 1) {
          if (boxOverlapArea(boxes[i], boxes[j]) <= 0) {
            continue;
          }

          const first = placements[i];
          const second = placements[j];
          const southern =
            first.anchorPoint.y >= second.anchorPoint.y ? first : second;
          const northern = southern === first ? second : first;

          // Keep geographic order: southern label moves below the station first.
          if (southern.direction !== "bottom") {
            southern.direction = "bottom";
            changed = true;
            continue;
          }

          if (northern.direction !== "top") {
            northern.direction = "top";
            changed = true;
            continue;
          }

          // If still overlapping, apply small symmetric horizontal nudges.
          const western = first.anchorPoint.x <= second.anchorPoint.x ? first : second;
          const eastern = western === first ? second : first;

          if (western.xShift > -maxShift) {
            western.xShift = Math.max(-maxShift, western.xShift - shiftStep);
            changed = true;
          }

          if (eastern.xShift < maxShift) {
            eastern.xShift = Math.min(maxShift, eastern.xShift + shiftStep);
            changed = true;
          }
        }
      }

      if (!changed) {
        break;
      }
    }

    return placements.map((placement) => ({
      marker: placement.marker,
      html: placement.html,
      direction: placement.direction,
      offset: placementOffset(placement)
    }));
  }

  function estimateLabelSize(text) {
    const normalizedText = String(text || "");
    const baseWidth = 18;
    const estimated = baseWidth + normalizedText.length * 6;
    return {
      width: Math.min(Math.max(estimated, 84), 250),
      height: 24
    };
  }

  function placementOffset(placement) {
    if (placement.direction === "bottom") {
      return [placement.xShift, 6];
    }
    return [placement.xShift, -7];
  }

  function placementBox(placement) {
    return tooltipBox(placement.anchorPoint, placement.labelSize, {
      direction: placement.direction,
      offset: placementOffset(placement)
    });
  }

  function tooltipBox(anchorPoint, labelSize, candidate) {
    const width = labelSize.width;
    const height = labelSize.height;
    const x = anchorPoint.x + candidate.offset[0];
    const y = anchorPoint.y + candidate.offset[1];

    if (candidate.direction === "bottom") {
      return {
        left: x - width / 2,
        top: y,
        right: x + width / 2,
        bottom: y + height
      };
    }

    if (candidate.direction === "left") {
      return {
        left: x - width,
        top: y - height / 2,
        right: x,
        bottom: y + height / 2
      };
    }

    if (candidate.direction === "right") {
      return {
        left: x,
        top: y - height / 2,
        right: x + width,
        bottom: y + height / 2
      };
    }

    return {
      left: x - width / 2,
      top: y - height,
      right: x + width / 2,
      bottom: y
    };
  }

  function boxOverlapArea(a, b) {
    const horizontalOverlap = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    const verticalOverlap = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);

    if (horizontalOverlap <= 0 || verticalOverlap <= 0) {
      return 0;
    }

    return horizontalOverlap * verticalOverlap;
  }

  function markerStyleForRole(role) {
    if (role === "origin_destination") {
      return {
        radius: 6,
        fillColor: "#355466",
        color: "#ffffff",
        weight: 1.8,
        fillOpacity: 0.95
      };
    }

    if (role === "origin") {
      return {
        radius: 6,
        fillColor: "#14653f",
        color: "#ffffff",
        weight: 1.8,
        fillOpacity: 0.95
      };
    }

    if (role === "destination") {
      return {
        radius: 6,
        fillColor: "#8a1d1d",
        color: "#ffffff",
        weight: 1.8,
        fillOpacity: 0.95
      };
    }

    return {
      radius: 5.5,
      fillColor: "#c06e19",
      color: "#ffffff",
      weight: 1.7,
      fillOpacity: 0.95
    };
  }

  function buildDisplayStops(stops, labeledRoles) {
    const groupedStops = new Map();

    stops.forEach((stop) => {
      if (!isValidCoordinate(stop.lat, stop.lon)) {
        return;
      }

      const key = buildDisplayStopKey(stop);
      let current = groupedStops.get(key);
      if (!current) {
        current = {
          lat: stop.lat,
          lon: stop.lon,
          name: stop.name,
          state: stop.state,
          stationName: stop.stationName,
          roleSet: new Set(),
          visits: 0
        };
        groupedStops.set(key, current);
      }

      current.visits += 1;
      if (stop.role) {
        current.roleSet.add(stop.role);
      }

      if (!current.stationName && stop.stationName) {
        current.stationName = stop.stationName;
      }

      if (!current.name && stop.name) {
        current.name = stop.name;
      }

      if (!current.state && stop.state) {
        current.state = stop.state;
      }
    });

    return Array.from(groupedStops.values()).map((stop) => {
      const roles = Array.from(stop.roleSet);
      return {
        ...stop,
        roles,
        markerRole: pickDisplayMarkerRole(stop.roleSet),
        shouldLabel: roles.some((role) => labeledRoles.has(role))
      };
    });
  }

  function buildDisplayStopKey(stop) {
    const latKey = Number(stop.lat).toFixed(4);
    const lonKey = Number(stop.lon).toFixed(4);
    const stationKey = String(stop.stationName || "").trim().toLowerCase();
    const nameKey = String(stop.name || "").trim().toLowerCase();
    return `${latKey}|${lonKey}|${stationKey || nameKey}`;
  }

  function pickDisplayMarkerRole(roleSet) {
    if (roleSet.has("origin") && roleSet.has("destination")) {
      return "origin_destination";
    }

    if (roleSet.has("destination")) {
      return "destination";
    }

    if (roleSet.has("origin")) {
      return "origin";
    }

    if (roleSet.has("transfer")) {
      return "transfer";
    }

    if (roleSet.has("stopover")) {
      return "stopover";
    }

    if (roleSet.has("intermediate")) {
      return "intermediate";
    }

    return "stop";
  }

  function buildStopLabel(stop) {
    return escapeHtml(buildStopSizeText(stop));
  }

  function buildStopSizeText(stop) {
    const roleLabel = formatRoleSummary(stop.roles || [stop.role]);
    const location = stop.state ? `${stop.name}, ${stop.state}` : stop.name;
    const baseName = stop.stationName || location;
    if (stop.visits > 1) {
      return `${baseName} (${roleLabel}, ${stop.visits} visits)`;
    }
    return `${baseName} (${roleLabel})`;
  }

  function formatRole(role) {
    if (role === "origin") {
      return "Departure";
    }

    if (role === "destination") {
      return "Arrival";
    }

    if (!role) {
      return "Stop";
    }

    return role.charAt(0).toUpperCase() + role.slice(1);
  }

  function formatRoleSummary(roles) {
    const normalized = Array.isArray(roles)
      ? roles.filter(Boolean)
      : [];
    if (!normalized.length) {
      return "Stop";
    }

    const order = ["origin", "destination", "transfer", "stopover", "intermediate"];
    const orderedUnique = order.filter((role) => normalized.includes(role));
    const roleLabels = orderedUnique.map((role) => formatRole(role));

    if (!roleLabels.length) {
      return "Stop";
    }

    if (roleLabels.length === 1) {
      return roleLabels[0];
    }

    if (roleLabels.length === 2) {
      return `${roleLabels[0]} + ${roleLabels[1]}`;
    }

    return `${roleLabels[0]} + ${roleLabels[1]} +${roleLabels.length - 2}`;
  }

  function resolveSegmentStyle(baseStyle, segment, traversalCounts) {
    if (!traversalCounts) {
      return baseStyle;
    }

    const traversalKey = buildTraversalKey(segment);
    const seenCount = traversalCounts.get(traversalKey) || 0;
    traversalCounts.set(traversalKey, seenCount + 1);

    if (seenCount === 0) {
      return baseStyle;
    }

    return {
      ...baseStyle,
      color: "#a45b12",
      dashArray: "8 7",
      weight: Math.max(3.8, baseStyle.weight - 0.4),
      opacity: Math.min(1, baseStyle.opacity + 0.03)
    };
  }

  function buildTraversalKey(segment) {
    const routePart =
      segment.routeGeometryId ||
      `${segment.operator || "Rail"}:${segment.lineName || "Segment"}`;
    const from = String(segment.fromStopId || "");
    const to = String(segment.toStopId || "");
    if (from <= to) {
      return `${routePart}|${from}|${to}`;
    }
    return `${routePart}|${to}|${from}`;
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderTripDetails(trip) {
    tripDetailsElement.innerHTML = "";

    if (!trip) {
      const paragraph = document.createElement("p");
      paragraph.className = "hint";
      paragraph.textContent =
        "Showing all saved trips. Select one to highlight transfer and intermediate points.";
      tripDetailsElement.appendChild(paragraph);
      return;
    }

    const heading = document.createElement("h3");
    heading.textContent = trip.displayName;

    const summary = document.createElement("p");
    summary.textContent = `${trip.segments.length} segment${
      trip.segments.length === 1 ? "" : "s"
    }`;

    const segmentList = document.createElement("ol");
    trip.segments.forEach((segment) => {
      const listItem = document.createElement("li");
      const fromStop = trip.stopMap.get(segment.fromStopId);
      const toStop = trip.stopMap.get(segment.toStopId);
      const fromName = fromStop ? fromStop.name : segment.fromStopId;
      const toName = toStop ? toStop.name : segment.toStopId;

      const operator = segment.operator || "Rail";
      const lineName = segment.lineName || "Segment";
      listItem.textContent = `${fromName} to ${toName} via ${operator} ${lineName}`;
      segmentList.appendChild(listItem);
    });

    tripDetailsElement.appendChild(heading);
    tripDetailsElement.appendChild(summary);
    tripDetailsElement.appendChild(segmentList);
  }

  function fitMapToTrip(trip) {
    const points = [];

    trip.segments.forEach((segment) => {
      if (segment.mode === "non_rail") {
        return;
      }

      const path = getSegmentPath(trip, segment);
      if (!path || path.length < 2) {
        return;
      }

      path.forEach((point) => points.push(point));
    });

    if (points.length < 2) {
      return;
    }

    map.fitBounds(points, {
      padding: [35, 35],
      maxZoom: 7
    });
  }

  function getSegmentPath(trip, segment) {
    if (segment.mode === "non_rail") {
      return null;
    }

    const fromStop = trip.stopMap.get(segment.fromStopId);
    const toStop = trip.stopMap.get(segment.toStopId);

    if (Array.isArray(segment.path) && segment.path.length >= 2) {
      return segment.path;
    }

    if (segment.routeGeometryId && routeLookup.has(segment.routeGeometryId)) {
      const routePath = routeLookup.get(segment.routeGeometryId).path;
      const clippedPath = clipRoutePathToStops(routePath, fromStop, toStop);
      if (clippedPath && clippedPath.length >= 2) {
        return clippedPath;
      }
      return routePath;
    }

    if (!fromStop || !toStop) {
      return null;
    }

    if (
      !isValidCoordinate(fromStop.lat, fromStop.lon) ||
      !isValidCoordinate(toStop.lat, toStop.lon)
    ) {
      return null;
    }

    return [
      [fromStop.lat, fromStop.lon],
      [toStop.lat, toStop.lon]
    ];
  }

  function clipRoutePathToStops(routePath, fromStop, toStop) {
    if (!Array.isArray(routePath) || routePath.length < 2) {
      return null;
    }

    if (!fromStop || !toStop) {
      return null;
    }

    if (
      !isValidCoordinate(fromStop.lat, fromStop.lon) ||
      !isValidCoordinate(toStop.lat, toStop.lon)
    ) {
      return null;
    }

    const fromPoint = [fromStop.lat, fromStop.lon];
    const toPoint = [toStop.lat, toStop.lon];
    const fromIndex = findNearestPointIndex(routePath, fromPoint);
    const toIndex = findNearestPointIndex(routePath, toPoint);

    if (fromIndex === null || toIndex === null) {
      return null;
    }

    let clipped;
    if (fromIndex <= toIndex) {
      clipped = routePath.slice(fromIndex, toIndex + 1);
    } else {
      clipped = routePath.slice(toIndex, fromIndex + 1).reverse();
    }

    if (!clipped.length) {
      return null;
    }

    if (!isSamePoint(clipped[0], fromPoint)) {
      clipped.unshift(fromPoint);
    }

    if (!isSamePoint(clipped[clipped.length - 1], toPoint)) {
      clipped.push(toPoint);
    }

    return dedupeSequentialPoints(clipped);
  }

  function findNearestPointIndex(path, targetPoint) {
    let nearestIndex = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index < path.length; index += 1) {
      const point = path[index];
      if (!Array.isArray(point) || point.length < 2) {
        continue;
      }

      const lat = point[0];
      const lon = point[1];
      if (!isValidCoordinate(lat, lon)) {
        continue;
      }

      const distance = squaredDistance([lat, lon], targetPoint);
      if (distance < bestDistance) {
        bestDistance = distance;
        nearestIndex = index;
      }
    }

    return nearestIndex;
  }

  function squaredDistance(a, b) {
    const latDiff = a[0] - b[0];
    const lonDiff = a[1] - b[1];
    return latDiff * latDiff + lonDiff * lonDiff;
  }

  function isSamePoint(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length < 2 || b.length < 2) {
      return false;
    }

    return Math.abs(a[0] - b[0]) < 0.00001 && Math.abs(a[1] - b[1]) < 0.00001;
  }

  function dedupeSequentialPoints(points) {
    if (!Array.isArray(points) || !points.length) {
      return [];
    }

    const deduped = [points[0]];
    for (let index = 1; index < points.length; index += 1) {
      if (!isSamePoint(points[index], deduped[deduped.length - 1])) {
        deduped.push(points[index]);
      }
    }
    return deduped;
  }

  function normalizeTrip(trip, validationWarnings) {
    if (!trip || typeof trip !== "object") {
      validationWarnings.push("Skipped an invalid trip record.");
      return null;
    }

    if (!trip.id) {
      validationWarnings.push("Skipped trip with missing id.");
      return null;
    }

    if (!Array.isArray(trip.stops) || !trip.stops.length) {
      validationWarnings.push(`Skipped ${trip.id}: missing stops.`);
      return null;
    }

    if (!Array.isArray(trip.segments) || !trip.segments.length) {
      validationWarnings.push(`Skipped ${trip.id}: missing segments.`);
      return null;
    }

    const stops = trip.stops.map((stop) => ({ ...stop }));
    const stopMap = new Map(stops.map((stop) => [stop.id, stop]));
    const segments = [...trip.segments].sort((a, b) => a.sequence - b.sequence);

    segments.forEach((segment) => {
      if (!stopMap.has(segment.fromStopId) || !stopMap.has(segment.toStopId)) {
        validationWarnings.push(
          `${trip.id}: segment ${segment.id || "unknown"} has unknown stop id(s).`
        );
      }
    });

    for (let index = 1; index < segments.length; index += 1) {
      if (segments[index - 1].toStopId !== segments[index].fromStopId) {
        validationWarnings.push(
          `${trip.id}: segment continuity break between sequence ${
            segments[index - 1].sequence
          } and ${segments[index].sequence}.`
        );
      }
    }

    const firstSegment = segments[0];
    const lastSegment = segments[segments.length - 1];
    const startStop = stopMap.get(firstSegment.fromStopId);
    const endStop = stopMap.get(lastSegment.toStopId);

    const displayName =
      typeof trip.name === "string" && trip.name.trim()
        ? trip.name.trim()
        : `${startStop ? startStop.name : "Trip start"} to ${
            endStop ? endStop.name : "Trip end"
          }`;

    return {
      ...trip,
      displayName,
      stops,
      stopMap,
      segments
    };
  }

  function isValidCoordinate(lat, lon) {
    return (
      typeof lat === "number" &&
      typeof lon === "number" &&
      Number.isFinite(lat) &&
      Number.isFinite(lon)
    );
  }
})();
