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

function initialize () 
  let map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: new google.maps.LatLng(-20.917574,142.702789),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 18
  });



for (let x in locations) {
}
  let location = locations[x];
  let location1 = new google.maps.LatLng(location.lat,location.lng);
  let marker = new google.maps.Marker({
    position: location,
    title: location.name,
    map: map
  });
  let infowindow = new google.maps.Infowindow({
    content: location.name
    });
    
    google.maps.event.addDomListener(window, 'load', function () {
   initialize(latitude, longitude);
});