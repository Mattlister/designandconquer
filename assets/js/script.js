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
    myMarker.setMap(map);
    }
    
     $('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initializeGMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });
});

fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
    for (let i = 0; i < data.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(element.lat, element.lng),
        map: map,
        
      });
    }
  });
 function getLatLng(jsonElement) {
  let locations = [i];
  jsonElement.forEach(element => {
      
      locations.push(
          {
              "lat": lat,
              "lng": lng
          }
          
          
          );
  });
  
  return locations;
}
 
  
  $(function () {
        $("#btnClosePopup").click(function () {
            $("#modal-content").modal("hide");
        });
    });
        function disappearModalTwo() {
            document.getElementById("exampleModal_One").style.display='none';
        }
function myFunction() {
  alert("Thanks for your email, we'll be in touch real soon!!!");
}
