 var map;
  var mapID = document.getElementById("map1");
  function initMap(lat, lng) {

    var myLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
      zoom: 12,
      zoomControl: true,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    };

var marker, i;

    for(var i = 0; i < multiMarkers.length; i++) { 
        var coords = results.features[i].geometry.coordinates;
        marker = new google.maps.Marker({
        position: new google.maps.myLatLng(locations[i][1], locations[i][2]),
        map: map
      });
         
        
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                myLatlng.setContent(markers[i][0]);
                myLatlng.open(map, marker);
            };
        })(marker, i));
    }


    var map = new google.maps.Map(mapID, myOptions);
    
    

    myMarker2 = new google.maps.Marker({
      position: myLatlng,
    });
    myMarker2.setMap(map);
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
  
$('#myModal1').on('show.bs.modal', function(event) {
    let relatedTarget = $(event.relatedTarget);
    initMap(parseFloat(relatedTarget.data('lat')), parseFloat(relatedTarget.data('lng')));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
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
            $("#modal-content").modal("hide");
        });
    });

        function disappearModalTwo() {
            document.getElementById("exampleModal_One").style.display='none';
        }

function myFunction() {
  alert("Thanks for your email, we'll be in touch real soon!!!");
}