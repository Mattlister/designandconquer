$('#myModal1').on('show.bs.modal', function(event) {
    let relatedTarget = $(event.relatedTarget);
    initMap(parseFloat(relatedTarget.data('lat')), parseFloat(relatedTarget.data('lng')));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });


 let map;
  let mapID = document.getElementById("map1");
  function initMap(lat, lng) {


    
    var myLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
      zoom: 12,
      zoomControl: true,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    };

  $.each(myMarker2,function()
    {
           var myLatlng = new google.maps.LatLng(lat, lng);
        
           var myMarker2 = new google.maps.Marker({
            position: (myLatlng),
    });
    myMarker2.setMap(map);
    });
      

    var map = new google.maps.Map(mapID, myOptions);
    
    

    myMarker2 = new google.maps.Marker({
      position: myLatlng,
    });
    myMarker2.setMap(map)
    }
    
    
    
  fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
      let loc = getLatLng(data);
      data.forEach(adven => {
        console.log(adven);
        multiMarkers = {
          lat: adven.lat,
          lng: adven.lng
        };
        myMarker2 = new google.maps.Marker({
            position: multiMarkers,
            map: map,
            
        });    
        
});
  })
  .catch(function(error) {
    console.log(error);
  });
  
  
function getLatLng(jsonElement) {
  let locations = [];
  jsonElement.forEach(element => {
      
      locations.push(
          {
              "lat": element.lat,
              "lng": element.lng
          }
          
          
          );
  });
  
  return locations;
}


$(function () {
        $("#btnClosePopup").click(function () {
            $("#myModal1-content").modal("hide");
        });
    });

        function disappearModalTwo() {
            document.getElementById("exampleModal_One").style.display='none';
        }

function myFunction() {
  alert("Thanks for your email, we'll be in touch real soon!!!");
}