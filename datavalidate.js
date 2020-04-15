
document.getElementById("search").addEventListener("click", dataValid)


function dataValid(event) {
    event.preventDefault();
    let validZipCode = zipCodeValidate();
    let validProduct = productValidate();
    //if valid, then call the api
    //if not valid, do not call api
    if (validZipCode == 'valid' && validProduct == 'valid') {
        let userInput = document.getElementById("product").value;
        fetchProducts(userInput);
    }
}


function zipCodeValidate() {
    let zipcodeInput = document.getElementById("zipcode").value;
    let zipcodeVal = parseInt(zipcodeInput);
    if (isNaN(zipcodeVal)) {
        alert('Please enter a number');
        return 'not valid';
    } else {
        return 'valid';
    }
}


function productValidate() {
    let productInputVal = document.getElementById("product").value;
    // let productInput = productInputVal.split("");
    let specialCharacter = ["`", "!", "@", "#", "$", "%", "^", "&", "-", "_", "=", " / ", "; ", ", ", " ? ", "; "]
    let specialCharFound = false;
    for (let i = 0; i < specialCharacter.length; i++) {
        if (productInputVal.indexOf(specialCharacter[i]) > -1) {
            specialCharFound = true;
        }
    }
    if (specialCharFound) {
        alert('find special character');
        return 'not valid';
    } else {
        return 'valid';
    }
}


