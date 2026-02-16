# US Rail Trip Explorer - Design Doc

## 1. Purpose
Build a web app that visualizes US passenger rail routes and user-recorded trips. Visitors can browse a list of named trips and see selected trip details on the map.

## 2. Product Goals
- Show a clean US map with national/regional passenger rail routes visible but unobtrusive.
- Let the owner maintain trip data manually through Codex/file edits.
- Store each trip as structured segments (including transfers and stopovers).
- Let visitors select a trip from a left sidebar list.
- Show all trips by default; highlight details for a selected trip.

## 3. Core Requirements
1. Initial map state:
- Display US map.
- Display rail network (Amtrak, Brightline, regional rail where data is available) in a muted, legible style.

2. Trip data management:
- Trip data is added and updated manually (no in-app add-route flow in phase 1).
- A trip contains one or more segments.
- Segments can represent transfers and stopovers (multi-destination journeys).

3. Trip list:
- Left sidebar displays trip names.
- If a trip has no explicit name, generate one using start and end city (example: `San Diego to Chicago`).
- Do not use full stop-by-stop text as the list label.

4. Map interaction:
- No selected trip: display all saved trips on the map.
- Selected trip: visually emphasize selected trip path.
- Selected trip: label transfer stations and intermediate destinations for that trip.
- Non-selected trips remain visible in a de-emphasized style.

## 4. Non-Goals (Phase 1)
- Real-time train status tracking.
- Timetable/booking integration.
- Natural-language trip parsing or in-app trip authoring forms.
- Mobile native app.
- Full global rail coverage.

## 5. Primary User Flows

### 5.1 Maintain Trip Data (Manual via Codex)
1. Owner provides trip details directly in Codex.
2. Trip is entered as structured data (trip, stops, ordered segments).
3. Data is validated for continuity and required fields.
4. App loads the updated trip data and shows it in the sidebar/map.

### 5.2 Explore Trips (Visitor)
1. Visitor lands on app and sees map + trip list.
2. With no selection, all trip paths are visible.
3. Visitor clicks a trip name.
4. Selected trip is highlighted; transfer stations and intermediate destinations are labeled.

## 6. Information Architecture
- Main layout:
- Left panel: Trip list
- Main panel: Map canvas
- Optional top bar: search/filter/theme controls (future)

- Trip list item:
- `displayName` (provided name or fallback)
- Optional metadata (distance, date range, number of segments)

## 7. Data Model (Proposed)

```ts
type CityStop = {
  id: string;
  name: string;            // "Chicago"
  state?: string;          // "IL"
  stationName?: string;    // "Union Station"
  lat: number;
  lon: number;
  role: "origin" | "destination" | "transfer" | "stopover" | "intermediate";
};

type TripSegment = {
  id: string;
  operator?: string;       // "Amtrak"
  lineName?: string;       // "Pacific Surfliner"
  fromStopId: string;
  toStopId: string;
  routeGeometryId?: string; // reference to base rail geometry
  sequence: number;
};

type Trip = {
  id: string;
  name?: string;           // e.g. "USA Rail Pass Adventure"
  displayName: string;     // computed: name ?? `${startCity} to ${endCity}`
  stops: CityStop[];
  segments: TripSegment[];
  createdAt: string;
  updatedAt: string;
};
```

## 8. Map Visualization Spec
- Base map: low-contrast land/water/state boundaries.
- Rail network layer:
- Thin lines in muted color with high enough contrast for legibility.
- Separate styling tokens for national vs regional operators if needed.

- Trips overlay:
- Default state:
- All trips visible at medium-low emphasis.
- Selected state:
- Selected trip line: higher contrast and thickness.
- Non-selected trip lines: fade (lower opacity).
- Selected trip markers:
- Origin and destination markers.
- Transfer markers.
- Intermediate destination/stopover markers.
- Labels only for selected trip transfer + intermediate destination points.

## 9. Manual Trip Data Workflow
1. Represent each trip as structured data with:
- Optional `name`
- Ordered `segments`
- `stops` including transfer/stopover roles
2. Validate before publishing:
- Segment sequence is continuous.
- First/last stops map to intended start/end cities.
- Each segment has valid from/to stop references.
3. Keep trip data in a versioned source file (JSON/TS/DB seed) maintained via Codex.

## 10. Naming Rules
- If user provides a trip name, use it.
- If not, compute fallback from first segment origin city and final segment destination city:
- Format: `<Start City> to <End City>`
- Example: `Colfax to Chicago`

## 11. Technical Architecture (Phase 1 Proposal)
- Frontend: React + TypeScript.
- Mapping: MapLibre GL JS (or Leaflet if vector styling needs are light).
- Data format: GeoJSON for rail geometries + trip overlays.
- Data source strategy:
- Local versioned trip data file for phase 1 (JSON/TypeScript module), manually maintained.
- Optional backend/API later if editing/public contribution is added.

## 12. API Sketch (If Backend Used)
- `GET /api/trips` -> list trips
- `POST /api/trips` -> create a trip (future, if write access is enabled)
- `GET /api/rail-network` -> route geometries and metadata

## 13. Accessibility & UX Notes
- Keyboard-accessible trip list and selectable items.
- Sufficient color contrast for selected vs non-selected routes.
- Do not rely only on color; combine color + line thickness/marker shape.
- Clear empty/loading states.

## 14. Performance Considerations
- Use tiled/vector sources for larger rail datasets.
- Keep trip overlays in separate layer source for fast style switching.
- Debounce map-fit operations when changing selection quickly.

## 15. Rollout Plan
1. Milestone 1:
- Static map + base rail network layer.
2. Milestone 2:
- Trip data model + sidebar list + selection interactions.
3. Milestone 3:
- Manual data ingestion workflow + validation checks.
4. Milestone 4:
- Polish labels, accessibility, and performance.

## 16. Open Questions
- Which regional rail systems should be included in phase 1 dataset?
- Should phase 1 remain read-only for visitors?
- Should trip order in sidebar be by creation date, alphabetical, or custom?
- Should stopovers show duration labels (if mentioned)?
