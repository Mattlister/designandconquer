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
    
    let map = new google.maps.Map(mapID, myOptions);
    
    
    
fetch('assets/js/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let loc = getLatLng(data);
        data.forEach(adven => {
          console.log(adven);
        multiMarkers = {
          lat: 50.010083,
          lng: -110.113006
        };
        myMarker2 = new google.maps.Marker({
            position: multiMarkers,
            map: map,
            
        });    

        });
      return myMarker = new google.maps.LatLng({
        position: (data.lat, data.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
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
      
      initMap(parseFloat(button.data('lat')), parseFloat(button.data('lng')))
      map = new google.maps.Marker({
        position: new google.maps.LatLng(lat[i][1], lat[i][2]),
        map:map,
        title: myLatlng[i][0]
      });
      data.forEach(element => {
        element.forEach(data => {
          myMarker = new google.maps.Marker({
            position: new google.maps.LatLng(element.lat, element.lng),
            map:map,
            
          });
        });
        
      });
    }
    
  });
  
    map = new google.maps.Map(mapID, myOptions);
    let myMarker = new google.maps.Marker({
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

$(function () {
        $("#btnClosePopup").click(function () {
            $("#modal1").modal("hide");
        });
    });
