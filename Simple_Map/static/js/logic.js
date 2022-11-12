// Add console.log to check to see if code works.
console.log("working"); 

// Create a map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// var marker = L.marker([51.5, -0.09]).addTo(map);

// 13.2.4 This method below is useful when multiple tile
// layers or background layers on our map.
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // Other map styles for id:
    // mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9,
    // mapbox/satellite-streets-v11
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Tile layer code to assign it to the streets variable.
// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     // Other map styles for id:
//     // mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9,
//     // mapbox/satellite-streets-v11
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then add our 'graymap' tile layer to the map.
// // The addTo func will add the graymap object tile layer to our let map.
// streets.addTo(map);


