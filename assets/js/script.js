$('#myModal1').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget);
    initializeGMap(button.data('lat'), button.data('lng'));
    $("#location-map").css("width", "100%");
    $("#map1").css("width", "100%");
  });
  
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
    
  fetch('assets/js/locations.json')
  .then((resp) => resp.json())
  .then(function(data) {
    data.forEach(function(element) {
    console.log(element);
  });
		console.log(data);
    })
  .catch(function(error) {
    console.log(error);
	});
	
	$(function () {
        $("#btnClosePopup").click(function () {
            $("#modal-content").modal("hide");
        });
    });
	
  $('body').click(function (event) 
{
   if(!$(event.target).closest('#modalRegisterForm').length && !$(event.target).is('#myModal11')) {
     $(".modalDialog").hide();
   }     
});
  