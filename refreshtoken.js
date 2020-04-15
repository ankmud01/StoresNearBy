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
function fetchProducts(userInput) {
  // Get the products from Kroger API

  let productUrl = "https://api.kroger.com/v1/products?filter.term=" + userInput;
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

      generateProductUrl(response);
 

      function createImgeEl() {

        for (let i = 0; i < response.data.length; i++) {

          let image = response.data[i].images.find(isFrontImg).sizes.find(isSmallImg).url;
          let newImg = $("<img>").attr("src", image);
          if (i < 4) {//need to update when showing products above index3
            createCardPanelContent(newImg, i);

          }
        }

      }
      
      createImgeEl();

    })
    .catch((error) => retryStrategy(error));
}


function isFrontImg(img) {
  return img.perspective === "front";
}
function isSmallImg(img) {
  return img.size === "small";
}

function createCardPanelContent(newImg, cardID) {
 
  let cardContentElement = $("#card" + (cardID + 1));
 $(cardContentElement).empty();
  let itemNameElement = $("<span>").addClass("card-title");
  $(itemNameElement).text("Item - 1");

  let itemDescriptionElement = $("<p>");
  $(itemDescriptionElement).text("Item Description");

  $(cardContentElement).append(itemNameElement);
  $(cardContentElement).append(itemDescriptionElement);

  $(cardContentElement).append(newImg);
}





function generateProductUrl(response) {

  for (let i = 0; i < 4; i++) {
    const productName = response.data[i].description;
    // console.log(response.data[0].description);
    // console.log(response.data[0].productId);
    const productId = response.data[i].productId;
    const result = productName
      .toLowerCase()
      .replace(/[^0-9,^a-z,^ ]/g, "")
      .replace(/ +/g, '-');
    const url = `https://www.kroger.com/p/${result}/${productId}`;

    redirectProductUrl(url, i);

  }

}






function redirectProductUrl(url, productlinkID) {
  const productAtag = $("#productLink" + (productlinkID + 1))
    $(productAtag).attr("href", url)

}

