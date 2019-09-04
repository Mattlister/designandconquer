$(document).ready(function() {
let map;
let myMarker;
let myLatLng;



function initializeGMap(lat, lng) {
  
  
myLatlng = new google.maps.LatLng(lat, lng);

//Queensland coords data - done

let bike = [{name: "Google Location 1", lat:-37.623900, lng: 144.707700},
{name: "Google Location 2", lat: -26.785780, lng: 153.110300},
{name: "Google Location 3", lat: -37.796270, lng: 146.974500}];



//Yosamite coords data - done

let climb = [{name: "Google Location 1", lat:37.865101, lng:-119.538330},
{name: "Google Location 2", lat: 37.746036, lng: -119.53294},
{name: "Google Location 3", lat: 38.8015, lng: -120.133}];




//Everest coords data - done

let everest = [{name: "Google Location 1", lat:27.986065, lng:86.922623},
{name: "Google Location 2", lat: 28.004333316, lng: 86.855663244},
{name: "Google Location 3", lat:  27.816667, lng: 86.716667}];


//Banzai coords data - done

let banzai = [{name: "Google Location 1", lat:21.664019, lng:-158.053852},
{name: "Google Location 2", lat: 21.640296, lng: -158.063779},
{name: "Google Location 3", lat: 21.659830694, lng: -158.053166454}];


//Alps coords data - done

let alps = [{name: "Google Location 1", lat:45.45916483, lng:6.90249639},
{name: "Google Location 2", lat: 45.292165498, lng: 6.574664368},
{name: "Google Location 3", lat: 45.004333316, lng: 6.119666188}];


//Vicfalls skydive coords data

let vicfalls = [{name: "Google Location 1", lat:-17.924444, lng:25.856667},
{name: "Google Location 2", lat: 17.9318, lng: 25.8256},
{name: "Google Location 3", lat: 17.9049, lng: 25.9379}];


//Australian coords data - done

let neptune = [{name: "Google Location 1", lat:34.7240, lng:135.8611}];


//River nile coords data - done

let nile = [{name: "Google Location 1", lat:29.533438, lng:31.270695},
{name: "Google Location 2", lat: 21.701324, lng: 31.176766},
{name: "Google Location 3", lat: 16.783861, lng: 32.898682}];


//Dubai Buggying coords data - done

let dubai = [{name: "Google Location 1", lat:25.1840, lng:55.2596},
{name: "Google Location 2", lat: 25.1872, lng: 55.2812},
{name: "Google Location 3", lat: 25.2768, lng: 55.3407}];



//map marker details

// Queensland

let marks = [];
for (let x = 0; x < bike.length; x++) {
  let marker = new google.maps.LatLng(bike[x].lat, bike[x].lng);
  marks.push(marker);
}

// Yosamite

let marksc = [];
for (let x = 0; x < climb.length; x++) {
  let marker = new google.maps.LatLng(climb[x].lat, climb[x].lng);
  marks.push(marker);
}


// Everest

let markse = [];
for (let x = 0; x < everest.length; x++) {
  let marker = new google.maps.LatLng(everest[x].lat, everest[x].lng);
  marks.push(marker);
}

// Banzai

let markss = [];
for (let x = 0; x < banzai.length; x++) {
  let marker = new google.maps.LatLng(banzai[x].lat, banzai[x].lng);
  marks.push(marker);
}

// Alps

let marksa= [];
for (let x = 0; x < alps.length; x++) {
  let marker = new google.maps.LatLng(alps[x].lat, alps[x].lng);
  marks.push(marker);
}


// Vicfalls

let marksv= [];
for (let x = 0; x < vicfalls.length; x++) {
  let marker = new google.maps.LatLng(vicfalls[x].lat, vicfalls[x].lng);
  marks.push(marker);
}


// Neptune shark dive

let marksn= [];
for (let x = 0; x < neptune.length; x++) {
  let marker = new google.maps.LatLng(neptune[x].lat, neptune[x].lng);
  marks.push(marker);
}


// Nile River Cruise

let marksni= [];
for (let x = 0; x < nile.length; x++) {
  let marker = new google.maps.LatLng(nile[x].lat, nile[x].lng);
  marks.push(marker);
}

// Dubai Buggying

let marksdn= [];
for (let x = 0; x < dubai.length; x++) {
  let marker = new google.maps.LatLng(dubai[x].lat, dubai[x].lng);
  marks.push(marker);
}

// coordinates for each location

let QT = new google.maps.LatLng(-37.623900, 144.707700);
let YC = new google.maps.LatLng(37.865101, -119.538330);
let EC = new google.maps.LatLng(27.986065, 86.922623);
let BS = new google.maps.LatLng(21.664019, -158.053852);
let FA = new google.maps.LatLng(45.45916483, 6.90249639);

//Variables to tie in to coordinates

var myOptions0 = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: QT
};

var myOptions1 = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: YC
};

var myOptions2 = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: EC
};

var myOptions3 = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: BS
};

var myOptions4 = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: FA
};

// maps info for each myoptions variable

map_0 = new google.maps.Map(document.getElementById("map_go0"), myOptions0);
// This add marker can probably be removed i just added it to show a marker
// when code ran
addmarker();

map_1 = new google.maps.Map(document.getElementById("map_go1"), myOptions1);
// This add marker can probably be removed i just added it to show a marker
// when code ran
addmarker1();

map_2 = new google.maps.Map(document.getElementById("map_go2"), myOptions2);
// This add marker can probably be removed i just added it to show a marker
// when code ran
addmarker();

map_3 = new google.maps.Map(document.getElementById("map_go3"), myOptions3);
// This add marker can probably be removed i just added it to show a marker
// when code ran
addmarker();



// functions for my options

function addmarker(latilongi) {
    var marker = new google.maps.Marker({
        position: latilongi,
        title: 'new marker',
        draggable: true,
        map: map_0
    });
}


function addmarker1(latilongi) {
  var marker = new google.maps.Marker({
      position: latilongi,
      title: "new marker1",
      draggable: true,
      map: map_1
  });
  
}

function addmarker2(latilongi) {
  var marker = new google.maps.Marker({
      position: latilongi,
      title: "new marker2",
      draggable: true,
      map: map_2
  });
  
}

function addmarker3(latilongi) {
  var marker = new google.maps.Marker({
      position: latilongi,
      title: "new marker3",
      draggable: true,
      map: map_3
  });
  
}

function addmarker4(latilongi) {
  var marker = new google.maps.Marker({
      position: latilongi,
      title: "new marker4",
      draggable: true,
      map: map_3
  });
  
}





// zoom in and zoom out
$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
});


// add marker settings


$('#btnaddmarker').on('click', function() {
for (let x = 0; x < marks.length; x++) {
  addmarker(marks[x]);
}

});

$('#btnaddmarker').on('click', function() {
for (let x = 0; x < marks.length; x++) {
  addmarker1(marksc[x]);
}

});

}
    
    // function and events
    
    
  $('#Qbiking').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(button.data('lat'), button.data('lng'));
      $("#location-map0").css("width", "100%");
      $("#map_go0").css("width", "100%");
  });

    $('#Yclimbing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(button.data('lat'), button.data('lng'));
      $("#location-map1").css("width", "100%");
      $("#map_go1").css("width", "100%");
  });
  
  $('#Eclimbing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(button.data('lat'), button.data('lng'));
      $("#location-map2").css("width", "100%");
      $("#map_go2").css("width", "100%");
  });
  
  $('#Bsurfing').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(button.data('lat'), button.data('lng'));
      $("#location-map3").css("width", "100%");
      $("#map_go3").css("width", "100%");
  });
  
   $('#Falps').on('show.bs.modal', function(event) {
      let button = $(event.relatedTarget);
      initializeGMap(button.data('lat'), button.data('lng'));
      $("#location-map4").css("width", "100%");
      $("#map_go4").css("width", "100%");
  });
  
});