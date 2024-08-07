
// Step 3: Write a function to generate random markers
function getRandomLatLng(map) {
    // get the boundaries of the map
    // let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng];
}

// Step 1
let denmark = [56.2639, 9.5018]; // # Singapore latlang
let map = L.map('map').setView(denmark, 13); // #2 Set the center point

// Step 2: setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);


// Step 4: create marker cluster
function markerCluster(markerClusterLayer, num, bounds) {
    for (let i = 0; i < num; i++) {
        let pos = getRandomLatLng(bounds);
        L.marker(pos).addTo(markerClusterLayer);
    }
}

// Create five marker cluster groups with different numbers of markers
let markerClusterLayer1 = L.markerClusterGroup();
let markerClusterLayer2 = L.markerClusterGroup();
let markerClusterLayer3 = L.markerClusterGroup();
let markerClusterLayer4 = L.markerClusterGroup();
let markerClusterLayer5 = L.markerClusterGroup();

let bounds = map.getBounds().pad(0.5); // extend the bounds to avoid overlapping markers


markerCluster(markerClusterLayer1, 50, bounds);
markerCluster(markerClusterLayer2, 75, bounds);
// markerCluster(markerClusterLayer3, 100, bounds);
// markerCluster(markerClusterLayer4, 125, bounds);
// markerCluster(markerClusterLayer5, 10, bounds);

// Add each cluster group to the map
markerClusterLayer1.addTo(map);
markerClusterLayer2.addTo(map);
markerClusterLayer3.addTo(map);
markerClusterLayer4.addTo(map);
markerClusterLayer5.addTo(map);