fetch('assets/js/locations.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });
  
  fetch('assets/js/locations.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    myFunction(response);
  });
  
  function myFunction(response) {
	/* do something with response variable */
}

$(document).ready(function() {
  var map;
  var myMarker;
  var myLatlng;
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
    
      // Re-init map before show modal
  $('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initializeGMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });

  
  for (let x in locations.json) {
}
  let location = locations.json[x];
  let location1 = new google.maps.LatLng(location.lat,location.lng);
  let marker = new google.maps.Marker({
    position: location,
    title: location.name,
    map: map
  });


  // Trigger map resize event after modal shown

$('#myModal1').on('shown.bs.modal', function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(myLatlng);
  });
});
