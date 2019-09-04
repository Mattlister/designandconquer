$(document).ready(function() {
let map;
let myMarker;
let myLatLng;

const bike = [{name: "Google Location 1", lat:-37.623900, lng: 144.707700},
{name: "Google Location 2", lat: -26.785780, lng: 153.110300},
{name: "Google Location 3", lat: -37.796270, lng: 146.974500}];


const climb = [{name: "Google Location 1", lat:37.865101, lng:-119.538330},
{name: "Google Location 2", lat: 37.746036, lng: -119.53294},
{name: "Google Location 3", lat: 38.8015, lng: -120.133}];

const everest = [{name: "Google Location 1", lat:27.986065, lng:86.922623},
{name: "Google Location 2", lat: 28.004333316, lng: 86.855663244},
{name: "Google Location 3", lat:  27.816667, lng: 86.716667}];

const banzai = [{name: "Google Location 1", lat:21.664019, lng:-158.053852},
{name: "Google Location 2", lat: 21.640296, lng: -158.063779},
{name: "Google Location 3", lat: 21.659830694, lng: -158.053166454}];



function initializeGMap(lat, lng) {
    myLatLng = {lat, lng};
    
//Variables to tie in to coordinates
    var myOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myLatLng
};

    var map0 = new google.maps.Map(document.getElementById("map_go0"), myOptions);
    var map1 = new google.maps.Map(document.getElementById("map_go1"), myOptions);
    var map2 = new google.maps.Map(document.getElementById("map_go2"), myOptions);
    var map3 = new google.maps.Map(document.getElementById("map_go3"), myOptions);
    


// add marker settings
$('#btnaddmarker').on('click', function() {
    addmarker(bike[0].lat, bike[0].lng);
});

function addmarker(latilongi) {
    for (var i = 0; i < bike.length; i++) {
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(bike[i].lat, bike[i].lng),
        title: 'new marker',
        draggable: true,
        map: map0
    });
    }
}

// add marker settings
$('#btnaddmarker1').on('click', function() {
    addmarker1(climb[0].lat, climb[0].lng);
});


function addmarker1(latilongi) {
    for (var i = 0; i < climb.length; i++) {
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(climb[i].lat, climb[i].lng),
        title: 'new marker',
        draggable: true,
        map: map1
    });
    }
} 




} // End of the initializeGMap()


// zoom in and zoom out
$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
});

    // function and events
  $('#Qbiking').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(bike[0].lat, bike[0].lng);
      $("#location-map0").css("width", "100%");
      $("#map_go0").css("width", "100%");
  });

    $('#Yclimbing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(climb[0].lat, climb[0].lng);
      $("#location-map1").css("width", "100%");
      $("#map_go1").css("width", "100%");
  });


  
});


Collapse




