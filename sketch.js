var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', "pk.eyJ1IjoiYW5kcmVhYmVuZWRldHRpIiwiYSI6ImNqNWh2eGh3ejFqOG8zM3BrZjRucGZkOGEifQ.SmdBpUoSe3s0tm-OTDFY9Q"); //qui potrseti usare leaflet o mapbox o altro

var myLat;
var myLon;

var position;

function preload(){
  position = getCurrentPosition();
}

var options = {
  lat: 0,
  lng: 0,
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
