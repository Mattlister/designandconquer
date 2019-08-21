$(document).ready(function() {
  var mapID = document.getElementById("map");
  function initMap(lat, lng) {
    myLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
      zoom: 12,
      zoomControl: true,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(mapID, myOptions);
    myMarker = new google.maps.Marker({
    });
    var transitLayer = new google.maps.TransitLayer();
transitLayer.setMap(map);
    }
    
     $('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map").css("width", "100%");
  });
 
});
fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
    for (let i = 0; i < data.length; i++) {
      let marker = new google.maps.LatLng({
        position: (data.lat, data.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    }
    
  });
  
 
  
  