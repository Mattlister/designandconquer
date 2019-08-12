$('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });


 let map;
  let mapID = document.getElementById("map1");
  function initMap(lat, lng) {
    myLatlng = new google.maps.LatLng(lat, lng);
    

    const myOptions = {
      zoom: 12,
      zoomControl: true,
      center: +myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(mapID, myOptions);

    myMarker = new google.maps.Marker({
      position: +myLatlng
    });
    myMarker.setMap(map);
    }
    
  fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
      let loc = getLatLng(data);
      console.log(loc);
  })
  .catch(function(error) {
    console.log(error);
  });
  
  
function getLatLng(jsonElement) {
  let locations = [];
  jsonElement.forEach(element => {
    element.locations.forEach(location => {
      
      locations.push(
          {
              "lat": location.lat,
              "lng": location.lng
          }
          
          
          );
    });
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