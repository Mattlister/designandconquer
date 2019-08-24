$(document).ready(function() {
let map;
let myMarker;
let myLatLng;
  var mapID = document.getElementById("map1");
  function initializeGMap(lat, lng) {
    myLatlng = new google.maps.LatLng(lat, lng);

 var myOptions = {
      zoom: 12,
      zoomControl: true,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    

    map = new google.maps.Map(mapID, myOptions);

    myMarker = new google.maps.Marker({
      position: myLatlng
      
    });
    fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
       myMarker = new google.maps.LatLng({
        //position: (data[i].lat, data[i].lng),
        lat: data[i].lat,
        lng: data[i].lng,
        
      
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      console.log(myMarker);
      myMarker.setMap(mapID);
    }
    
  });
    myMarker.setMap(map);
    }
    
     $('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initializeGMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });
});

