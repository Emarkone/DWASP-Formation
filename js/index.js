var mymap = L.map('my_osm_widget_map', { /* use the same name as your <div id=""> */
  center: [35.1508, 136.7341], /* set GPS Coordinates */
  zoom: 17, /* define the zoom level */
  zoomControl: false, /* false = no zoom control buttons displayed */
  scrollWheelZoom: false /* false = scrolling zoom on the map is locked */
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFrc3RhdGUiLCJhIjoiY2tscnhqZWMwMXJoOTJubjNydGl6bm1hdiJ9.MC5ieyoUNEl7wauYIwP6kA'
}).addTo(mymap);

L.marker([35.1508, 136.7341]).addTo(mymap); /* set your location's GPS Coordinates : [LAT,LON] */