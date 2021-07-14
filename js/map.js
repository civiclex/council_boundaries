//Create empty variables for geojson layer
var CD72Layer = L.geoJson();
var CD82Layer = L.geoJson();
var CD92Layer = L.geoJson();
var CD21Layer = L.geoJson();

//Initialize the leaflet map
 var map = L.map('map', {
    center: [38.0147,-84.483],
    zoom: 11,
    zoomControl: true,
    dragging: true,
});

//Create the baselayer
var baseLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
}).addTo(map);

// Get geojson background layers
$.getJSON("data/Council_District_1972.geojson", function(data) {
    CD72Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        strokeColor: '#BFDFEC',
        //fillOpacity: .25,
        weight: 2,
        opacity: 0,
        //fillColor: '#BFDFEC'
    }).addTo(map);
       //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
});

// Get geojson background layers
$.getJSON("data/Council_District_1982.geojson", function(data) {
    CD82Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        strokeColor: '#BFDFEC',
        //fillOpacity: .25,
        weight: 2,
        opacity: 0,
        //fillColor: '#BFDFEC'
    }).addTo(map);
});

// Get geojson background layers
$.getJSON("data/Council_District_1992.geojson", function(data) {
    CD92Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        strokeColor: '#BFDFEC',
        //fillOpacity: .25,
        weight: 2,
        opacity: 0,
        //fillColor: '#BFDFEC'
    }).addTo(map);
});

// Get geojson background layers
$.getJSON("data/Council_District_2021.geojson", function(data) {
    CD21Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        strokeColor: '#BFDFEC',
        //fillOpacity: .25,
        weight: 2,
        opacity: 0,
        //fillColor: '#BFDFEC'
    }).addTo(map);
       map.fitBounds(CD21Layer.getBounds()); // automatically fits the map to boundaries of this layer
});

/* //Create the district boundaries layer from the geojson
$.getJSON("data/Council_District_1972.geojson", function(data) {
    boundaryLayer = L.geoJson(data, {
    stroke: false,
    fillColor: '#ef6e4e',
    fillOpacity: 0.15,
}).addTo(map);
map.fitBounds(boundaryLayer.getBounds());
}); */

// Add layers to map so they are automatically selected in the layer control
map.addLayer(CD72Layer)
map.addLayer(CD82Layer)
map.addLayer(CD92Layer)
map.addLayer(CD21Layer)
map.addLayer(baseLayer)

// Create groupings for layer controller
var baseLayers = {
    "Basemap": basemap
};

var yearLayers = {
    "1972": CD72Layer,
    "1982": CD82Layer,
    "1992": CD92Layer,
    "2021": CD21Layer
};
 */
/* var colorLayers = {
    "County Outlines": counties,
    "Urban Areas": urban_areas
}

// Add layer controller to Map
L.control.layers(null, yearLayers).addTo(map); // the first item is always a radio button