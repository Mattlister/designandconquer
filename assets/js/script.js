/* global $ google */
$(document).ready(function() {
  var map;
  var myMarker;
  var myLatlng;
  const mapID = document.getElementById("map1")
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
    var button = $(event.relatedTarget);
    initializeGMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });

  // Trigger map resize event after modal shown

$('#myModal1').on('shown.bs.modal', function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(myLatlng);
  });
});