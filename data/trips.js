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
    notes:
      "B and I went to New York to see the eclipse! Amateur mistake: I didn't give us a 24 hour buffer, so we were running late and decided to derail early in Rochester instead of going to Syracuse so we didn't miss the event! This is my only experience on an east coast sleeper, and we got put in the accessible room after some (re)scheduling mixups!",
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
    notes:
      "I always said I would either get a room in Mexico or a seat on a train to do deep work for my dissertation. I was writing my dissertation in 2020, and Mexico was closed at the time, so I took the train to Seattle to visit a friend. Coach on the way there, roomette on the way back. I got all my data coded and an addiction to long distance train travel.",
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
    notes:
      "Went with my sister in law to visit her aunt and uncle. Notably, she asked me to be her bridesmaid on this trip! We also arrived in Flagstaff before anything but the train station was opened, so we watched the train station soap opera unfold while we waited for the coffee shop to open.",
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
    notes:
      "During my postdoc, I got a USA rail pass: 10 segments in 30 days in coach. Visited friends all over the country, got a paper and a half written. A lifetime highlight. Photos available on my Instagram stories: @k_leslie",
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
    notes:
      "On a whim, decided to try the California Rail Pass. It was fun! Bakersfield was HOT.",
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
    notes:
      "Took the train on my way home from a conference. Glorious route. Took this trip in a roomette, and paid for it with points :)",
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
    notes:
      "Went with B to visit a favorite brewery of his. Stayed in a Narnia themed treehouse Airbnb. Met baby goats. Drank beer. Yum.",
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
    notes:
      "Visited Milwaukee for a Vocal Adventures story. Exceeded my expectations massively. Recommend visiting the Pabst Mansion.",
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
    notes:
      "Day trip up to Anaheim to visit an enormous fabric store as a surprise for Mom.",
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
    notes:
      "I love to do a day or weekend trip up to LA. A perfect little writing retreat or lunch date.",
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
  },
  {
    id: "the-canadian-attempt-1-fire",
    name: "the Canadian attempt 1 (thwarted by fire)",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    notes:
      "I wanted to take the longest rail trip in Canada- much longer than any in the USA. We would have gone from Toronto to Vancouver if there hadn't been fires in Jasper. We turned around in Saskatoon, I detrained in Winnipeg. I got the strangest souvenir from this trip: I was featured in a Winnipeg news story!",
    stops: [
      {
        id: "can1-toronto",
        name: "Toronto",
        state: "ON",
        stationName: "Toronto Union Station",
        lat: 43.6532,
        lon: -79.3832,
        role: "origin"
      },
      {
        id: "can1-saskatoon",
        name: "Saskatoon",
        state: "SK",
        stationName: "Saskatoon Station",
        lat: 52.1332,
        lon: -106.67,
        role: "transfer"
      },
      {
        id: "can1-winnipeg",
        name: "Winnipeg",
        state: "MB",
        stationName: "Winnipeg Union Station",
        lat: 49.8951,
        lon: -97.1384,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "can1-seg-1",
        operator: "VIA Rail",
        lineName: "The Canadian",
        fromStopId: "can1-toronto",
        toStopId: "can1-saskatoon",
        routeGeometryId: "viarail-canadian",
        sequence: 1
      },
      {
        id: "can1-seg-2",
        operator: "VIA Rail",
        lineName: "The Canadian",
        fromStopId: "can1-saskatoon",
        toStopId: "can1-winnipeg",
        routeGeometryId: "viarail-canadian",
        sequence: 2
      }
    ]
  },
  {
    id: "the-canadian-attempt-2-ice",
    name: "the Canadian attempt 2 (thwarted by ice)",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    notes:
      "I tried again to take the longest rail trip in Canada. This time, we didn't make it out of the Greater Toronto Area due to an ice storm bringing a tree down on the tracks. After this trip, I am certain that sitting in a stationary train does not have half the charm of sitting in a moving one.",
    stops: [
      {
        id: "can2-toronto",
        name: "Toronto",
        state: "ON",
        stationName: "Toronto Union Station",
        lat: 43.6532,
        lon: -79.3832,
        role: "origin"
      },
      {
        id: "can2-turnaround",
        name: "Turnaround Point",
        state: "ON",
        stationName: "Stopped before first station",
        lat: 43.7315,
        lon: -79.7624,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "can2-seg-1",
        operator: "VIA Rail",
        lineName: "The Canadian",
        fromStopId: "can2-toronto",
        toStopId: "can2-turnaround",
        routeGeometryId: "viarail-canadian",
        sequence: 1
      }
    ]
  },
  {
    id: "vocab-adventures-trip-1",
    name: "Vocab Adventures trip 1",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    notes:
      "Visited Seattle to write about it for my fiction side project, Vocal Adventures (vocabadventures.com). Goal was to visit lesser known tourist destinations. It was a delight.",
    stops: [
      {
        id: "vocab1-sd-start",
        name: "San Diego",
        state: "CA",
        stationName: "Santa Fe Depot",
        lat: 32.7157,
        lon: -117.1611,
        role: "origin"
      },
      {
        id: "vocab1-la-out",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "vocab1-seattle",
        name: "Seattle",
        state: "WA",
        stationName: "King Street Station",
        lat: 47.6062,
        lon: -122.3321,
        role: "stopover"
      },
      {
        id: "vocab1-la-back",
        name: "Los Angeles",
        state: "CA",
        stationName: "Union Station",
        lat: 34.0562,
        lon: -118.2365,
        role: "transfer"
      },
      {
        id: "vocab1-sd-end",
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
        id: "vocab1-seg-1",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "vocab1-sd-start",
        toStopId: "vocab1-la-out",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 1
      },
      {
        id: "vocab1-seg-2",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "vocab1-la-out",
        toStopId: "vocab1-seattle",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 2
      },
      {
        id: "vocab1-seg-3",
        operator: "Amtrak",
        lineName: "Coast Starlight",
        fromStopId: "vocab1-seattle",
        toStopId: "vocab1-la-back",
        routeGeometryId: "amtrak-coast-starlight",
        sequence: 3
      },
      {
        id: "vocab1-seg-4",
        operator: "Amtrak",
        lineName: "Pacific Surfliner",
        fromStopId: "vocab1-la-back",
        toStopId: "vocab1-sd-end",
        routeGeometryId: "amtrak-pacific-surfliner",
        sequence: 4
      }
    ]
  },
  {
    id: "rocky-mountaineer-vancouver-banff",
    name: "Rocky Mountaineer",
    createdAt: "2024-01-01",
    updatedAt: "2026-02-16",
    notes:
      "Before I really got addicted to rail travel, I was treated to this incredible trip. You sit in an observation car, eat very nice freshly made food, and detrain in the evening to sleep in a stationary hotel, so you don't miss any views!",
    stops: [
      {
        id: "rm-vancouver",
        name: "Vancouver",
        state: "BC",
        stationName: "Vancouver Station",
        lat: 49.2827,
        lon: -123.1207,
        role: "origin"
      },
      {
        id: "rm-banff",
        name: "Banff",
        state: "AB",
        stationName: "Banff Station",
        lat: 51.1784,
        lon: -115.5708,
        role: "destination"
      }
    ],
    segments: [
      {
        id: "rm-seg-1",
        operator: "Rocky Mountaineer",
        lineName: "First Passage to the West",
        fromStopId: "rm-vancouver",
        toStopId: "rm-banff",
        routeGeometryId: "rocky-mountaineer-first-passage-west",
        sequence: 1
      }
    ]
  }
];
