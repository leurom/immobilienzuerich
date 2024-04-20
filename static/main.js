// map.js
var map = L.map('map').setView([47.3667, 8.5500], 10); // Koordinaten für Zürich, Zoom-Level 10

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Optional: Marker für Zürich hinzufügen
/* L.marker([47.3667, 8.5500]).addTo(map)
    .bindPopup('Zürich Canton')
    .openPopup(); */
