let myMap;
let canvas;
const mappa = new Mappa('MapboxGL', "pk.eyJ1IjoicGlldHJvZm9yaW5vIiwiYSI6ImNqeHgzd3JwajBrc2YzaXBma3UxODdmdWUifQ.8jG3b2D80IsptKlqlr0l8w");

var duomoLat = 45.4641013;
var duomoLon = 9.1897325;

// Lets put all our map options in a single object
const options = {
  lat: duomoLat,
  lng: duomoLon,
  zoom: 13,
  style: "mapbox://styles/pietroforino/ck2wdg4id1ivd1co69u1t7nys" // default tile for Leaflet
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw(){
  clear();

  var point = myMap.latLngToPixel(duomoLat, duomoLon);
  fill(255, 0, 0);
  noStroke();
  ellipse(point.x, point.y, 10)
}
