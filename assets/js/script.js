let map = new google.maps.Map(document.getElementById('#map1'), {
  zoom: 10,
  center: new google.maps.LatLng(lat, lng),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

fetch('assets/data/locations.json')
  .then(res => res.json())
  .then(function(data) {
      console.log(data);
    for (let i = 0; i < data.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.lng),
        map: map
      });
    }
  });
  
  
  $('#myModal1').on('show.bs.modal', function(event) {
    let relatedTarget = $(event.relatedTarget);
    $("#locations-map1").css("width", "100%");
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
 
