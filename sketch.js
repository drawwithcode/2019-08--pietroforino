var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', "pk.eyJ1IjoicGlldHJvZm9yaW5vIiwiYSI6ImNqeHgzd3JwajBrc2YzaXBma3UxODdmdWUifQ.8jG3b2D80IsptKlqlr0l8w");

var myLat;
var myLon;

var position;

function preload(){
  position = getCurrentPosition();
}

var options = {
  lat: 45.4642200,
  lng: 9.1905600,
  zoom: 13,
  style: 'mapbox://styles/pietroforino/ck2wdg4id1ivd1co69u1t7nys'
}

function setup() {
  console.log(position);

  canvas = createCanvas(windowWidth,windowHeight);

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

  fill('#AFFC41');
  noStroke();

  ellipse(myPosition.x, myPosition.y, 25);
}
