
<<<<<<< htmlcsschange


/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}*/
=======
// set variables for API Keys

// YELP API INFORMATION

// GEOLOCATION API INFORMATION

// GOOGLE MAPS API INFORMATION

// ======================================= //


// LOCATION 

$(function() {

    // proxy 

    // we want to get the location from our user
    let appLocation;
    $.getJSON('https://ipinfo.io', function(data) {
        console.log(data);
        appLocation = data.loc.split(',');
        console.log(appLocation[0]);
        console.log(appLocation[1]);
        let lat = appLocation[0];
        let long = appLocation[1];
        $('#locationInfo').text(data.city);

        // yelp api key
        const YELP_API = window.yelpKey

        console.log(YELP_API);

        // proxy URL to fix CORS issue
        const proxyURL = 'https://shielded-hamlet-43668.herokuapp.com/';

        const yelpURL = 'https://api.yelp.com/v3/businesses/search?term=pizza&latitude=' + lat + '&longitude=' + long + '&limit=10';
        $.ajax({
            url: proxyURL + yelpURL,
            method: 'GET',
            // headers: {
            //  authorization: 'Bearer' + YELP_API
            // }
            beforeSend: function(xhr, settings) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + YELP_API);
            },
            complete: function(response) {
                console.log(response)
            }
        // }).done(response, => {
        //  console.log(response);
        }).done(function(data){
            let businessText = JSON.stringify(data.businesses);
            $('#locationInfo').text(businessText);
        });
    });

    // var token = "access token goes here";
    // var queryURL = 'https://api.yelp.com/v3/businesses/search?term=pizza&latitude=' + lat + '&longitude=' + long + 'filter=1&limit=1';
    // $.ajax({
    //     url: queryURL,
    //     method: 'GET',
    //     beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization', 'Bearer ' + YELP_API); },
    //     complete: function(response) { console.log(response) }
    // });




});





// let appLocation = $.getJSON('https://ipinfo.io', function(data){
//  console.log(data);
//  appLocation = data.city;
//  $('#locationInfo').text(data.city);
// });


// YELP

// const YELP_API = 'https://api.yelp.com/v3/businesses/search' + appLocation;

// $.ajax({
//  url: YELP_API,
//  method: 'GET'
// }).done(function(response){
//  console.log(response);
// });

// &filter=1  &radius=152  &sort_by=distance
>>>>>>> master
