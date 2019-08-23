$(document).ready(function() {
  var mapID = document.getElementById('map1');
  function initMap(lat, lng) {
    var myOptions = {
      zoom: 12,
     center:{lat:43.3601,lng: -71.0589},
    };
    
    let map = new google.maps.Map(mapID, myOptions);
    
    
    var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
    })
    
    let marker = new google.maps.Marker({
        
    })
    
    
    var transitLayer = new google.maps.TransitLayer();
transitLayer.setMap(map);
    }
    
   $('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map").css("width", "100%");
  });
  
   //New Map
   
   
    
  
    
});

$(document).ready(function() {
const mapID = document.getElementById("map1");
function initializeGMap(lat, lng) {
myLatlng = new google.maps.LatLng(lat, lng);
var myOptions = {
zoom: 12,
zoomControl: true,
 center:{lat:43.3601,lng: -71.0589},
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(mapID, myOptions);
myMarker = new google.maps.Marker({
position: myLatlng
});
myMarker.setMap(map);
}


// Re-init map before show modal
$('#myModal1').on('show.bs.modal', function(event) {
var button = $(event.relatedTarget);
initializeGMap(button.data('lat'), button.data('lng'));
$("#location-map").css("width", "100%");
$("#map1").css("width", "100%");

});

});

$(document).ready(function() {
  var mapID = document.getElementById('map1');
  function initMap(lat, lng) {
    var myOptions = {
      zoom: 12,
     center:{lat:43.3601,lng: -71.0589},
    };
    
    let map = new google.maps.Map(mapID, myOptions);
    

    var transitLayer = new google.maps.TransitLayer();
transitLayer.setMap(map);
    }
    
   $('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map").css("width", "100%");
  });
  
   //New Map
   
   
    
  
    
});