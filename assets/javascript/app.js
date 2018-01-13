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
            let businessText = JSON.parse(data);
            $('#locationInfo').text(businessText);
        });
    });
