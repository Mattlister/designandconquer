function initMap() {
  var pointA = new google.maps.LatLng(55.9533, -3.1883),
    pointB = new google.maps.LatLng(57.4778, 4.2247),
    myOptions = {
      zoom: 7,
      center: pointA
    },
    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
    markerA = new google.maps.Marker({
      position: pointA,
      title: "Marker A",
      label: "A",
      map: map
    });
  markerA.addListener('click', function(e) {
    map.setCenter(this.position);
    $(".modal-header .modal-title").text(this.title);
    $(".modal-body #modalLatLng").text(this.position);
    $('#myModal1').modal('show');
  });
}


if (typeof(google) == "undefined") {
  var mapsAPI = "AIzaSyAIPPUQ0PSWMjTsgvIWRRcJv3LGfRzGmnA";
  $.getScript('https://maps.google.com/maps/api/js?key=' + mapsAPI).done(function() {
    initMap()
  });
} else {
  console.log("google api already loaded");
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
