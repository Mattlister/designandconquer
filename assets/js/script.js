$(document).ready(function() {
let map;
let myMarker;
let myLatLng;
​
const bike = [{name: "Google Location 1", lat:-37.623900, lng: 144.707700},
{name: "Google Location 2", lat: -26.785780, lng: 153.110300},
{name: "Google Location 3", lat: -37.796270, lng: 146.974500}];
​
​
const climb = [{name: "Google Location 1", lat:37.865101, lng:-119.538330},
{name: "Google Location 2", lat: 37.746036, lng: -119.53294},
{name: "Google Location 3", lat: 38.8015, lng: -120.133}];
​
function initializeGMap(lat, lng) {
    myLatLng = {lat, lng};
    
​
    var myOptions = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myLatLng
};
​
    var map0 = new google.maps.Map(document.getElementById("map_go0"), myOptions);
    var map1 = new google.maps.Map(document.getElementById("map_go1"), myOptions);
​
​
​
​
$('#btnaddmarker').on('click', function() {
    addmarker(bike[0].lat, bike[0].lng);
});
​
​
function addmarker(latilongi) {
    for (var i = 0; i < bike.length; i++) {
        console.log(bike[i].lat, bike[i].lng);
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(bike[i].lat, bike[i].lng),
        title: 'new marker',
        draggable: true,
        map: map0
    });
    }
}
​
​
$('#btnaddmarker1').on('click', function() {
    addmarker1(climb[0].lat, climb[0].lng);
});
​
​
function addmarker1(latilongi) {
    for (var i = 0; i < climb.length; i++) {
        console.log(climb[i].lat, climb[i].lng);
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(climb[i].lat, climb[i].lng),
        title: 'new marker',
        draggable: true,
        map: map1
    });
    }
}
​
​
​
