// Step 1
// let singapore = [1.3521, 103.8198]; // # Singapore latlang
// let singaporeDiscoveryCentre = [1.3327, 103.6789]
// let jurongBirdPark = [1.3187, 103.7064]

// Step 2. Chaneg the first arg of setView
// let map = L.map('map').setView(jurongBirdPark, 13); // #2 Set the center point

// Step 3: Setup the tile layers
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

// Step 4: Create the marker
// let jurongBirdParkMarker = L.marker([1.3187, 103.7064])

// Step 5: Add to map
// singaporeMarker.addTo(map)
// jurongBirdParkMarker.addTo(map)

// Step 6: Optional. Add bindPopup()
// jurongBirdParkMarker.bindPopup("<p>Jurong Bird Park</p>")

// Step 7: Optional. Add eventListener
// singaporeMarker.addEventListener('click', function(){
//     alert("Singapore");
// })

// Step 8: Optional: Add circle
// Add circle to the map
// let circle = L.circle([1.3521, 103.8198], {
//     color: 'red',
//     fillColor:'orange',
//     fillOpacity:0.5,
//     radius: 500
// })

// add it to the map
// circle.addTo(map);

function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lng - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [randomLat, randomLng,];
}

document.addEventListener('DOMContentLoaded', function() {

    var map = L.map('singapore').setView([1.3521, 103.8198], 13); // Coordinates for Singapore and zoom level
 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 
    }).addTo(map);

    let singaporeMarker = L.marker([1.2834, 103.8607])
    
    singaporeMarker.addTo(map)

});