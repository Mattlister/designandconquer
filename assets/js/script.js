  
$(document).ready(function() {
let map;
let myMarker;
let myLatLng;


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


function mapMarker(map) {
    myMarker = new google.maps.Marker({
                map : map,
              	position : myLatLng
            }); // Set the first marker on the map
}
    
 function addMarker(destinations, map) {
    for (var i = 0; i < destinations.length; i++) {
      myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(destinations[i].lat, destinations[i].lng),
        title: destinations [i].name,
        draggable: true,
        map: map,
        icon: destinations[i].icon
      });
    }
  }
  
 

// Queensland
    const bike = [{ name: "Google Location 1", lat: -37.623900, lng: 144.707700 },
    { name: "Google Location 2", lat: -26.785780, lng: 153.110300 },
    { name: "Google Location 3", lat: -37.796270, lng: 146.974500 },
    { map: map0 },
    { title: 'Queensland has some great mountain biking trails. Check out our 3 locations to find some unbelievable biking experiences'},
    { icon: 'assets/images/icons8-cycling-mountain-bike-50.png'},
    ];
    

// Yosamite     
const climb = [{ name: "Google Location 1", lat: 37.865101, lng: -119.538330 },
    { name: "Google Location 2", lat: 37.746036, lng: -119.53294 },
    { name: "Google Location 3", lat: 38.8015, lng: -120.133 },
    { map: map1},
    { title: 'Yosamite has some epic climbs for you to scale. The greatest park in the world that you can visit'},
    {icon: 'assets/images/icons8-trekking-50.png'},
    ];
    
// Everest    
const climbe = [{ name: "Google Location 1", lat: 27.986065, lng: 86.922623 },
    { name: "Google Location 2", lat: 28.004333316, lng: 86.855663244 },
    { name: "Google Location 3", lat: 27.816667, lng: 86.716667 },
    { map: map2},
    { title: 'Mount Everest is the ultimate climbers experience with epic conditions to conquer and climb'},
    {icon: 'assets/images/icons8-trekking-50.png'},
    ];
    
// Banzai  
const surf = [{ name: "Google Location 1", lat: 21.664019, lng: -158.053852 },
    { name: "Google Location 2", lat: 21.640296, lng: -158.063779 },
    { name: "Google Location 3", lat: 21.659830694, lng: -158.053166454 },
    { map: map3},
    { title: 'Banzai has the greatest waves and so the greatest surf known to man. When that wave hits, make sure your ready'},
    {icon: 'assets/images/icons8-surfing-50.png'},
    ];

// French Alps
const ski = [{ name: "Google Location 1", lat: 45.45916483, lng: 6.90249639 },
    { name: "Google Location 2", lat: 45.292165498, lng: 6.574664368 },
    { name: "Google Location 3", lat: 45.004333316, lng: 6.119666188 },
    { map: map4},
    { title: 'The French alps give you the thrilling downhill skiing adventure of your life. Beautiful views and perfect snow to glide over'},
    {icon:  'assets/images/icons8-skiing-50.png'},
    ];

// Victoria Falls    
const jump = [{ name: "Google Location 1", lat: -17.924444, lng: 25.856667 },
    { name: "Google Location 2", lat: 17.9318, lng: 25.8256 },
    { name: "Google Location 3", lat: 17.9049, lng: 25.9379 },
    {map: map5},
    { title: 'Victoria Falls skydive jump will blow your mind. You will feel like your flying high as you soar across the sky'},
    {icon: 'assets/images/icons8-skydiving-50.png'},
    ];

// Netune Shark Dive    
const dive = [{ name: "Google Location 1", lat: -35.336240, lng: 136.118428 },
    {map: map6},
    { title: 'Neptune Islands Shark dives will face you with the oceans ultimate predator. When its fin breaches the surface, your heart wil stop'},
    {icon: 'assets/images/icons8-shark-50.png'},
    ];

// Nile 
const cruise = [{ name: "Google Location 1", lat: 29.533438, lng: 31.270695 },
    { name: "Google Location 2", lat: 21.701324, lng: 31.176766 },
    { name: "Google Location 3", lat: 16.783861, lng: 32.898682 },
    {map: map7},
    { title: 'The River Nile is one of the most beautiful and breathtaking places in the world. A truly wonderful place to visit'},
    {icon: 'assets/images/icons8-sail-boat-50.png'}
    ];

// Dubai
const buggy = [
    {
    name: "Google Location 1", lat: 25.1840, lng: 55.2596 },
    { name: "Google Location 2", lat: 25.1872, lng: 55.2812 },
    { name: "Google Location 3", lat: 25.2768, lng: 55.3407 },
    {map: map8},
    { title: 'Dune Buggying in Dubai is for serious petrol heads. The speed of racing around the desert is the mind blowing thrill'},
    ];


addMarker(bike, map0);
addMarker(climb, map1);
addMarker(climbe, map2);
addMarker(surf, map3);
addMarker(ski, map4);
addMarker(jump, map5);
addMarker(dive, map6);
addMarker(cruise, map7);
addMarker(buggy, map8);


mapMarker(map0);
mapMarker(map1);
mapMarker(map2);
mapMarker(map3);
mapMarker(map4);
mapMarker(map5);
mapMarker(map6);
mapMarker(map7);
mapMarker(map8);

} 


// End of the initializeGMap()
  
    // function and events
    
  $('#Qbiking').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map0").css("width", "100%");
      $("#map_go0").css("width", "100%");
  });


    $('#Yclimbing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map1").css("width", "100%");
      $("#map_go1").css("width", "100%");
  });

$('#Eclimbing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map2").css("width", "100%");
      $("#map_go2").css("width", "100%");
  });

$('#Bsurfing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map3").css("width", "100%");
      $("#map_go3").css("width", "100%");
  });
  
  $('#Falps').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map4").css("width", "100%");
      $("#map_go4").css("width", "100%");
  });
  
$('#Vfalls').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map5").css("width", "100%");
      $("#map_go5").css("width", "100%");
  });
  
  $('#Ndiving').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map6").css("width", "100%");
      $("#map_go6").css("width", "100%");
  });
  
  $('#Ncruising').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map7").css("width", "100%");
      $("#map_go7").css("width", "100%");
  });
  
  $('#Dbuggying').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(parseFloat(this.dataset.lat), parseFloat(this.dataset.lng));
      $("#location-map8").css("width", "100%");
      $("#map_go8").css("width", "100%");
  });
 

        $("#btnClosePopup").click(function () {
            $("#modal-content").modal("hide");
        });

// Pauses video on exit
$('.modal').on('hidden.bs.modal', function () {
var $this = $(this);
//get iframe on click
 var vidsrc_frame = $this.find("iframe");
var vidsrc_src = vidsrc_frame.attr('src');
 console.log(`videosrc=` + vidsrc_src); 
vidsrc_frame.attr('src', '');
vidsrc_frame.attr('src', vidsrc_src);
});


//Prevents maps issues
google.maps.event.trigger(map, 'resize');


}); //End of document ready