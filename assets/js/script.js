function initMap() {
  let = {lat, lng};
  let = new google.maps.Map(document.getElementById('map'), {zoom: 10, center});
  let marker = new google.maps.Marker({
   position: new google.maps.myLatLng(locations[i][1]),
   mapTypeId: google.maps.MapTypeId.ROADMAP
    });
} 


fetch('assets/js/locations.json')
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
  $('#myModal1').on('show.bs.modal', function(event) {
    let relatedTarget = $(event.relatedTarget);
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });
  
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
