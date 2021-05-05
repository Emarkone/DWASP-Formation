// NAVBAR
$( document ).ready(function() {

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = -$('#navbar').outerHeight() + "px";
  }
  prevScrollpos = currentScrollPos;
}

});

// MAP INTEGRATION

var mymap = L.map('my_osm_widget_map', {
  center: [35.1508, 136.7341],
  zoom: 17
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    zoom: 30,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFrc3RhdGUiLCJhIjoiY2tscnhqZWMwMXJoOTJubjNydGl6bm1hdiJ9.MC5ieyoUNEl7wauYIwP6kA'
}).addTo(mymap);

L.marker([35.1508, 136.7341]).addTo(mymap); /* set your location's GPS Coordinates : [LAT,LON] */

