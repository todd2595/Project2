var mymap = L.map("mapid", {
    doubleClickZoom: false
}).setView([39.9526, -75.1652], 13);

var pinLayer = L.layerGroup();
console.log(pinLayer);

mymap.addLayer(pinLayer);

var marker = L.marker([39.9526, -75.2652]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>First popup.");

function onMapClick(e) {

    console.log(e.latlng.lat, e.latlng.lng);
    var location = "" + e.latlng.lat + "," + e.latlng.lng
//   alert("You clicked the map at " + e.latlng);
document.getElementById("latlngBttn").value = location;
  var pin = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            e.latlng.lng,
            e.latlng.lat
          ]
        }
      }
    ]
  }
  pinLayer.clearLayers();
  L.geoJSON(pin).addTo(pinLayer).addTo(mymap);
}

mymap.on("dblclick", onMapClick);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
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
  mymap.on("locationfound", onLocationFound);
});


// ======================================================================================
