var mymap = L.map("mapid").setView([39.9526, -75.1652], 13);
var marker = L.marker([39.9526, -75.2652]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>First popup.").openPopup();

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

mymap.on("dblclick", onMapClick);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoiYXlvaXRzcmljaCIsImEiOiJjancxYmJ4YXUwazVnNDBtbWhmdmNtamdlIn0.loO3yUdBXNmMucvPTrmnCw"
  }
).addTo(mymap);

// ======================================================================================
function onLocationFound(e) {
  var radius = e.accuracy / 2;
  console.log("this was clicked");

  L.marker(e.latlng)
    .addTo(mymap)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(mymap);
  
}


$("#track-location").on("click", function() {
  mymap.on('locationfound', onLocationFound);
});

// ======================================================================================
