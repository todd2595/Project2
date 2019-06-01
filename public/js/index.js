$(document).ready(function() {
  var pinLayer = L.layerGroup();
  var mymap = L.map("mapid").setView([39.9526, -75.1652], 13);
  mymap.addLayer(pinLayer);
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
  var art = L.icon({
    iconUrl: "../styles/pics/museum_paintings.png",
    iconSize: [38, 45], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var sport = L.icon({
    iconUrl: "../styles/pics/music.png",
    iconSize: [38, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  var leisure = L.icon({
    iconUrl: "../styles/pics/leisure.png",
    iconSize: [38, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  var party = L.icon({
    iconUrl: "../styles/pics/party-2.png",
    iconSize: [38, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  var trade = L.icon({
    iconUrl: "../styles/pics/music.png",
    iconSize: [38, 45],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  L.marker([-75.16505813677215, 39.95343802330849]);
  var API = {
    saveExample: function(example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(example)
      });
    },
    getExamples: function() {
      return $.ajax({
        url: "api/bookings",
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };
  API.getExamples().then(function(data) {
    // console.log(data[0].category);
    for (var i = 0; i < data.length; i++) {
      var category = data[i].category;
      console.log(data[i]);
      if (category === "Art") {
        var x = art;
      } else if (category === "Sport") {
        var x = sport;
      } else if (category === "Leisure") {
        var x = leisure;
      } else if (category === "Party") {
        var x = party;
      } else if (category === "Trade") {
        var x = trade;
      }
      var entry = {
        "Activity: ": data[i].activity,
        "Date: ": data[i].date,
        "Start Time: ": data[i].startTime,
        "End Time: ": data[i].endTime,
        "Description: ": data[i].comments
      };
      // console.log(data[i].long, data[i].lat);
      // var latLng = L.latLng(data[i].lat, data[i].long);
      // L.marker(latLng, { icon: x })
      //   .addTo(pinLayer)
      //   .addTo(mymap)
      //   .bindPopup(entry);
      // console.log(data[i]);
      var geojson = {
        type: "Feature",
        properties: {
          "name": data[i].activity,
          "popupContent": entry

        },
        geometry: {
          type: "Point",
          coordinates: [data[i].lat, data[i].long]
        }
      };
      L.geoJSON(geojson).addTo(mymap);
    }
  });
});
