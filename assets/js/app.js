var map;

function initialize() {
  // Create a simple map.
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 16,
    center: {
      lat: 53.668398,
      lng: -2.167713
    },
    styles: [{
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#efefef"
      }]
    }, {
      "featureType": "water",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#dedddd"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#efefef"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }]
    }]
  });

  // Load a GeoJSON from the same server as our demo.
  //map.data.loadGeoJson('http://pixelsandcode.local:5757/map.json');
}
google.maps.event.addDomListener(window, 'load', initialize);