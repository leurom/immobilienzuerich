// map.js
var map = L.map('map').setView([47.3667, 8.5500], 10); // Koordinaten für Zürich, Zoom-Level 10

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker für ausgewählten Standort
var marker = L.marker([47.3667, 8.5500], { draggable: true }).addTo(map);

// Event-Handler für das Verschieben des Markers
marker.on('dragend', function(event){
    var position = marker.getLatLng(); // Aktuelle Position des Markers
    console.log('Neue Position:', position.lat, position.lng); // Ausgabe der Koordinaten in der Konsole
    // Hier kannst du die Koordinaten weiterverarbeiten, z.B. in ein Formular eintragen
});


// Optional: Marker für Zürich hinzufügen
/* L.marker([47.3667, 8.5500]).addTo(map)
    .bindPopup('Zürich Canton')
    .openPopup(); */

/*
var map = L.map('map').setView([47.3667, 8.5500], 10); // Koordinaten für Zürich, Zoom-Level 10

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Laden und Anzeigen der GeoJSON-Grenzdaten des Kantons Zürich
fetch('/static/map.geojson')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: 'blue', // Farbe der Grenzlinie
                    weight: 2, // Dicke der Linie
                    opacity: 1 // Deckkraft der Linie
                };
            }
        }).addTo(map);
    });
*/
