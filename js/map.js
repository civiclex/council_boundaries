// Create empty layerGroups for the layer control object
var CD_72 = L.layerGroup(),
CD_82 = L.layerGroup(),
CD_92 = L.layerGroup(),
CD_02 = L.layerGroup(),
CD_12 = L.layerGroup();

/* // Create Map Object centered on the middle of Kentucky (Original)
var map = L.map('map', {
minZoom: 7,
maxZoom: 12
}); */

//Initialize the leaflet map
var map = L.map('map', {
    center: [38.0147,-84.483],
    zoom: 11,
    zoomControl: true,
    dragging: true,
});

// Add the base map
var basemap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
});

//Create a leaflet control for the legend
//Give the legend an onAdd handler
//Add the legend to the map
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1000, 2000, 3000, 4000, 5000],
        labels = [];
};
legend.addTo(map);

// Get geojson background layers
$.getJSON("data/Council_District_1972.geojson", function(data) {
    CD_72Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        //fillOpacity: .25,
        color: '#d55e00',
        weight: 2,
        opacity: 1,
        //fillColor: '#BFDFEC'
    }).addTo(map);
       //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
    });

$.getJSON("data/Council_District_1982.geojson", function(data) {
    CD_82Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        //fillOpacity: .25,
        color: '#cc79a7',
        weight: 2,
        opacity: 1,
        //fillColor: '#BFDFEC'
    }).addTo(map);
        //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
    });

$.getJSON("data/Council_District_1992.geojson", function(data) {
    CD_92Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        //fillOpacity: .25,
        color: '#0072b2',
        weight: 2,
        opacity: 1,
        //fillColor: '#BFDFEC'
    }).addTo(map);
        //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
    });
$.getJSON("data/Council_District_2002.geojson", function(data) {
    CD_02Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        //fillOpacity: .25,
        color: '#f0e442',
        weight: 2,
        opacity: 1,
        //fillColor: '#BFDFEC'
    }).addTo(map);
        //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
    });

$.getJSON("data/Council_District_2012.geojson", function(data) {
    CD_12Layer = L.geoJson(data, {
        //pane: 'urban_areas', 
        //onEachFeature: function ( feature, layer ){
        //urban_areas.addLayer(layer)},
        //pane: "pane450",
        //fillOpacity: .25,
        color: '#009e73',
        weight: 2,
        opacity: 1,
        //fillColor: '#BFDFEC'
    }).addTo(map);
        //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
    });

// Add layers to map so they are automatically selected in the layer control
map.addLayer(CD_72Layer)
map.addLayer(CD_82)
map.addLayer(CD_92)
map.addLayer(CD_02)
map.addLayer(CD_12)

// Create groupings for layer controller
var baseLayers = {
"Basemap": basemap
};

var yearLayers = {
    "1972": CD_72Layer,
    "1982": CD_82,
    "1992": CD_92,
    "2002": CD_02,
    "2012": CD_12
};

// Add layer controller to Map
L.control.layers(null, yearLayers).addTo(map); // the first item is always a radio button
