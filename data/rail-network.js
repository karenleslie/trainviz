(function () {
  "use strict";

  const STOPS = {
    vancouver_bc: [49.2827, -123.1207],
    bellingham: [48.7519, -122.4787],
    everett: [47.9789, -122.2021],
    seattle: [47.6062, -122.3321],
    tacoma: [47.2529, -122.4443],
    lakewood_wa: [47.1718, -122.5185],
    olympia_lacey: [47.0357, -122.9043],
    centralia: [46.7162, -122.9543],
    kelso_longview: [46.1468, -122.9084],
    vancouver_wa: [45.6387, -122.6615],
    portland: [45.5152, -122.6784],
    salem: [44.9429, -123.0351],
    eugene: [44.0521, -123.0868],
    klamath_falls: [42.2249, -121.7817],

    sacramento: [38.5816, -121.4944],
    auburn_ca: [38.8966, -121.0769],
    roseville: [38.7521, -121.288],
    davis: [38.5449, -121.7405],
    martinez: [38.0194, -122.1341],
    richmond_ca: [37.9358, -122.3477],
    emeryville: [37.8382, -122.2989],
    oakland: [37.8044, -122.2712],
    san_francisco: [37.7764, -122.3955],
    san_jose: [37.3382, -121.8863],
    fremont: [37.5485, -121.9886],
    stockton: [37.9577, -121.2908],
    tracy: [37.7397, -121.4252],
    modesto: [37.6391, -120.9969],
    merced: [37.3022, -120.4829],
    fresno: [36.7378, -119.7871],
    bakersfield: [35.3733, -119.0187],
    salinas: [36.6777, -121.6555],
    san_luis_obispo: [35.2828, -120.6596],
    santa_barbara: [34.4208, -119.6982],
    ventura: [34.2746, -119.229],
    oxnard: [34.1975, -119.1771],
    burbank: [34.1808, -118.309],
    los_angeles: [34.0562, -118.2365],
    fullerton: [33.8704, -117.9242],
    anaheim: [33.8353, -117.9145],
    irvine: [33.6846, -117.8265],
    san_juan_capistrano: [33.5017, -117.6625],
    oceanside: [33.1959, -117.3795],
    san_diego: [32.7157, -117.1611],
    san_bernardino: [34.1083, -117.2898],
    riverside: [33.9533, -117.3961],
    perris: [33.7825, -117.2286],
    moorpark: [34.2856, -118.882],
    palmdale: [34.5794, -118.1164],
    lancaster: [34.6868, -118.1542],
    el_monte: [34.0686, -118.0276],

    reno: [39.5296, -119.8138],
    truckee: [39.3279, -120.1833],
    colfax: [39.1007, -120.9533],
    elko: [40.8324, -115.7631],
    salt_lake_city: [40.7608, -111.891],
    green_river_ut: [38.9956, -110.1595],
    grand_junction: [39.0639, -108.5506],
    glenwood_springs: [39.5505, -107.3248],
    granby_co: [39.9449, -105.8172],
    denver: [39.7392, -104.9903],
    fort_morgan: [40.2508, -103.8018],
    mccook: [40.2014, -100.6265],
    omaha: [41.2565, -95.9345],
    burlington_ia: [40.8075, -91.1129],
    galesburg: [40.9478, -90.3712],

    flagstaff: [35.1983, -111.6513],
    winslow: [35.0242, -110.6974],
    albuquerque: [35.0844, -106.6504],
    trinidad: [37.1695, -104.5005],
    la_junta: [37.985, -103.5438],
    dodge_city: [37.7528, -100.0171],
    newton_ks: [38.0467, -97.3451],
    topeka: [39.0473, -95.6752],
    kansas_city: [39.0997, -94.5786],
    barstow: [34.8986, -117.0173],
    kingman: [35.1894, -114.053],
    needles: [34.8481, -114.6141],
    tucson: [32.2226, -110.9747],
    el_paso: [31.7619, -106.485],
    san_antonio: [29.4241, -98.4936],
    austin: [30.2672, -97.7431],
    fort_worth: [32.7555, -97.3308],
    dallas: [32.7767, -96.797],
    houston: [29.7604, -95.3698],
    yuma: [32.6927, -114.6277],
    palm_springs: [33.8303, -116.5453],
    oklahoma_city: [35.4676, -97.5164],
    little_rock: [34.7465, -92.2896],

    chicago: [41.8781, -87.6298],
    south_bend: [41.6764, -86.252],
    toledo: [41.6528, -83.5379],
    cleveland: [41.4993, -81.6944],
    buffalo: [42.8864, -78.8784],
    rochester: [43.1566, -77.6088],
    syracuse: [43.0481, -76.1474],
    utica: [43.1009, -75.2327],
    schenectady: [42.8142, -73.9396],
    albany: [42.6526, -73.7562],
    hudson_ny: [42.2529, -73.7909],
    poughkeepsie: [41.7004, -73.921],
    yonkers: [40.9312, -73.8988],
    niagara_falls: [43.0962, -79.0377],
    saratoga_springs: [43.0831, -73.7846],
    rutland: [43.6106, -72.9726],
    white_river_jct: [43.648, -72.3184],
    essex_jct: [44.4928, -73.1104],
    st_albans: [44.8101, -73.0832],
    greenfield_ma: [42.5876, -72.6006],
    brattleboro: [42.8509, -72.5579],
    springfield_ma: [42.1015, -72.5898],
    hartford: [41.7658, -72.6734],
    new_haven: [41.3083, -72.9279],
    providence: [41.824, -71.4128],
    boston: [42.3601, -71.0589],
    portland_me: [43.6591, -70.2568],
    brunswick_me: [43.914, -69.9653],
    worcester: [42.2626, -71.8023],
    woburn: [42.4793, -71.1523],
    lowell: [42.6334, -71.3162],
    haverhill: [42.7762, -71.0773],
    fitchburg: [42.5834, -71.8023],
    franklin_ma: [42.0834, -71.3967],
    middleborough: [41.8948, -70.9111],
    kingston: [41.879, -70.7248],
    greenbush: [42.1784, -70.7469],
    newburyport: [42.8126, -70.8773],
    rockport: [42.6584, -70.6203],

    st_louis: [38.627, -90.1994],
    jefferson_city: [38.5767, -92.1735],
    independence_mo: [39.0911, -94.4155],
    bloomington_il: [40.4842, -88.9937],
    springfield_il: [39.7817, -89.6501],
    champaign: [40.1164, -88.2434],
    carbondale: [37.7273, -89.2168],
    memphis: [35.1495, -90.049],
    jackson_ms: [32.2988, -90.1848],
    new_orleans: [29.9511, -90.0715],
    ann_arbor: [42.2808, -83.743],
    detroit: [42.3314, -83.0458],
    pontiac: [42.6389, -83.291],
    kalamazoo: [42.2917, -85.5872],
    east_lansing: [42.7369, -84.4839],
    port_huron: [42.9709, -82.4249],
    grand_rapids: [42.9634, -85.6681],
    milwaukee: [43.0389, -87.9065],
    la_crosse: [43.8014, -91.2396],
    st_paul: [44.9537, -93.09],
    minneapolis: [44.9778, -93.265],
    fargo: [46.8772, -96.7898],
    minot: [48.233, -101.2963],
    williston: [48.1469, -103.6179],
    havre: [48.5519, -109.6776],
    whitefish: [48.4127, -114.338],
    spokane: [47.6588, -117.426],
    wenatchee: [47.4235, -120.3103],
    pasco: [46.2396, -119.1006],

    new_york: [40.7506, -73.9935],
    newark_nj: [40.7357, -74.1724],
    secaucus: [40.7895, -74.0565],
    trenton: [40.2171, -74.7429],
    philadelphia: [39.9526, -75.1652],
    wilmington: [39.7447, -75.5484],
    baltimore: [39.2904, -76.6122],
    bwi: [39.1774, -76.6684],
    washington: [38.9072, -77.0369],
    alexandria: [38.8048, -77.0469],
    richmond: [37.5407, -77.436],
    petersburg: [37.2279, -77.4019],
    raleigh: [35.7796, -78.6382],
    durham: [35.994, -78.8986],
    greensboro: [36.0726, -79.792],
    high_point: [35.9557, -80.0053],
    salisbury_nc: [35.6709, -80.4742],
    charlotte: [35.2271, -80.8431],
    charlottesville: [38.0293, -78.4767],
    lynchburg: [37.4138, -79.1422],
    roanoke: [37.2709, -79.9414],
    culpeper: [38.4732, -78.0019],
    cincinnati: [39.1031, -84.512],
    indianapolis: [39.7684, -86.1581],
    pittsburgh: [40.4406, -79.9959],
    harrisburg: [40.2732, -76.8867],
    lancaster_pa: [40.0379, -76.3055],
    greenville_sc: [34.8526, -82.394],
    atlanta: [33.749, -84.388],
    birmingham: [33.5186, -86.8104],
    meridian: [32.3643, -88.7037],
    columbia_sc: [34.0007, -81.0348],
    florence_sc: [34.1954, -79.7626],
    savannah: [32.0809, -81.0912],
    jacksonville: [30.3322, -81.6557],
    orlando: [28.5384, -81.3789],
    tampa: [27.9506, -82.4572],
    west_palm: [26.7153, -80.0534],
    fort_lauderdale: [26.1224, -80.1373],
    miami: [25.7617, -80.1918],
    norfolk: [36.8508, -76.2859],
    newport_news: [37.0871, -76.473],
    fredericksburg: [38.3032, -77.4605],
    spotsylvania: [38.174, -77.5416],
    manassas: [38.7509, -77.4753],
    broad_run: [38.8126, -77.7192],
    harpers_ferry: [39.3254, -77.7389],
    martinsburg: [39.4562, -77.9639],
    perryville: [39.5601, -76.071],
    camden_yards: [39.284, -76.6217],
    laurel_md: [39.0993, -76.8483],
    rockville_md: [39.084, -77.1528],
    new_london: [41.3557, -72.0995],

    jamaica: [40.7009, -73.8079],
    hicksville: [40.7684, -73.5251],
    ronkonkoma: [40.8154, -73.1123],
    babylon: [40.6957, -73.3257],
    hempstead: [40.7062, -73.6187],
    long_beach: [40.5884, -73.6579],
    huntington: [40.8682, -73.4257],
    port_jefferson: [40.9465, -73.0693],
    new_rochelle: [40.9115, -73.7824],
    stamford: [41.0534, -73.5387],
    bridgeport: [41.1792, -73.1894],
    white_plains: [41.033, -73.7629],
    southeast_ny: [41.4148, -73.6021],
    beacon: [41.5048, -73.969],
    new_canaan: [41.1468, -73.4948],
    south_norwalk: [41.0959, -73.4218],
    danbury: [41.3948, -73.454],
    waterbury: [41.5582, -73.0515],

    long_branch_nj: [40.3043, -73.9924],
    bay_head: [40.0718, -74.0543],
    new_brunswick: [40.4862, -74.4518],
    metropark: [40.5686, -74.3296],
    summit_nj: [40.7146, -74.3574],
    dover_nj: [40.8837, -74.5596],
    hackettstown: [40.8537, -74.8291],
    montclair: [40.8259, -74.209],
    raritan: [40.5718, -74.6321],
    high_bridge: [40.6676, -74.8954],
    ridgewood_nj: [40.982, -74.1165],
    suffern: [41.1132, -74.1538],
    spring_valley: [41.1112, -74.0438],
    port_jervis: [41.3751, -74.6927],
    atlantic_city: [39.3643, -74.4229],

    paoli: [40.042, -75.4846],
    thorndale: [39.9923, -75.7577],
    lansdale: [40.2415, -75.2838],
    doylestown: [40.3101, -75.1299],
    warminster: [40.2079, -75.0899],
    west_trenton: [40.2807, -74.8174],
    media_wawa: [39.9018, -75.4602],
    newark_de: [39.6837, -75.7497],
    norristown: [40.1215, -75.3399],
    fox_chase: [40.0762, -75.0934],
    chestnut_hill_w: [40.0518, -75.2116],
    chestnut_hill_e: [40.0602, -75.1521],
    jenkintown: [40.0937, -75.1266],

    des_plaines: [42.0334, -87.8834],
    arlington_heights: [42.0884, -87.9806],
    barrington: [42.1539, -88.1362],
    crystal_lake: [42.2411, -88.3162],
    fox_lake: [42.3961, -88.1834],
    waukegan: [42.3636, -87.8448],
    kenosha: [42.5847, -87.8212],
    geneva: [41.8875, -88.3054],
    elburn: [41.8925, -88.4726],
    downers_grove: [41.8089, -88.0112],
    naperville: [41.7508, -88.1535],
    aurora: [41.7606, -88.3201],
    blue_island: [41.6564, -87.6814],
    joliet: [41.525, -88.0817],
    harvey: [41.6108, -87.6462],
    university_park: [41.4434, -87.6375],
    glenview: [42.0698, -87.7878],
    deerfield_il: [42.1711, -87.8445],
    elmhurst: [41.8995, -87.9403],
    bensenville: [41.955, -87.9401],
    northbrook: [42.1275, -87.8289],
    grayslake: [42.3445, -88.0417],
    antioch_il: [42.4772, -88.0956],
    elgin: [42.0372, -88.2812],
    worth: [41.6895, -87.797],
    orland_park: [41.6303, -87.8539],
    manhattan_il: [41.4225, -87.9856],
    gary: [41.5934, -87.3464],
    michigan_city: [41.7075, -86.895],

    larkspur: [37.9341, -122.5353],
    san_rafael: [37.9735, -122.5311],
    santa_rosa: [38.4405, -122.7144],
    sonoma_airport: [38.508, -122.8129],

    ogden: [41.223, -111.9738],
    provo: [40.2338, -111.6585],

    santa_fe: [35.687, -105.9378],
    bernalillo: [35.3223, -106.5511],
    belen: [34.6628, -106.7764],

    deerfield_beach: [26.3184, -80.0998],
    debary: [28.8833, -81.3081],
    winter_park: [28.599, -81.3392],
    kissimmee: [28.2919, -81.4076],
    poinciana: [28.1402, -81.4722],

    dallas_victory: [32.788, -96.8067],
    irving: [32.814, -96.9489],
    denton_tx: [33.2148, -97.1331],
    lewisville: [33.0462, -96.9942],
    carrollton: [32.9756, -96.8903],
    austin_leander: [30.5788, -97.8531],
    austin_downtown: [30.2672, -97.7431],
    nashville: [36.1627, -86.7816],
    lebanon_tn: [36.2081, -86.2911],

    lorton: [38.7043, -77.2278],
    sanford: [28.8029, -81.2695],

    windsor_on: [42.3149, -83.0364],
    chatham_on: [42.4048, -82.191],
    london_on: [42.9849, -81.2453],
    toronto_on: [43.6532, -79.3832],
    kingston_on: [44.2312, -76.486],
    ottawa_on: [45.4215, -75.6972],
    montreal_qc: [45.5017, -73.5673],
    drummondville_qc: [45.88, -72.4848],
    quebec_city_qc: [46.8139, -71.2082],
    moncton_nb: [46.0878, -64.7782],
    bathurst_nb: [47.6188, -65.6517],
    campbellton_nb: [48.0075, -66.6727],
    ste_foy_qc: [46.7879, -71.2894],
    halifax_ns: [44.6488, -63.5752],
    sudbury_on: [46.4917, -80.993],
    toronto_west_jct_on: [43.6705, -79.4836],
    malton_on: [43.7058, -79.6404],
    brampton_on: [43.7315, -79.7624],
    winnipeg_mb: [49.8951, -97.1384],
    saskatoon_sk: [52.1332, -106.670],
    edmonton_ab: [53.5461, -113.4938],
    jasper_ab: [52.8737, -118.0814],
    kamloops_bc: [50.6745, -120.3273],
    banff_ab: [51.1784, -115.5708],
    whistler_bc: [50.1163, -122.9574],
    quesnel_bc: [52.9784, -122.4931],
    moab_ut: [38.5733, -109.5498],
    prince_george_bc: [53.9171, -122.7497],
    prince_rupert_bc: [54.315, -130.3208]
  };

  function buildPath(stopIds, routeId) {
    const points = [];
    stopIds.forEach((stopId) => {
      const point = STOPS[stopId];
      if (!point) {
        console.warn("Missing stop coordinate", routeId, stopId);
        return;
      }
      points.push(point);
    });
    return points;
  }

  function route(id, operator, service, stopIds) {
    return {
      id,
      operator,
      service,
      path: buildPath(stopIds, id)
    };
  }

  window.RAIL_NETWORK_ROUTES = [
    route("amtrak-acela", "Amtrak", "Acela", [
      "boston",
      "providence",
      "new_haven",
      "new_york",
      "philadelphia",
      "baltimore",
      "washington"
    ]),
    route("amtrak-northeast-regional", "Amtrak", "Northeast Regional", [
      "boston",
      "providence",
      "new_haven",
      "new_york",
      "newark_nj",
      "trenton",
      "philadelphia",
      "wilmington",
      "baltimore",
      "washington",
      "richmond",
      "petersburg",
      "raleigh",
      "charlotte"
    ]),
    route("amtrak-downeaster", "Amtrak", "Downeaster", [
      "boston",
      "woburn",
      "haverhill",
      "portland_me",
      "brunswick_me"
    ]),
    route("amtrak-empire-service", "Amtrak", "Empire Service", [
      "new_york",
      "yonkers",
      "poughkeepsie",
      "hudson_ny",
      "albany",
      "schenectady",
      "utica",
      "syracuse",
      "rochester",
      "buffalo",
      "niagara_falls"
    ]),
    route("amtrak-maple-leaf", "Amtrak", "Maple Leaf", [
      "new_york",
      "albany",
      "syracuse",
      "rochester",
      "buffalo",
      "niagara_falls"
    ]),
    route("amtrak-adirondack", "Amtrak", "Adirondack", [
      "new_york",
      "albany",
      "saratoga_springs",
      "st_albans"
    ]),
    route("amtrak-ethan-allen", "Amtrak", "Ethan Allen Express", [
      "new_york",
      "albany",
      "saratoga_springs",
      "rutland"
    ]),
    route("amtrak-vermonter", "Amtrak", "Vermonter", [
      "washington",
      "baltimore",
      "philadelphia",
      "new_york",
      "new_haven",
      "hartford",
      "springfield_ma",
      "greenfield_ma",
      "brattleboro",
      "white_river_jct",
      "essex_jct",
      "st_albans"
    ]),
    route("amtrak-keystone", "Amtrak", "Keystone Service", [
      "new_york",
      "newark_nj",
      "trenton",
      "philadelphia",
      "lancaster_pa",
      "harrisburg"
    ]),
    route("amtrak-pennsylvanian", "Amtrak", "Pennsylvanian", [
      "new_york",
      "philadelphia",
      "harrisburg",
      "pittsburgh"
    ]),
    route("amtrak-cardinal", "Amtrak", "Cardinal", [
      "new_york",
      "philadelphia",
      "baltimore",
      "washington",
      "charlottesville",
      "cincinnati",
      "indianapolis",
      "chicago"
    ]),
    route("amtrak-capitol-limited", "Amtrak", "Capitol Limited", [
      "washington",
      "pittsburgh",
      "cleveland",
      "toledo",
      "south_bend",
      "chicago"
    ]),
    route(
      "amtrak-lake-shore-limited-ny",
      "Amtrak",
      "Lake Shore Limited (NY Section)",
      [
        "new_york",
        "albany",
        "syracuse",
        "buffalo",
        "cleveland",
        "toledo",
        "south_bend",
        "chicago"
      ]
    ),
    route(
      "amtrak-lake-shore-limited-bos",
      "Amtrak",
      "Lake Shore Limited (Boston Section)",
      ["boston", "worcester", "springfield_ma", "albany"]
    ),
    route("amtrak-crescent", "Amtrak", "Crescent", [
      "new_york",
      "philadelphia",
      "baltimore",
      "washington",
      "charlottesville",
      "lynchburg",
      "greensboro",
      "charlotte",
      "greenville_sc",
      "atlanta",
      "birmingham",
      "meridian",
      "new_orleans"
    ]),
    route("amtrak-silver-meteor", "Amtrak", "Silver Meteor", [
      "new_york",
      "philadelphia",
      "baltimore",
      "washington",
      "richmond",
      "raleigh",
      "florence_sc",
      "savannah",
      "jacksonville",
      "orlando",
      "west_palm",
      "fort_lauderdale",
      "miami"
    ]),
    route("amtrak-silver-star", "Amtrak", "Silver Star", [
      "new_york",
      "philadelphia",
      "baltimore",
      "washington",
      "richmond",
      "raleigh",
      "columbia_sc",
      "savannah",
      "jacksonville",
      "orlando",
      "tampa",
      "miami"
    ]),
    route("amtrak-carolinian", "Amtrak", "Carolinian", [
      "new_york",
      "philadelphia",
      "washington",
      "richmond",
      "raleigh",
      "durham",
      "greensboro",
      "high_point",
      "charlotte"
    ]),
    route("amtrak-palmetto", "Amtrak", "Palmetto", [
      "new_york",
      "philadelphia",
      "washington",
      "richmond",
      "raleigh",
      "florence_sc",
      "savannah"
    ]),
    route("amtrak-piedmont", "Amtrak", "Piedmont", [
      "raleigh",
      "durham",
      "greensboro",
      "high_point",
      "salisbury_nc",
      "charlotte"
    ]),
    route("amtrak-auto-train", "Amtrak", "Auto Train", [
      "lorton",
      "sanford"
    ]),
    route("amtrak-city-of-new-orleans", "Amtrak", "City of New Orleans", [
      "chicago",
      "champaign",
      "carbondale",
      "memphis",
      "jackson_ms",
      "new_orleans"
    ]),
    route("amtrak-illini-saluki", "Amtrak", "Illini / Saluki", [
      "chicago",
      "champaign",
      "carbondale"
    ]),
    route("amtrak-lincoln-service", "Amtrak", "Lincoln Service", [
      "chicago",
      "bloomington_il",
      "springfield_il",
      "st_louis"
    ]),
    route(
      "amtrak-missouri-river-runner",
      "Amtrak",
      "Missouri River Runner",
      ["st_louis", "jefferson_city", "independence_mo", "kansas_city"]
    ),
    route("amtrak-hiawatha", "Amtrak", "Hiawatha", ["chicago", "milwaukee"]),
    route("amtrak-borealis", "Amtrak", "Borealis", [
      "chicago",
      "milwaukee",
      "la_crosse",
      "st_paul"
    ]),
    route("amtrak-wolverine", "Amtrak", "Wolverine", [
      "chicago",
      "kalamazoo",
      "ann_arbor",
      "detroit",
      "pontiac"
    ]),
    route("amtrak-blue-water", "Amtrak", "Blue Water", [
      "chicago",
      "kalamazoo",
      "east_lansing",
      "port_huron"
    ]),
    route("amtrak-pere-marquette", "Amtrak", "Pere Marquette", [
      "chicago",
      "grand_rapids"
    ]),
    route("amtrak-empire-builder-seattle", "Amtrak", "Empire Builder", [
      "chicago",
      "milwaukee",
      "st_paul",
      "fargo",
      "minot",
      "williston",
      "havre",
      "whitefish",
      "spokane",
      "wenatchee",
      "everett",
      "seattle"
    ]),
    route(
      "amtrak-empire-builder-portland",
      "Amtrak",
      "Empire Builder Portland Section",
      ["spokane", "pasco", "portland"]
    ),
    route("amtrak-california-zephyr", "Amtrak", "California Zephyr", [
      "emeryville",
      "sacramento",
      "colfax",
      "truckee",
      "reno",
      "elko",
      "salt_lake_city",
      "green_river_ut",
      "grand_junction",
      "glenwood_springs",
      "granby_co",
      "denver",
      "fort_morgan",
      "mccook",
      "omaha",
      "burlington_ia",
      "galesburg",
      "chicago"
    ]),
    route("amtrak-southwest-chief", "Amtrak", "Southwest Chief", [
      "los_angeles",
      "fullerton",
      "san_bernardino",
      "barstow",
      "kingman",
      "flagstaff",
      "winslow",
      "albuquerque",
      "trinidad",
      "la_junta",
      "dodge_city",
      "newton_ks",
      "topeka",
      "kansas_city",
      "chicago"
    ]),
    route("amtrak-texas-eagle", "Amtrak", "Texas Eagle", [
      "chicago",
      "st_louis",
      "little_rock",
      "dallas",
      "fort_worth",
      "austin",
      "san_antonio"
    ]),
    route("amtrak-sunset-limited", "Amtrak", "Sunset Limited", [
      "los_angeles",
      "palm_springs",
      "yuma",
      "tucson",
      "el_paso",
      "san_antonio",
      "houston",
      "new_orleans"
    ]),
    route("amtrak-heartland-flyer", "Amtrak", "Heartland Flyer", [
      "fort_worth",
      "oklahoma_city"
    ]),
    route("amtrak-coast-starlight", "Amtrak", "Coast Starlight", [
      "los_angeles",
      "santa_barbara",
      "san_luis_obispo",
      "salinas",
      "oakland",
      "sacramento",
      "klamath_falls",
      "eugene",
      "portland",
      "seattle"
    ]),
    route("amtrak-cascades", "Amtrak", "Cascades", [
      "vancouver_bc",
      "bellingham",
      "everett",
      "seattle",
      "tacoma",
      "olympia_lacey",
      "centralia",
      "kelso_longview",
      "vancouver_wa",
      "portland",
      "salem",
      "eugene"
    ]),
    route("amtrak-pacific-surfliner", "Amtrak", "Pacific Surfliner", [
      "san_diego",
      "oceanside",
      "san_juan_capistrano",
      "irvine",
      "anaheim",
      "los_angeles",
      "oxnard",
      "santa_barbara",
      "san_luis_obispo"
    ]),
    route(
      "amtrak-san-joaquins-oakland",
      "Amtrak",
      "San Joaquins (Oakland)",
      ["oakland", "emeryville", "stockton", "modesto", "merced", "fresno", "bakersfield"]
    ),
    route(
      "amtrak-san-joaquins-sacramento",
      "Amtrak",
      "San Joaquins (Sacramento)",
      ["sacramento", "stockton", "modesto", "merced", "fresno", "bakersfield"]
    ),
    route(
      "amtrak-capitol-corridor",
      "Amtrak",
      "Capitol Corridor",
      [
        "auburn_ca",
        "sacramento",
        "davis",
        "martinez",
        "richmond_ca",
        "oakland",
        "fremont",
        "san_jose"
      ]
    ),
    route("amtrak-virginia-roanoke", "Amtrak", "Virginia Service (Roanoke)", [
      "washington",
      "alexandria",
      "culpeper",
      "charlottesville",
      "lynchburg",
      "roanoke"
    ]),
    route("amtrak-virginia-norfolk", "Amtrak", "Virginia Service (Norfolk)", [
      "washington",
      "alexandria",
      "richmond",
      "norfolk"
    ]),
    route(
      "amtrak-virginia-newport-news",
      "Amtrak",
      "Virginia Service (Newport News)",
      ["washington", "alexandria", "richmond", "newport_news"]
    ),
    route(
      "amtrak-hartford-line",
      "Amtrak",
      "Amtrak Hartford Line",
      ["new_haven", "hartford", "springfield_ma"]
    ),
    route("brightline-florida", "Brightline", "Florida Service", [
      "miami",
      "fort_lauderdale",
      "west_palm",
      "orlando"
    ]),

    route("caltrain-peninsula", "Caltrain", "Peninsula Corridor", [
      "san_francisco",
      "san_jose"
    ]),
    route("ace-altamont-corridor", "ACE", "Altamont Corridor Express", [
      "stockton",
      "tracy",
      "fremont",
      "san_jose"
    ]),
    route("smart-sonoma-marin", "SMART", "Sonoma-Marin Area Rail Transit", [
      "larkspur",
      "san_rafael",
      "santa_rosa",
      "sonoma_airport"
    ]),
    route("coaster-san-diego", "NCTD", "COASTER", ["san_diego", "oceanside"]),
    route("metrolink-antelope-valley", "Metrolink", "Antelope Valley Line", [
      "los_angeles",
      "burbank",
      "palmdale",
      "lancaster"
    ]),
    route("metrolink-san-bernardino", "Metrolink", "San Bernardino Line", [
      "los_angeles",
      "el_monte",
      "san_bernardino"
    ]),
    route("metrolink-orange-county", "Metrolink", "Orange County Line", [
      "los_angeles",
      "fullerton",
      "irvine",
      "oceanside"
    ]),
    route("metrolink-ventura-county", "Metrolink", "Ventura County Line", [
      "los_angeles",
      "burbank",
      "moorpark",
      "ventura"
    ]),
    route("metrolink-91-perris", "Metrolink", "91/Perris Valley Line", [
      "los_angeles",
      "fullerton",
      "riverside",
      "perris"
    ]),
    route("metrolink-riverside", "Metrolink", "Riverside Line", [
      "los_angeles",
      "riverside"
    ]),
    route("sounder-south", "Sound Transit", "Sounder South", [
      "seattle",
      "tacoma",
      "lakewood_wa"
    ]),
    route("sounder-north", "Sound Transit", "Sounder North", [
      "seattle",
      "everett"
    ]),
    route("uta-frontrunner", "UTA", "FrontRunner", [
      "ogden",
      "salt_lake_city",
      "provo"
    ]),
    route("nm-rail-runner", "Rio Metro", "New Mexico Rail Runner", [
      "santa_fe",
      "bernalillo",
      "albuquerque",
      "belen"
    ]),
    route("tri-rail", "Tri-Rail", "South Florida", [
      "miami",
      "fort_lauderdale",
      "deerfield_beach",
      "west_palm"
    ]),
    route("sunrail", "SunRail", "Central Florida", [
      "debary",
      "winter_park",
      "orlando",
      "kissimmee",
      "poinciana"
    ]),
    route("trinity-railway-express", "TRE", "Dallas-Fort Worth", [
      "dallas_victory",
      "irving",
      "fort_worth"
    ]),
    route("dcta-a-train", "DCTA", "A-Train", [
      "denton_tx",
      "lewisville",
      "carrollton",
      "dallas"
    ]),
    route("capital-metrorail", "CapMetro", "Austin Rail", [
      "austin_leander",
      "austin_downtown"
    ]),
    route("music-city-star", "WeGo", "Music City Star", [
      "nashville",
      "lebanon_tn"
    ]),

    route("metra-up-north", "Metra", "Union Pacific North", [
      "chicago",
      "waukegan",
      "kenosha"
    ]),
    route("metra-up-northwest", "Metra", "Union Pacific Northwest", [
      "chicago",
      "des_plaines",
      "arlington_heights",
      "barrington",
      "crystal_lake"
    ]),
    route("metra-up-west", "Metra", "Union Pacific West", [
      "chicago",
      "elmhurst",
      "geneva",
      "elburn"
    ]),
    route("metra-bnsf", "Metra", "BNSF", [
      "chicago",
      "downers_grove",
      "naperville",
      "aurora"
    ]),
    route("metra-rock-island", "Metra", "Rock Island", [
      "chicago",
      "blue_island",
      "joliet"
    ]),
    route("metra-electric", "Metra", "Metra Electric", [
      "chicago",
      "harvey",
      "university_park"
    ]),
    route("metra-md-north", "Metra", "Milwaukee District North", [
      "chicago",
      "glenview",
      "deerfield_il",
      "fox_lake"
    ]),
    route("metra-md-west", "Metra", "Milwaukee District West", [
      "chicago",
      "elmhurst",
      "bensenville",
      "elgin"
    ]),
    route("metra-north-central", "Metra", "North Central Service", [
      "chicago",
      "glenview",
      "northbrook",
      "grayslake",
      "antioch_il"
    ]),
    route("metra-southwest", "Metra", "SouthWest Service", [
      "chicago",
      "worth",
      "orland_park",
      "manhattan_il"
    ]),
    route("metra-heritage", "Metra", "Heritage Corridor", [
      "chicago",
      "joliet"
    ]),
    route("south-shore-line", "NICTD", "South Shore Line", [
      "chicago",
      "gary",
      "michigan_city",
      "south_bend"
    ]),

    route("mbta-providence-stoughton", "MBTA", "Providence/Stoughton", [
      "boston",
      "providence"
    ]),
    route("mbta-worcester", "MBTA", "Framingham/Worcester", [
      "boston",
      "worcester"
    ]),
    route("mbta-lowell", "MBTA", "Lowell", ["boston", "lowell"]),
    route("mbta-haverhill", "MBTA", "Haverhill", [
      "boston",
      "woburn",
      "haverhill"
    ]),
    route("mbta-fitchburg", "MBTA", "Fitchburg", [
      "boston",
      "worcester",
      "fitchburg"
    ]),
    route("mbta-franklin", "MBTA", "Franklin/Foxboro", [
      "boston",
      "franklin_ma"
    ]),
    route("mbta-middleborough", "MBTA", "Middleborough", [
      "boston",
      "middleborough"
    ]),
    route("mbta-kingston", "MBTA", "Kingston", ["boston", "kingston"]),
    route("mbta-greenbush", "MBTA", "Greenbush", ["boston", "greenbush"]),
    route("mbta-newburyport", "MBTA", "Newburyport", [
      "boston",
      "newburyport"
    ]),
    route("mbta-rockport", "MBTA", "Rockport", ["boston", "rockport"]),

    route("metro-north-hudson", "Metro-North", "Hudson", [
      "new_york",
      "yonkers",
      "beacon",
      "poughkeepsie"
    ]),
    route("metro-north-harlem", "Metro-North", "Harlem", [
      "new_york",
      "white_plains",
      "southeast_ny"
    ]),
    route("metro-north-new-haven", "Metro-North", "New Haven", [
      "new_york",
      "new_rochelle",
      "stamford",
      "bridgeport",
      "new_haven"
    ]),
    route("metro-north-new-canaan", "Metro-North", "New Canaan", [
      "stamford",
      "new_canaan"
    ]),
    route("metro-north-danbury", "Metro-North", "Danbury", [
      "south_norwalk",
      "danbury"
    ]),
    route("metro-north-waterbury", "Metro-North", "Waterbury", [
      "bridgeport",
      "waterbury"
    ]),

    route("lirr-mainline", "LIRR", "Main Line / Ronkonkoma", [
      "new_york",
      "jamaica",
      "hicksville",
      "ronkonkoma"
    ]),
    route("lirr-port-jefferson", "LIRR", "Port Jefferson Branch", [
      "jamaica",
      "hicksville",
      "huntington",
      "port_jefferson"
    ]),
    route("lirr-babylon", "LIRR", "Babylon Branch", [
      "jamaica",
      "babylon"
    ]),
    route("lirr-hempstead", "LIRR", "Hempstead Branch", [
      "jamaica",
      "hempstead"
    ]),
    route("lirr-long-beach", "LIRR", "Long Beach Branch", [
      "jamaica",
      "long_beach"
    ]),

    route("njt-nec", "NJ Transit", "Northeast Corridor", [
      "trenton",
      "new_brunswick",
      "metropark",
      "newark_nj",
      "new_york"
    ]),
    route("njt-nj-coast", "NJ Transit", "North Jersey Coast", [
      "new_york",
      "newark_nj",
      "long_branch_nj",
      "bay_head"
    ]),
    route("njt-morris-essex", "NJ Transit", "Morris & Essex", [
      "new_york",
      "newark_nj",
      "summit_nj",
      "dover_nj",
      "hackettstown"
    ]),
    route("njt-montclair-boonton", "NJ Transit", "Montclair-Boonton", [
      "new_york",
      "newark_nj",
      "montclair",
      "dover_nj"
    ]),
    route("njt-raritan-valley", "NJ Transit", "Raritan Valley", [
      "newark_nj",
      "raritan",
      "high_bridge"
    ]),
    route("njt-main-bergen", "NJ Transit", "Main/Bergen", [
      "new_york",
      "secaucus",
      "ridgewood_nj",
      "suffern"
    ]),
    route("njt-pascack-valley", "NJ Transit", "Pascack Valley", [
      "secaucus",
      "spring_valley"
    ]),
    route("njt-port-jervis", "NJ Transit", "Port Jervis", [
      "secaucus",
      "suffern",
      "port_jervis"
    ]),
    route("njt-atlantic-city", "NJ Transit", "Atlantic City Line", [
      "philadelphia",
      "atlantic_city"
    ]),

    route("septa-paoli-thorndale", "SEPTA", "Paoli/Thorndale", [
      "philadelphia",
      "paoli",
      "thorndale"
    ]),
    route("septa-trenton", "SEPTA", "Trenton", ["philadelphia", "trenton"]),
    route("septa-west-trenton", "SEPTA", "West Trenton", [
      "philadelphia",
      "jenkintown",
      "west_trenton"
    ]),
    route("septa-wilmington-newark", "SEPTA", "Wilmington/Newark", [
      "philadelphia",
      "wilmington",
      "newark_de"
    ]),
    route("septa-media-wawa", "SEPTA", "Media/Wawa", [
      "philadelphia",
      "media_wawa"
    ]),
    route("septa-lansdale-doylestown", "SEPTA", "Lansdale/Doylestown", [
      "philadelphia",
      "lansdale",
      "doylestown"
    ]),
    route("septa-warminster", "SEPTA", "Warminster", [
      "philadelphia",
      "warminster"
    ]),
    route("septa-fox-chase", "SEPTA", "Fox Chase", [
      "philadelphia",
      "fox_chase"
    ]),
    route("septa-chestnut-hill-west", "SEPTA", "Chestnut Hill West", [
      "philadelphia",
      "chestnut_hill_w"
    ]),
    route("septa-chestnut-hill-east", "SEPTA", "Chestnut Hill East", [
      "philadelphia",
      "chestnut_hill_e"
    ]),
    route("septa-manayunk-norristown", "SEPTA", "Manayunk/Norristown", [
      "philadelphia",
      "norristown"
    ]),

    route("marc-penn", "MARC", "Penn Line", [
      "washington",
      "bwi",
      "baltimore",
      "perryville"
    ]),
    route("marc-camden", "MARC", "Camden Line", [
      "washington",
      "laurel_md",
      "camden_yards"
    ]),
    route("marc-brunswick", "MARC", "Brunswick Line", [
      "washington",
      "rockville_md",
      "harpers_ferry",
      "martinsburg"
    ]),
    route("vre-fredericksburg", "VRE", "Fredericksburg Line", [
      "washington",
      "alexandria",
      "fredericksburg",
      "spotsylvania"
    ]),
    route("vre-manassas", "VRE", "Manassas Line", [
      "washington",
      "alexandria",
      "manassas",
      "broad_run"
    ]),
    route("ctrain-hartford", "CT Rail", "Hartford Line", [
      "new_haven",
      "hartford",
      "springfield_ma"
    ]),
    route("shore-line-east", "CT Rail", "Shore Line East", [
      "new_haven",
      "new_london"
    ]),

    route("viarail-quebec-windsor", "VIA Rail", "Quebec City-Windsor", [
      "windsor_on",
      "chatham_on",
      "london_on",
      "toronto_on",
      "kingston_on",
      "ottawa_on",
      "montreal_qc",
      "drummondville_qc",
      "quebec_city_qc"
    ]),
    route("viarail-canadian", "VIA Rail", "The Canadian", [
      "toronto_on",
      "toronto_west_jct_on",
      "malton_on",
      "brampton_on",
      "sudbury_on",
      "winnipeg_mb",
      "saskatoon_sk",
      "edmonton_ab",
      "jasper_ab",
      "kamloops_bc",
      "vancouver_bc"
    ]),
    route("viarail-ocean", "VIA Rail", "Ocean", [
      "montreal_qc",
      "ste_foy_qc",
      "moncton_nb",
      "bathurst_nb",
      "campbellton_nb",
      "halifax_ns"
    ]),
    route("viarail-skeena", "VIA Rail", "Skeena", [
      "jasper_ab",
      "prince_george_bc",
      "prince_rupert_bc"
    ]),
    route(
      "rocky-mountaineer-first-passage-west",
      "Rocky Mountaineer",
      "First Passage to the West",
      ["vancouver_bc", "kamloops_bc", "banff_ab"]
    ),
    route(
      "rocky-mountaineer-journey-clouds",
      "Rocky Mountaineer",
      "Journey Through the Clouds",
      ["vancouver_bc", "kamloops_bc", "jasper_ab"]
    ),
    route(
      "rocky-mountaineer-rainforest-gold-rush",
      "Rocky Mountaineer",
      "Rainforest to Gold Rush",
      ["vancouver_bc", "whistler_bc", "quesnel_bc", "jasper_ab"]
    ),
    route(
      "rocky-mountaineer-red-rocks",
      "Rocky Mountaineer",
      "Rockies to the Red Rocks",
      ["moab_ut", "glenwood_springs", "denver"]
    )
  ].filter((routeRecord) => routeRecord.path.length >= 2);
})();
