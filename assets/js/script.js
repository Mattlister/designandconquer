var UK = new google.maps.LatLng(53.409532, -2.010498);
var IT = new google.maps.LatLng(42.745334, 12.738430);


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

let bike = [{name: "Google Location 1", lat: -37.75, lng: 145.01667},
{name: "Google Location 2", lat: 27.6333, lng: 153.1667},
{name: "Google Location 3", lat: 27.3358, lng: 152.8219}];



