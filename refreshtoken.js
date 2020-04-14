/*
            Every request that we made, we're going to check for the 401 statusCode
            If the statusCode is 401
            Refresh the token
            If the statusCode is not 401, then we don't refresh the token
        */
// Global Variables
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


      console.log(response.data[0].images.find(isFrontImg).sizes.find(isSmallImg).url);
      console.log(response.data[0].description);


      

      function createImgeEl() {

        for (let i = 0; i < 10; i++) {

          let cardcontent = $("<div>").att("id", "cardcontent-" + [i])
          let img1 = $("<img>").attr("src", response.data[0].images.find(isFrontImg).sizes.find(isSmallImg).url);
          let newImgTag = $("<img>").attr("src", img1);
          let newCardDiv = $("<div>">.addClass("card" "card-panel" "hoverable");

          
          // let newContent = $("<div>").addClass("card-content");

          $(cardcontent).append(newImgTag)

          // let image = response.data[i].images.find(isFrontImg).sizes.find(isSmallImg).url;
          // let newImg = $("<img>").attr("src", image);
          // createCardPanel(newImg);
          // let newContent = $("<div>").addClass("card-content");
          // $(newContent).append(newImg)

          $(".card-title").append(newContent);
        }

      }
      createImgeEl();




    })
    .catch((error) => retryStrategy(error));
}
fetchProducts();


function isFrontImg(img) {
  return img.perspective === "front";
}
function isSmallImg(img) {
  return img.size === "small";
}