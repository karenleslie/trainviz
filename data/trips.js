/*
  Manual trip data source.

  Add and edit trip records directly in this array.
*/

window.TRAIN_TRIPS = [
  {
    id: "eclipse-trip-2024",
    name: "Eclipse Trip 2024",
    createdAt: "2024-04-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "sd",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "fullerton",
        name: "Fullerton",
        state: "CA",
        stationName: "Fullerton Transportation Center",
        lat: 33.8704,
        lon: -117.9242,
        role: "transfer"
      },
      {
        id: "chicago",
        name: "Chicago",
        state: "IL",
        stationName: "Union Station",
        lat: 41.8781,
        lon: -87.6298,
        role: "transfer"
      },
      {
        id: "rochester",
        name: "Rochester",
        state: "NY",
        stationName: "Louise M. Slaughter Station",
        lat: 43.1566,
        lon: -77.6088,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "eclipse-2024-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "sd",
        toStopId: "fullerton",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "eclipse-2024-seg-2",
        operator: "Amtrak",
        lineName: "Southwest Chief",
        fromStopId: "fullerton",
        toStopId: "chicago",
        routeGeometryId: "amtrak-southwest-chief",
        sequence: 2
      },
      {
        id: "eclipse-2024-seg-3",
        operator: "Amtrak",
        lineName: "Lake Shore Limited",
        fromStopId: "chicago",
        toStopId: "rochester",
        routeGeometryId: "amtrak-lake-shore-limited-ny",
        sequence: 3
      }
    ]
  },
  {
    id: "dissertation-trip",
    name: "Dissertation trip",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "dis-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "dis-la-out",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "dis-seattle",
        name: "Seattle",
        state: "WA",
        stationName: "King Street Station",
        lat: 47.6062,
        lon: -122.3321,
        role: "stopover"
      },
      {
        id: "dis-la-back",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "dis-sd-end",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "dissertation-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "dis-sd-start",
        toStopId: "dis-la-out",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "dissertation-seg-2",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "dis-la-out",
        toStopId: "dis-seattle",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 2
      },
      {
        id: "dissertation-seg-3",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "dis-seattle",
        toStopId: "dis-la-back",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 3
      },
      {
        id: "dissertation-seg-4",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "dis-la-back",
        toStopId: "dis-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 4
      }
    ]
  },
  {
    id: "flagstaff-trip",
    name: "Flagstaff trip",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "flag-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "flag-la-out",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "flag-flagstaff",
        name: "Flagstaff",
        state: "AZ",
        lat: 35.1983,
        lon: -111.6513,
        role: "stopover"
      },
      {
        id: "flag-la-back",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "flag-sd-end",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "flag-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "flag-sd-start",
        toStopId: "flag-la-out",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "flag-seg-2",
        operator: "Amtrak",
        lineName: "Southwest Chief",
        fromStopId: "flag-la-out",
        toStopId: "flag-flagstaff",
        routeGeometryId: "amtrak-southwest-chief",
        sequence: 2
      },
      {
        id: "flag-seg-3",
        operator: "Amtrak",
        lineName: "Southwest Chief",
        fromStopId: "flag-flagstaff",
        toStopId: "flag-la-back",
        routeGeometryId: "amtrak-southwest-chief",
        sequence: 3
      },
      {
        id: "flag-seg-4",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "flag-la-back",
        toStopId: "flag-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 4
      }
    ]
  },
  {
    id: "usa-rail-pass-trip",
    name: "USARail Pass Trip",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "usap-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "usap-la",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "usap-sacramento",
        name: "Sacramento",
        state: "CA",
        stationName: "Valley Station",
        lat: 38.5816,
        lon: -121.4944,
        role: "stopover"
      },
      {
        id: "usap-colfax",
        name: "Colfax",
        state: "CA",
        lat: 39.1007,
        lon: -120.9533,
        role: "transfer"
      },
      {
        id: "usap-denver",
        name: "Denver",
        state: "CO",
        stationName: "Union Station",
        lat: 39.7392,
        lon: -104.9903,
        role: "transfer"
      },
      {
        id: "usap-chicago-out",
        name: "Chicago",
        state: "IL",
        stationName: "Union Station",
        lat: 41.8781,
        lon: -87.6298,
        role: "transfer"
      },
      {
        id: "usap-alexandria",
        name: "Alexandria",
        state: "VA",
        stationName: "Alexandria Station",
        lat: 38.8048,
        lon: -77.0469,
        role: "stopover"
      },
      {
        id: "usap-chicago-back",
        name: "Chicago",
        state: "IL",
        stationName: "Union Station",
        lat: 41.8781,
        lon: -87.6298,
        role: "transfer"
      },
      {
        id: "usap-minneapolis",
        name: "Minneapolis",
        state: "MN",
        lat: 44.9778,
        lon: -93.265,
        role: "stopover"
      },
      {
        id: "usap-seattle",
        name: "Seattle",
        state: "WA",
        stationName: "King Street Station",
        lat: 47.6062,
        lon: -122.3321,
        role: "transfer"
      },
      {
        id: "usap-portland",
        name: "Portland",
        state: "OR",
        stationName: "Union Station",
        lat: 45.5152,
        lon: -122.6784,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "usap-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "usap-sd-start",
        toStopId: "usap-la",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "usap-seg-2",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "usap-la",
        toStopId: "usap-sacramento",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 2
      },
      {
        id: "usap-seg-3",
        operator: "Non-Rail",
        lineName: "Reposition",
        mode: "non_rail",
        fromStopId: "usap-sacramento",
        toStopId: "usap-colfax",
        sequence: 3
      },
      {
        id: "usap-seg-4",
        operator: "Amtrak",
        lineName: "California Zephyr",
        fromStopId: "usap-colfax",
        toStopId: "usap-denver",
        routeGeometryId: "amtrak-california-zephyr",
        sequence: 4
      },
      {
        id: "usap-seg-5",
        operator: "Amtrak",
        lineName: "California Zephyr",
        fromStopId: "usap-denver",
        toStopId: "usap-chicago-out",
        routeGeometryId: "amtrak-california-zephyr",
        sequence: 5
      },
      {
        id: "usap-seg-6",
        operator: "Amtrak",
        lineName: "Cardinal",
        fromStopId: "usap-chicago-out",
        toStopId: "usap-alexandria",
        routeGeometryId: "amtrak-cardinal",
        sequence: 6
      },
      {
        id: "usap-seg-7",
        operator: "Amtrak",
        lineName: "Cardinal",
        fromStopId: "usap-alexandria",
        toStopId: "usap-chicago-back",
        routeGeometryId: "amtrak-cardinal",
        sequence: 7
      },
      {
        id: "usap-seg-8",
        operator: "Amtrak",
        lineName: "Empire Builder",
        fromStopId: "usap-chicago-back",
        toStopId: "usap-minneapolis",
        routeGeometryId: "amtrak-empire-builder-seattle",
        sequence: 8
      },
      {
        id: "usap-seg-9",
        operator: "Amtrak",
        lineName: "Empire Builder",
        fromStopId: "usap-minneapolis",
        toStopId: "usap-seattle",
        routeGeometryId: "amtrak-empire-builder-seattle",
        sequence: 9
      },
      {
        id: "usap-seg-10",
        operator: "Amtrak",
        lineName: "Cascades",
        fromStopId: "usap-seattle",
        toStopId: "usap-portland",
        routeGeometryId: "amtrak-cascades",
        sequence: 10
      }
    ]
  },
  {
    id: "ca-rail-pass-trip",
    name: "CA Rail Pass Trip",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "ca-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "ca-la-out",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "ca-oakland-out",
        name: "Oakland",
        state: "CA",
        stationName: "Jack London Square",
        lat: 37.8044,
        lon: -122.2712,
        role: "transfer"
      },
      {
        id: "ca-bakersfield",
        name: "Bakersfield",
        state: "CA",
        lat: 35.3733,
        lon: -119.0187,
        role: "stopover"
      },
      {
        id: "ca-oakland-back",
        name: "Oakland",
        state: "CA",
        stationName: "Jack London Square",
        lat: 37.8044,
        lon: -122.2712,
        role: "transfer"
      },
      {
        id: "ca-la-back",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "ca-sd-end",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "ca-pass-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "ca-sd-start",
        toStopId: "ca-la-out",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "ca-pass-seg-2",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "ca-la-out",
        toStopId: "ca-oakland-out",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 2
      },
      {
        id: "ca-pass-seg-3",
        operator: "Amtrak",
        lineName: "San Joaquins",
        fromStopId: "ca-oakland-out",
        toStopId: "ca-bakersfield",
        routeGeometryId: "amtrak-san-joaquins-oakland",
        sequence: 3
      },
      {
        id: "ca-pass-seg-4",
        operator: "Amtrak",
        lineName: "San Joaquins",
        fromStopId: "ca-bakersfield",
        toStopId: "ca-oakland-back",
        routeGeometryId: "amtrak-san-joaquins-oakland",
        sequence: 4
      },
      {
        id: "ca-pass-seg-5",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "ca-oakland-back",
        toStopId: "ca-la-back",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 5
      },
      {
        id: "ca-pass-seg-6",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "ca-la-back",
        toStopId: "ca-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 6
      }
    ]
  },
  {
    id: "cscw-2023",
    name: "CSCW 2023",
    createdAt: "2023-10-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "cscw-minneapolis",
        name: "Minneapolis",
        state: "MN",
        lat: 44.9778,
        lon: -93.265,
        role: "origin"
      },
      {
        id: "cscw-seattle",
        name: "Seattle",
        state: "WA",
        stationName: "King Street Station",
        lat: 47.6062,
        lon: -122.3321,
        role: "transfer"
      },
      {
        id: "cscw-la",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "cscw-sd",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "cscw-seg-1",
        operator: "Amtrak",
        lineName: "Empire Builder",
        fromStopId: "cscw-minneapolis",
        toStopId: "cscw-seattle",
        routeGeometryId: "amtrak-empire-builder-seattle",
        sequence: 1
      },
      {
        id: "cscw-seg-2",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "cscw-seattle",
        toStopId: "cscw-la",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 2
      },
      {
        id: "cscw-seg-3",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "cscw-la",
        toStopId: "cscw-sd",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 3
      }
    ]
  },
  {
    id: "bottle-logic-visit",
    name: "Bottle Logic Visit",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "bl-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "bl-irvine",
        name: "Irvine",
        state: "CA",
        lat: 33.6846,
        lon: -117.8265,
        role: "transfer"
      },
      {
        id: "bl-sd-end",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "bl-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "bl-sd-start",
        toStopId: "bl-irvine",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "bl-seg-2",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "bl-irvine",
        toStopId: "bl-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 2
      }
    ]
  },
  {
    id: "milwaukee-trip",
    name: "Milwaukee Trip",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "mil-sd",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "mil-la",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "mil-seattle",
        name: "Seattle",
        state: "WA",
        stationName: "King Street Station",
        lat: 47.6062,
        lon: -122.3321,
        role: "transfer"
      },
      {
        id: "mil-milwaukee",
        name: "Milwaukee",
        state: "WI",
        stationName: "Intermodal Station",
        lat: 43.0389,
        lon: -87.9065,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "mil-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "mil-sd",
        toStopId: "mil-la",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "mil-seg-2",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "mil-la",
        toStopId: "mil-seattle",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 2
      },
      {
        id: "mil-seg-3",
        operator: "Amtrak",
        lineName: "Empire Builder",
        fromStopId: "mil-seattle",
        toStopId: "mil-milwaukee",
        routeGeometryId: "amtrak-empire-builder-seattle",
        sequence: 3
      }
    ]
  },
  {
    id: "fabric-hunting-with-dad",
    name: "Fabric Hunting with Dad",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "fabric-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "fabric-anaheim",
        name: "Anaheim",
        state: "CA",
        stationName: "Anaheim Regional Transportation Intermodal Center",
        lat: 33.8353,
        lon: -117.9145,
        role: "transfer"
      },
      {
        id: "fabric-sd-end",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "fabric-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "fabric-sd-start",
        toStopId: "fabric-anaheim",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "fabric-seg-2",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "fabric-anaheim",
        toStopId: "fabric-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 2
      }
    ]
  },
  {
    id: "dozens-probably-of-la-visits",
    name: "Dozens, probably, of LA visits",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    stops: [
      {
        id: "dozens-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "dozens-la",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "dozens-sd-end",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "dozens-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "dozens-sd-start",
        toStopId: "dozens-la",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "dozens-seg-2",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "dozens-la",
        toStopId: "dozens-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 2
      }
    ]
  }
];
