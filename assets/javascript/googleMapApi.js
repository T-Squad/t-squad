  var map;
  var marker;
  var mylatlng =  {lat: 40.748999, lng: -73.985677};
    function initMap(){
      map = new
      google.maps.Map(document.getElementById('googlemap'),{
                 center:mylatlng,
                 zoom:16
                 });
      marker= new google.maps.Marker({
        animation:google.maps.Animation.DROP,
        position:mylatlng,
        map:map,
        draggable:false
      });
    }

  



    