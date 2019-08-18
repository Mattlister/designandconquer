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

fetch('/locations.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    //JSON data
    console.log(data);  })
  .catch(err => {
  });
 
 
 
 
  
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
