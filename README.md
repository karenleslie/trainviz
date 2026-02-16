# US Rail Trip Explorer

Static web app for visualizing US passenger rail routes and manually managed trip itineraries.

## Run locally
1. In this folder, start a local server:
   - `python3 -m http.server 8000`
2. Open `http://localhost:8000` in a browser.

## Manual trip data updates
- Base rail lines: edit `/data/rail-network.js`
- User trip itineraries: edit `/data/trips.js`

Current default:
- Passenger rail network data is preloaded.
- `window.TRAIN_TRIPS` starts empty.

Trip naming rule:
- If `name` is present, it is used in the left list.
- If `name` is omitted, the app falls back to `<Start City> to <End City>`.

## Implemented behavior
- US map with muted rail network overlay.
- Left sidebar list of trip names.
- No selection: all trips displayed.
- Selected trip: highlighted route with de-emphasized non-selected trips.
- Selected trip labels for transfer/intermediate/stopover points.
