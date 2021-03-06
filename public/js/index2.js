var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/bookings/",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "/api/bookings/",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/bookings/" + id,
      type: "DELETE"
    });
  }
};
// API.getExamples().then(function(data) {
//   console.log(data);
// });
var pinLayer = L.layerGroup();
var mymap = L.map("mapid").setView([39.9526, -75.1652], 13);
mymap.addLayer(pinLayer);
console.log(pinLayer);

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
//   switch (category) {
//   case "art":
//     artIcon();
//     break;

//   case "sport":
//     sportIcon();
//     break;

//   case "leisure":
//     leisureIcon();
//     break;

//   case "party":
//     partyIcon();
//     break;

//   case "music":
//     musicIcon();
//     break;
//   default:
//   }
// });
var artIcon = L.icon({
  iconUrl: "museum_paintings.png",
  iconSize: [38, 45], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var sportIcon = L.icon({
  iconUrl: "sport.png",
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});
var leisureIcon = L.icon({
  iconUrl: "leisure.png",
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

var partyIcon = L.icon({
  iconUrl: "party-2.png",
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});
var musicIcon = L.icon({
  iconUrl: "music.png",
  iconSize: [38, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});
// L.marker([39.5526, -75.1652], { icon: artIcon }).addTo(pinLayer).addTo(mymap).bindPopup(JSON.stringify(entry));
L.marker([39.5526, -75.7652], { icon: sportIcon })
  .addTo(pinLayer)
  .addTo(mymap)
  .bindPopup("I am a sport icon.");
L.marker([39.5526, -75.8652], { icon: leisureIcon })
  .addTo(pinLayer)
  .addTo(mymap)
  .bindPopup("I am a leisure icon.");
L.marker([39.5526, -75.6652], { icon: partyIcon })
  .addTo(pinLayer)
  .addTo(mymap)
  .bindPopup("I am party icon.");
L.marker([39.5526, -75.4652], { icon: musicIcon })
  .addTo(pinLayer)
  .addTo(mymap)
  .bindPopup("I am a music icon.");
