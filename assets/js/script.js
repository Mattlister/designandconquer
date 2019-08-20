$('#myModal1').on('show.bs.modal', function(event) {
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });

  
    let MAPID = new google.maps.Map(document.getElementById('map1'));
    let myLatlng = new google.maps.LatLng(data.lat, data.lng)
    let myOptions = {
      zoom: 12,
      zoomControl: true,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    };

           var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
    
   fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
   multiMarkers = {
          lat: data.lat,
          lng: data.lng
        };
        
})
  .catch(function(error) {
  });
  
  for (let i = 0; i < data.length; i++) {
      // data.length will loop over until it hits the end of the json file
      let marker = new google.maps.Marker({
        position: {
          lat: data.lat,
          lng: data.lng
        }
        // Again we are setting the map structure
      });
      marker.setMap(MAP);
    }


----------------------------------------------------------








$(function () {
        $("#btnClosePopup").click(function () {
            $("#modal1").modal("hide");
        });
    });

        function disappearModalTwo() {
            document.getElementById("exampleModal_One").style.display='none';
        }

function myFunction() {
  alert("Thanks for your email, we'll be in touch real soon!!!");
}



myMarker = new google.maps.Marker({
      position: +myLatlng
      position: myLatlng
    });
    myMarker.setMap(map);
    }



----------------------------------------

fetch('assets/js/locations.json')
  fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
@@ -58,20 +57,12 @@ function getLatLng(jsonElement) {
}



$(function () {
        $("#btnClosePopup").click(function () {
            $("#modal-content").modal("hide");
        });
    });

        function showOnLoadModal() {
            $(window).on("load", function () {
                $("#whatwedo").modal("show");
                $("#form-group").modal("show");
            });
        }

        function disappearModalTwo() {
            document.getElementById("exampleModal_One").style.display='none';
        }


-----------------------------------------

then(function(data) {
      console.log(data);
      let loc = getLatLng(data);
      console.log(loc);
      data.forEach(adven => {
        console.log(adven)
        multiMarkers = {
          lat: adven.lat,
          lng: adven.lng
        }
        myMarker2 = new google.maps.Marker({
            position: multiMarkers,
            map: map,
        });    

});