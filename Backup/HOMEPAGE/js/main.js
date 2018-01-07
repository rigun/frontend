function myMap() {
  var mapCanvas = document.getElementById("map");
  var myLatLng = {lat: -7.779355,lng: 110.415776};
  var mapOptions = {
    center: new google.maps.LatLng(-7.779355, 110.415776,17), zoom: 17
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myLatLng,map: map,});
}
