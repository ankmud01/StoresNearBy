function geoFindMe() {

    function invokeGeoLocationReverseGeoCodingApi(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      const YOUR_API_KEY = "e0bc6952574343d0907086659ff3bed6";
      
      queryUrl = "https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "+" + longitude + "&key=" + YOUR_API_KEY;

        $.ajax({
          url: queryUrl,
          method: "GET"
        }).then(function(response) {
          let getZipCode = response.results["0"].components.postcode;
          $("#zipcode").val(getZipCode);
        });
    }

    function error() {        
      return 'Unable to retrieve your location';
    }

    navigator.geolocation.getCurrentPosition(invokeGeoLocationReverseGeoCodingApi, error);
    
}

geoFindMe();




