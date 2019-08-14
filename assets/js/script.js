 var markers = [{
        "name": "Google Location 1",
        "lat": -37.75,
        "lng": 145.01667
    },
    {
        "name": "Google Location 2",
        "lat": 27.6333,
        "lng": 153.1667
    },
    {
        "name": "Google Location 3",
        "lat": 27.3358,
        "lng": 152.8219
    },
    {
        "name": "Google Location 1",
        "lat": 37.7339,
        "lng": 119.6377
    },
    {
        "name": "Google Location 2",
        "lat": 37.8107,
        "lng": 119.4852
    },
    {
        "name": "Google Location 3",
        "lat": 41.7529,
        "lng": -74.2072
    },
    {
        "name": "Google Location 1",
        "lat": 27.975,
        "lng": 86.9336
    },
    {
        "name": "Google Location 2",
        "lat": 27.975,
        "lng": 86.9321
    },
    {
        "name": "Google Location 3",
        "lat": 27.9626,
        "lng": 86.9336
    },
    {
        "name": "Google Location 1",
        "lat": 21.664019,
        "lng": -158.053852
    },
    {
        "name": "Google Location 2",
        "lat": 21.6415,
        "lng": 158.0671
    },
    {
        "name": "Google Location 3",
        "lat": 33.8807,
        "lng": 78.5122
    },
    {
        "name": "Google Location 1",
        "lat": 45.9237,
        "lng": 6.8694
    },
    {
        "name": "Google Location 2",
        "lat": 45.4683,
        "lng": 6.9056
    },
    {
        "name": "Google Location 3",
        "lat": 45.3968,
        "lng": 6.5666
    },
    {
        "name": "Google Location 1",
        "lat": 17.7806,
        "lng": 25.2778
    },
    {
        "name": "Google Location 2",
        "lat": 17.9243,
        "lng": 85.8572
    },
    {
        "name": "Google Location 3",
        "lat": 25.8572,
        "lng": 27.8493
    },
    {
        "name": "Google Location 1",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 2",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 3",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 1",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 2",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 3",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 1",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 2",
        "lat": 50.010083,
        "lng": -110.113006
    },
    {
        "name": "Google Location 3",
        "lat": 50.010083,
        "lng": -110.113006
    }
];
 
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

    for (i = 0; i < multiMarkers.length; i++) {  
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