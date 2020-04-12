
$(document).ready(function () {

    $("#userinputinfo").on("submit", function (event) {
        event.preventDefault();

        var API_KEY = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4NjY5ODAxMjYzMzg4NDE3NywiYXVkIjoiY29vbHN0b3JlbmVhcmJ5LTM5YTJhZGU1N2NjMmQyMjA4OGI4NjZjYzk4MjcwZGFmNTc0NzQxNzg5MDgwMDAwMjAzNSIsImV4cCI6MTU4NjY5OTgxMiwiaWF0IjoxNTg2Njk4MDA3LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiNDExN2M2LWQxNmItNDg5Yi04MDY3LTBlNjY2NTYzNWNjNiJ9.Wv7E-52Ds7rKqOIm4yyT-QWNZhY5O4ZuneAnhZTB4U6JbL_KFOBb_YYKjfJFDK848yTBfwP3c4pvLHCAW26_hZcJIBch1NPzyfSfYshGAPGBFdiR_L7VDcsh6V1O5S-Jx8Wo4-Z43xIhe3ai8B2HcNiRRYEoLabHF_Z3_wW1edf5iIA3WpvTbX_b4v9B3v0vkpKVN3TPU3Nc-FQqy8UdCQqBhNMchu7b0mP1sNV7GqLEsLM64JsgKKeolvAopSz169HRQhUEUcONXIQc_Xm6_UkmqRuDJ_uotVL931RUZEN8fxg3EseKEyGr_3L5Y8zC_y-8QNam1MhL1aGCFfS9Dg"

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.kroger.com/v1/products?filter.term=milk",
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4NjY5ODAxMjYzMzg4NDE3NywiYXVkIjoiY29vbHN0b3JlbmVhcmJ5LTM5YTJhZGU1N2NjMmQyMjA4OGI4NjZjYzk4MjcwZGFmNTc0NzQxNzg5MDgwMDAwMjAzNSIsImV4cCI6MTU4NjY5OTgxMiwiaWF0IjoxNTg2Njk4MDA3LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiNDExN2M2LWQxNmItNDg5Yi04MDY3LTBlNjY2NTYzNWNjNiJ9.Wv7E-52Ds7rKqOIm4yyT-QWNZhY5O4ZuneAnhZTB4U6JbL_KFOBb_YYKjfJFDK848yTBfwP3c4pvLHCAW26_hZcJIBch1NPzyfSfYshGAPGBFdiR_L7VDcsh6V1O5S-Jx8Wo4-Z43xIhe3ai8B2HcNiRRYEoLabHF_Z3_wW1edf5iIA3WpvTbX_b4v9B3v0vkpKVN3TPU3Nc-FQqy8UdCQqBhNMchu7b0mP1sNV7GqLEsLM64JsgKKeolvAopSz169HRQhUEUcONXIQc_Xm6_UkmqRuDJ_uotVL931RUZEN8fxg3EseKEyGr_3L5Y8zC_y-8QNam1MhL1aGCFfS9Dg"
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
                "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4NjY5ODAxMjYzMzg4NDE3NywiYXVkIjoiY29vbHN0b3JlbmVhcmJ5LTM5YTJhZGU1N2NjMmQyMjA4OGI4NjZjYzk4MjcwZGFmNTc0NzQxNzg5MDgwMDAwMjAzNSIsImV4cCI6MTU4NjY5OTgxMiwiaWF0IjoxNTg2Njk4MDA3LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjBiNDExN2M2LWQxNmItNDg5Yi04MDY3LTBlNjY2NTYzNWNjNiJ9.Wv7E-52Ds7rKqOIm4yyT-QWNZhY5O4ZuneAnhZTB4U6JbL_KFOBb_YYKjfJFDK848yTBfwP3c4pvLHCAW26_hZcJIBch1NPzyfSfYshGAPGBFdiR_L7VDcsh6V1O5S-Jx8Wo4-Z43xIhe3ai8B2HcNiRRYEoLabHF_Z3_wW1edf5iIA3WpvTbX_b4v9B3v0vkpKVN3TPU3Nc-FQqy8UdCQqBhNMchu7b0mP1sNV7GqLEsLM64JsgKKeolvAopSz169HRQhUEUcONXIQc_Xm6_UkmqRuDJ_uotVL931RUZEN8fxg3EseKEyGr_3L5Y8zC_y-8QNam1MhL1aGCFfS9Dg"
            }
        }

        $.ajax(settingsLocation).done(function (responseLocation) {
              console.log(responseLocation);
        });




    });




}) ;

