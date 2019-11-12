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
  console.log(position);

  canvas = createCanvas(windowWidth,windowHeight-160);

  myLat = position.latitude;
  myLon = position.longitude;

  options.lat = myLat;
  options.lng = myLon;

  myMap = mappa.tileMap(options); //dentro a tileMap mettiamo tutte le opzioni create
  myMap.overlay(canvas);
}

function draw() {
  clear(); //delete all the contect that is inside our canvas

var myPosition = myMap.latLngToPixel(myLat, myLon); //funzione che trasforma le cordinate lat e lon in x e y coordinate


noFill();
stroke('#39ff14');
if (frameCount > 250) {
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
