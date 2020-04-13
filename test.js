      var log = console.log;
      var retryCount = 0;
      var tokenUrl = "https://api.kroger.com/v1/connect/oauth2/token";
      var productUrl =
        "https://api.kroger.com/v1/products?filter.term=sanitizer";
      var token = localStorage.getItem('token') || "";
      async function refreshToken() {
          try {
            const response = await $.ajax({
                url: tokenUrl,
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                    "Basic Y29vbHN0b3JlbmVhcmJ5LTM5YTJhZGU1N2NjMmQyMjA4OGI4NjZjYzk4MjcwZGFmNTc0NzQxNzg5MDgwMDAwMjAzNTpwTEtEODQ4UXZMRlg4akdzbUVUQVBHRmhFSEdaVlliMXpDcm8zSUFt",
                },
                data: {
                    grant_type: "client_credentials",
                    scope: "product.compact",
                },
            })
            token = response.access_token;
            localStorage.setItem("token", token);
          } catch (error) {
              log("error: ", error);
          }
      }
      async function retryStrategy(error) {
        var statusCode = error.status || 500;
        if (statusCode === 401 && retryCount < 2) {
          retryCount++;
          // Async Await
          await refreshToken(); // 1
          await fetchProducts(); // 2
        }
      }
      function fetchProducts() {
        // Get the products from Kroger API
        $.ajax({
          url: productUrl,
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        })
          .then(function (response) {
            retryCount = 0;
            log("Data: ", response);
          })
          .catch((error) => retryStrategy(error));
      }
      fetchProducts();