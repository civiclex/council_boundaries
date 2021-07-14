// Create empty layerGroups for the layer control object
//var brewers = L.layerGroup(),
//distillers = L.layerGroup(),
//millers = L.layerGroup(),
//farmers = L.layerGroup(),
 var states = L.layerGroup(),
counties = L.layerGroup(), 
urban_areas = L.layerGroup(),
CD_72 = L.layerGroup(),
CD_82 = L.layerGroup(),
CD_92 = L.layerGroup(),
CD_21 = L.layerGroup();


/* // Create Map Object centered on the middle of Kentucky (Original)
var map = L.map('map', {
minZoom: 7,
maxZoom: 12
}); */

//Initialize the leaflet map
var map = L.map('map', {
    //center: [38.0147,-84.483],
    //zoom: 11,
    zoomControl: true,
    dragging: true,
});

// Create additional map panes to fix layering issue
//map.createPane("pane200").style.zIndex = 200; // tile pane
//map.createPane("pane450").style.zIndex = 450; // between overlays and shadows
//map.createPane("pane600").style.zIndex = 600; // marker pane

// Add base map
/* var basemap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd'
}); */

// Add the base map
var basemap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
});

map.setView([38.0147,-84.483], 11);

// Use JQuery to get our geojson data
/* $.getJSON("data/brewers.geojson", function(data) {
brewerLayer = L.geoJson(data, {
    onEachFeature: function (feature, layer){
        brewers.addLayer(layer), layer.bindPopup('<b>'+feature.properties.LicenseeName+'</b><br>DBA: '+feature.properties.DBA+'<br>'+feature.properties.Address+'<br>'+feature.properties.City+', KY')},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker (latlng, {
            pane: "pane600",
            radius: 3,
            color: '#ffffff',
            weight: .5, 
            fillColor: '#E9C46A',
            fillOpacity: 1
        });
    }
})
}); */

/* $.getJSON("data/distillers.geojson", function(data) {
distillerLayer = L.geoJson(data, {
    onEachFeature: function (feature, layer){
        distillers.addLayer(layer), layer.bindPopup('<b>'+feature.properties.LicenseeName+'</b><br>DBA: '+feature.properties.DBA+'<br>'+feature.properties.Address+'<br>'+feature.properties.City+', KY')},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker (latlng, {
            pane: "pane600",
            radius: 3,
            color: '#ffffff', 
            weight: .5, 
            fillColor: '#E76F51',
            fillOpacity: 1
        });
    }
})
}); */

/* $.getJSON("data/millers.geojson", function(data) {
millerLayer = L.geoJson(data, {
    onEachFeature: function ( feature, layer ){
        millers.addLayer(layer), layer.bindPopup('<b>'+feature.properties.Name+"</b><br>"+feature.properties.Address+"<br>"+feature.properties.City+', KY')},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker (latlng, { 
        pane: "pane600",
        radius: 3,
        color: '#ffffff',
        weight: .5,
        fillColor: '#2A9D8F',
        fillOpacity: 1
        });
    }
})
}); */

/* $.getJSON("data/farmers.geojson", function(data) {
farmerLayer = L.geoJson(data, {
    onEachFeature: function ( feature, layer ){
    farmers.addLayer(layer), layer.bindPopup('<b>'+feature.properties.Farm_Name+'</b>')},
    //farmers.addLayer(layer), layer.bindPopup('<b>'+feature.properties.Farm_Name+"</b><br>"+feature.properties.Address+"<br>"+feature.properties.City+', KY')},
    pointToLayer: function (feature, latlng) {
    return L.circleMarker (latlng, { 
    pane: "pane600",
    radius: 3,
    color: '#ffffff',
    weight: .5,
    fillColor: '#729E2B',
    fillOpacity: 1
    });
    }
})
}); */

// Get geojson background layers
$.getJSON("data/urban_areas.geojson", function(data) {
urban_areaLayer = L.geoJson(data, {
    //pane: 'urban_areas', 
    onEachFeature: function ( feature, layer ){
    urban_areas.addLayer(layer)},
    pane: "pane450",
    fillOpacity: .25,
    weight: 0,
    opacity: 0,
    fillColor: '#BFDFEC'
}).addTo(map);
   //map.fitBounds(urban_areaLayer.getBounds()); // automatically fits the map to boundaries of this layer
});

$.getJSON("data/ky_counties.geojson", function(data) {
countyLayer = L.geoJson(data, {
    onEachFeature: function ( feature, layer ){
    counties.addLayer(layer)},
    weight: 1,
    opacity: 1,
    color: '#D3D3D3',
    //dashArray: '3',
    fillColor: '#264653',
    fillOpacity: 1
}).addTo(map);
});

$.getJSON("data/surrounding_states.geojson", function(data) {
statesLayer = L.geoJson(data, {
    onEachFeature: function ( feature, layer ){
    states.addLayer(layer)},
    pane: "pane200",
    weight: 1,
    opacity: 1,
    color: '#D3D3D3',
    //dashArray: '3',
    fillColor: '#ffffff',
    fillOpacity: 1
}).addTo(map);
});

// Add layers to map so they are automatically selected in the layer control
map.addLayer(brewers)
map.addLayer(distillers)
map.addLayer(millers)
map.addLayer(farmers)

// Create groupings for layer controller
var baseLayers = {
"Basemap": basemap
};

/* var userLayers = {
"Brewers": brewers,
"Distillers": distillers,
"Millers & Bakeries": millers,
"Farmers": farmers
}; */

var yearLayers = {
    "1972": CD_72,
    "1982": CD_82,
    "1992": CD_92,
    "2021": Cd_21
};

var colorLayers = {
"County Outlines": counties,
"Urban Areas": urban_areas
}

// Add layer controller to Map
L.control.layers(null, yearLayers).addTo(map); // the first item is always a radio button