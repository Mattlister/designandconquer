function initMap() {
  let pointA = new global.google.maps.LatLng(55.9533, -3.1883),
    pointB = new global.google.maps.LatLng(57.4778, 4.2247),
    myOptions = {
      zoom: 7,
      center: pointA
    },
    map = new global.google.maps.Map(document.getElementById('map-canvas'), myOptions),
    markerA = new global.google.maps.Marker({
      position: pointA,
      title: "Marker A",
      label: "A",
      map: map
    });
  markerA.addListener('click', function(e) {
    map.setCenter(this.position);
   global.$(".modal-header .modal-title").text(this.title);
    global.$(".modal-body #modalLatLng").text(this.position);
    global.$('#myModal1').modal('show');
  });
}



