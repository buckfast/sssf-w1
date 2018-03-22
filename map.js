let map;
let marker;

function initMap() {
  var pos = {lat: 0, lng: 0};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: pos
  });
  marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}

function changeMarkerPos(coordinates) {
    var latlng = new google.maps.LatLng(coordinates.lat, coordinates.lng);
    marker.setPosition(latlng);
    map.setZoom(9);
    map.setCenter(latlng);

}
