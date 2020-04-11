
$(document).ready(function(){

$("#userinputinfo").on("submit",function(event) {
event.preventDefault();

var queryUrl = "https://api.kroger.com/v1/products?filter.term=milk";


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kroger.com/v1/products?filter.term=milk",
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4NjYxODg4OTYzNjg2Mzc0NywiYXVkIjoiY29vbHN0b3JlbmVhcmJ5LTM5YTJhZGU1N2NjMmQyMjA4OGI4NjZjYzk4MjcwZGFmNTc0NzQxNzg5MDgwMDAwMjAzNSIsImV4cCI6MTU4NjYyMDY4OSwiaWF0IjoxNTg2NjE4ODg0LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiNDExN2M2LWQxNmItNDg5Yi04MDY3LTBlNjY2NTYzNWNjNiJ9.O-7Sbnc8mNbwJITa_nUxlijlEQqUNpUZuWg5dX60GvoMKMNCjqQdTklcXDaRuEYYgQLlC7bZ4gnzYzQhXv75rVt6EaX44PJpIKgihTrNA7HdC4RLsXY3N_CLo1bBpyL6Yuwkcs7L5JnOOHVNvPHbVKF4BiSxjDNmsP3XjY9gYpXf1B5ZwEG18JDmmhss5YW0qI00U9_i2188upQFKXtPflIb_16QMKdcehbHDDGIWhHmE3iIwxpxnIy_aecOcVvkqMQXeCjiBXKxH2LQc16VWfmYBBvWXzQLBbYDeT5S6irXJbAQP5xyoWAnIyYrzUCzr0KsvwM61qK1R5YD3Z_Oog"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});


var userInputZip = $("#zipcode").val();

var settingsLocation = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kroger.com/v1/locations?filter.zipCode.near=30096",
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4NjYxODg4OTYzNjg2Mzc0NywiYXVkIjoiY29vbHN0b3JlbmVhcmJ5LTM5YTJhZGU1N2NjMmQyMjA4OGI4NjZjYzk4MjcwZGFmNTc0NzQxNzg5MDgwMDAwMjAzNSIsImV4cCI6MTU4NjYyMDY4OSwiaWF0IjoxNTg2NjE4ODg0LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiNDExN2M2LWQxNmItNDg5Yi04MDY3LTBlNjY2NTYzNWNjNiJ9.O-7Sbnc8mNbwJITa_nUxlijlEQqUNpUZuWg5dX60GvoMKMNCjqQdTklcXDaRuEYYgQLlC7bZ4gnzYzQhXv75rVt6EaX44PJpIKgihTrNA7HdC4RLsXY3N_CLo1bBpyL6Yuwkcs7L5JnOOHVNvPHbVKF4BiSxjDNmsP3XjY9gYpXf1B5ZwEG18JDmmhss5YW0qI00U9_i2188upQFKXtPflIb_16QMKdcehbHDDGIWhHmE3iIwxpxnIy_aecOcVvkqMQXeCjiBXKxH2LQc16VWfmYBBvWXzQLBbYDeT5S6irXJbAQP5xyoWAnIyYrzUCzr0KsvwM61qK1R5YD3Z_Oog"
  
  
  }
}

$.ajax(settingsLocation).done(function (responseLocation) {
  console.log(responseLocation);
});



});







})




