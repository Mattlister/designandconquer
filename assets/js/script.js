$(document).ready(function() {
let map;
let myMarker;
let myLatLng;

//Queensland

const bike = [{name: "Google Location 1", lat:-37.623900, lng: 144.707700},
{name: "Google Location 2", lat: -26.785780, lng: 153.110300},
{name: "Google Location 3", lat: -37.796270, lng: 146.974500}];

//Yosamite

const climb = [{name: "Google Location 1", lat:37.865101, lng:-119.538330},
{name: "Google Location 2", lat: 37.746036, lng: -119.53294},
{name: "Google Location 3", lat: 38.8015, lng: -120.133}];

//Everest

const climbe = [{name: "Google Location 1", lat:27.986065, lng:86.922623},
{name: "Google Location 2", lat: 28.004333316, lng: 86.855663244},
{name: "Google Location 3", lat:  27.816667, lng: 86.716667}];

//Banzai

const surf = [{name: "Google Location 1", lat:21.664019, lng:-158.053852},
{name: "Google Location 2", lat: 21.640296, lng: -158.063779},
{name: "Google Location 3", lat: 21.659830694, lng: -158.053166454}];

const ski = [{name: "Google Location 1", lat:45.45916483, lng:6.90249639},
{name: "Google Location 2", lat: 45.292165498, lng: 6.574664368},
{name: "Google Location 3", lat: 45.004333316, lng: 6.119666188}];

const jump = [{name: "Google Location 1", lat:-17.924444, lng:25.856667},
{name: "Google Location 2", lat: 17.9318, lng: 25.8256},
{name: "Google Location 3", lat: 17.9049, lng: 25.9379}];

const dive = [{name: "Google Location 1", lat:-35.336240, lng:136.118428}];

const cruise = [{name: "Google Location 1", lat:29.533438, lng:31.270695},
{name: "Google Location 2", lat: 21.701324, lng: 31.176766},
{name: "Google Location 3", lat: 16.783861, lng: 32.898682}];

const buggy = [{name: "Google Location 1", lat:25.1840, lng:55.2596},
{name: "Google Location 2", lat: 25.1872, lng: 55.2812},
{name: "Google Location 3", lat: 25.2768, lng: 55.3407}];


function initializeGMap(lat, lng) {
    myLatLng = {lat, lng};
    
//Variables to tie in to coordinates
    var myOptions = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myLatLng
};

    var map0 = new google.maps.Map(document.getElementById("map_go0"), myOptions);
    var map1 = new google.maps.Map(document.getElementById("map_go1"), myOptions);
    var map2 = new google.maps.Map(document.getElementById("map_go2"), myOptions);
    var map3 = new google.maps.Map(document.getElementById("map_go3"), myOptions);
    var map4 = new google.maps.Map(document.getElementById("map_go4"), myOptions);
    var map5 = new google.maps.Map(document.getElementById("map_go5"), myOptions);
    var map6 = new google.maps.Map(document.getElementById("map_go6"), myOptions);
    var map7 = new google.maps.Map(document.getElementById("map_go7"), myOptions);
    var map8 = new google.maps.Map(document.getElementById("map_go8"), myOptions);


    


// add marker settings
$('#btnaddmarker').on('click', function() {
    addmarker(bike[0].lat, bike[0].lng);
});

function addmarker(latilongi) {
    for (var i = 0; i < bike.length; i++) {
        {
             var image = 'markers/icons8-cycling-mountain-bike-50.png';
        }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(bike[i].lat, bike[i].lng),
        
        title: 'Queensland has some great mountain biking trails. Check out our 3 locations to find some unbelievable biking experiences',
        draggable: true,
        map: map0,
        icon: image
    });
    }
}

// add marker settings
$('#btnaddmarker1').on('click', function() {
    addmarker1(climb[0].lat, climb[0].lng);
});



function addmarker1(latilongi) {
    for (var i = 0; i < climb.length; i++) {
        {
          var image = 'markers/icons8-trekking-50.png';
        }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(climb[i].lat, climb[i].lng),
        title: 'Yosamite has some epic climbs for you to scale. The greatest park in the world that you can visit',
        draggable: true,
        map: map1,
        icon: image
    });
    }
} 

// add marker settings
$('#btnaddmarker2').on('click', function() {
    addmarker2(climbe[0].lat, climbe[0].lng);
});


function addmarker2(latilongi) {
    for (var i = 0; i < climbe.length; i++) {
         {
             var image = 'markers/icons8-trekking-50.png';
          }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(climbe[i].lat, climbe[i].lng),
        title: 'Mount Everest is the ultimate climbers experience with epic conditions to conquer and climb',
        draggable: true,
        map: map2,
        icon: image
    });
    }
} 

// add marker settings
$('#btnaddmarker3').on('click', function() {
    addmarker3(surf[0].lat, surf[0].lng);
});


function addmarker3(latilongi) {
    for (var i = 0; i < surf.length; i++) {
        {
            var image = 'markers/icons8-surfing-50.png';
        }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(surf[i].lat, surf[i].lng),
        title: 'Banzai has the greatest waves and so the greatest surf known to man. When that wave hits, make sure your ready',
        draggable: true,
        map: map3,
        icon: image
    });
    }
} 

// add marker settings
$('#btnaddmarker4').on('click', function() {
    addmarker4(ski[0].lat, ski[0].lng);
});


function addmarker4(latilongi) {
    for (var i = 0; i < ski.length; i++) {
        {
    var image = 'markers/icons8-skiing-50.png';
  }
        
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(ski[i].lat, ski[i].lng),
        title: 'The French alps give you the thrilling downhill skiing adventure of your life. Beautiful views and perfect snow to glide over',
        draggable: true,
        map: map4,
        icon: image
    });
    }
} 

// add marker settings
$('#btnaddmarker5').on('click', function() {
    addmarker5(jump[0].lat, jump[0].lng);
});


function addmarker5(latilongi) {
    for (var i = 0; i < jump.length; i++) {
        {
            var image = 'markers/icons8-skydiving-50.png';
        }
        
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(jump[i].lat, jump[i].lng),
        title: 'Victoria Falls skydive jump will blow your mind. You will feel like your flying high as you soar across the sky',
        draggable: true,
        map: map5,
        icon: image
    });
    }
} 

// add marker settings
$('#btnaddmarker6').on('click', function() {
    addmarker6(dive[0].lat, dive[0].lng);
});


function addmarker6(latilongi) {
    for (var i = 0; i < dive.length; i++) {
        {
            var image = 'markers/icons8-shark-50.png';
        }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(dive[i].lat, dive[i].lng),
        title: 'Neptune Islands Shark dives will face you with the oceans ultimate predator. When its fin breaches the surface, your heart wil stop',
        draggable: true,
        map: map6,
        icon: image
    });
    }
} 



// add marker settings
$('#btnaddmarker7').on('click', function() {
    addmarker7(cruise[0].lat, cruise[0].lng);
});


function addmarker7(latilongi) {
    for (var i = 0; i < cruise.length; i++) {
        {
            var image = 'markers/icons8-sail-boat-50.png';
        }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(cruise[i].lat, cruise[i].lng),
        title: 'The River Nile is one of the most beautiful and breathtaking places in the world. A truly wonderful place to visit',
        draggable: true,
        map: map7,
        icon: image
    });
    }
} 

// add marker settings
$('#btnaddmarker8').on('click', function() {
    addmarker8(buggy[0].lat, buggy[0].lng);
});

function addmarker8(latilongi) {
    for (var i = 0; i < buggy.length; i++) {
        {
             var image = 'markers/icons8-go-kart-50.png';
        }
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(buggy[i].lat, buggy[i].lng),
        title: 'Dune Buggying in Dubai is for serious petrol heads. The speed of racing around the desert is the mind blowing thrill',
        draggable: true,
        map: map8,
        icon: image
    });
    }
} 

} // End of the initializeGMap()



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

$('#Eclimbing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(climbe[0].lat, climbe[0].lng);
      $("#location-map2").css("width", "100%");
      $("#map_go2").css("width", "100%");
  });

$('#Bsurfing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(surf[0].lat, surf[0].lng);
      $("#location-map3").css("width", "100%");
      $("#map_go3").css("width", "100%");
  });
  
  $('#Falps').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(ski[0].lat, ski[0].lng);
      $("#location-map4").css("width", "100%");
      $("#map_go4").css("width", "100%");
  });
  
$('#Vfalls').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(jump[0].lat, jump[0].lng);
      $("#location-map5").css("width", "100%");
      $("#map_go5").css("width", "100%");
  });
  
  $('#Ndiving').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(dive[0].lat, dive[0].lng);
      $("#location-map6").css("width", "100%");
      $("#map_go6").css("width", "100%");
  });
  
  $('#Ncruising').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(cruise[0].lat, cruise[0].lng);
      $("#location-map7").css("width", "100%");
      $("#map_go7").css("width", "100%");
  });
  
  $('#Dbuggying').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(buggy[0].lat, buggy[0].lng);
      $("#location-map8").css("width", "100%");
      $("#map_go8").css("width", "100%");
  });
$(function () {
        $("#btnClosePopup").click(function () {
            $("#modal-content").modal("hide");
        });
    });

        function showOnLoadModal() {
            $(window).on("load", function () {
                $("#whatwedo").modal("show");
                $("#form-group").modal("show");
            });
        }

        function disappearModalTwo() {
            document.getElementById("exampleModal_One").style.display='none';
        }

function myFunction() {
  alert("Thanks for your email, we'll be in touch real soon!!!");
}
  
});








