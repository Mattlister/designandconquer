/*

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

*/

<script>
      function initMap() {
        var map =  new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
          lat: 27.9881,
          lng: 86.9250
        }
        });
      }
      
      
      
  </script>
  
  <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6qFLVRq_t3uKSNe6uvC-as31sIjWD8kY&callback=initMap"></script>
  type="text/javascript"></script>
    <script src="assets/js/maps.js"></script>
