// Code goes here

global.$(document).ready(function() {
  var map = null;
  var myMarker;
  var myLatlng;

  function initializeGMap(lat, lng) {
    myLatlng = new global.google.maps.LatLng(lat, lng);

    var myOptions = {
      zoom: 12,
      zoomControl: true,
      center: myLatlng,
      mapTypeId: global.google.maps.MapTypeId.ROADMAP
    };

    map = new global.google.maps.Map(document.getElementById("map_canvas"), myOptions);

    myMarker = new global.google.maps.Marker({
      position: myLatlng
    });
    myMarker.setMap(map);
  }

  // Re-init map before show modal
  global.$('#myModal1').on('show.bs.modal', function(event) {
    var button = global.$(event.relatedTarget);
    initializeGMap(button.data('lat'), button.data('lng'));
    global.$("#location-map").css("width", "100%");
    global.$("#map_canvas").css("width", "100%");
  });

  // Trigger map resize event after modal shown

  global.$('#myModal1').on('shown.bs.modal', function() {
    global.google.maps.event.trigger(map, "resize");
    map.setCenter(myLatlng);
  });
});