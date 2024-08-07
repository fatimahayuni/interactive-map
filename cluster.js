
// Step 3: Write a function to generate random markers
function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng];
}

// Step 1
let singapore = [1.3521, 103.8198]; // # Singapore latlang
let map = L.map('map').setView(singapore, 13); // #2 Set the center point

// Step 2: setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);


// Step 4: create marker cluster
function markerCluster(markerClusterLayer, num) {
    for (let i = 0; i < num; i++) {
        let pos = getRandomLatLng(map);
        L.marker(pos).addTo(markerClusterLayer);
    }
    markerClusterLayer.addTo(map);
}

// Create five marker cluster groups with different numbers of markers
let markerClusterLayer1 = L.markerClusterGroup();
let markerClusterLayer2 = L.markerClusterGroup();
let markerClusterLayer3 = L.markerClusterGroup();
let markerClusterLayer4 = L.markerClusterGroup();
let markerClusterLayer5 = L.markerClusterGroup();

markerCluster(markerClusterLayer1, 50);
markerCluster(markerClusterLayer2, 75);
markerCluster(markerClusterLayer3, 100);
markerCluster(markerClusterLayer4, 125);
markerCluster(markerClusterLayer5, 150);