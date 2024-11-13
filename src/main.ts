// @deno-types="npm:@types/leaflet@^1.9.14"
import leaflet from "leaflet";

// Style sheets
import "leaflet/dist/leaflet.css";
import "./style.css";

// Fix missing marker images
import "./leafletWorkaround.ts";

//set application stylization
import "./style.css";

// Location of our classroom (as identified on Google Maps)
const _OAKES_CLASSROOM = leaflet.latLng(36.98949379578401, -122.06277128548504);
const _ZOOM_LEVEL = 20;

const APP_NAME = "IRL Gimmeghoul Finding";
const app = document.querySelector<HTMLDivElement>("#app")!;

document.title = APP_NAME;
app.innerHTML = APP_NAME;

const map = document.createElement("div");
map.id = "map";
map.offsetHeight;

const leafMap = leaflet.map(map!, {
  center: _OAKES_CLASSROOM,
  zoom: _ZOOM_LEVEL,
  minZoom: _ZOOM_LEVEL,
  maxZoom: _ZOOM_LEVEL,
  zoomControl: false,
  scrollWheelZoom: false,
});

leafMap.setView(_OAKES_CLASSROOM, _ZOOM_LEVEL);

leaflet
  .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  })
  .addTo(leafMap);
