function initialize () {
  let map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: new google.maps.LatLng(,),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 18
  });


for (let x in Queensland) {
  let location = Queensland[x];
  let location = new google.maps.LatLng(location.lat,location.lng);
  let marker = new google.maps.Marker({
    position: location,
    title: location.name,
    map: map
  });
 }
}
google.maps.event.addDOMListener(window, 'load', initialize);

