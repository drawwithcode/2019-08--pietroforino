var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiYW5kcmVhYmVuZWRldHRpIiwiYSI6ImNqNWh2eGh3ejFqOG8zM3BrZjRucGZkOGEifQ.SmdBpUoSe3s0tm-OTDFY9Q");
var s;
var myLat;
var myLon;
var position;

var options = {
  lat: 0,
  lng: 0,
  zoom: 15,
  style: "mapbox://styles/mapbox/dark-v8"
}

function preload() {
  position = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight-160); //create canvas without the horrible scrollling effect caused by the html part
  myLat = position.latitude;
  myLon = position.longitude;

  options.lat = myLat;
  options.lng = myLon;

  myMap = mappa.tileMap(options); //group in tileMap all the informations
  myMap.overlay(canvas); //cover the whole canvas with the map
}

function draw() {
  clear(); //delete all the contect that is inside our canvas

var myPosition = myMap.latLngToPixel(myLat, myLon); //from lat and lon to x and y

//radar effect
noFill();
stroke('#39ff14');
if (frameCount > 430) {
for (var i = 0; i<=150; i++) {
  ellipse(myPosition.x, myPosition.y, frameCount/i);
}
}

// var radar = frameCount*2
// if (radar >= 100) {
//       radar=0
//     }
//
// ellipse(myPosition.x, myPosition.y, radar);



}
