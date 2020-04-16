
//document.getElementById("search").addEventListener("click", dataValid)


function isDataInvalid(userInputProduct, userInputZipCode) {
    return zipCodeValidate(userInputZipCode) || productValidate(userInputProduct);
}


function zipCodeValidate(userInputZipCode) {
    let retVal = false;
    //let zipcodeInput = document.getElementById("zipcode").value;
    let zipcodeVal = parseInt(userInputZipCode);
    if (isNaN(zipcodeVal)) {
        let zipCodeError = 'Please enter a number';
        $("#displayErrorForNonNumerics").text(zipCodeError);
        $("#zipcode").empty();
        $("#displayErrorForNonNumerics").fadeOut(2000);
        $("#displayErrorForNonNumerics").css("display", "inline");
        retVal = true;
    }
    else {
        $("#displayErrorForNonNumerics").css("display", "none");
        retVal = false;
    }

    return retVal;
}


function productValidate(userInputProduct) {
    let retVal = false;
    //let productInputVal = document.getElementById("product").value;
    // let productInput = productInputVal.split("");
    let specialCharacter = ["`", "!", "@", "#", "$", "%", "^", "&", "-", "_", "=", " / ", "; ", ", ", " ? ", "; "]
    let specialCharFound = false;
    for (let i = 0; i < specialCharacter.length; i++) {
        if (userInputProduct.indexOf(specialCharacter[i]) > -1) {
            specialCharFound = true;
        }
    }
    if (specialCharFound) {
        let spclCharError = 'find special character';
        $("#displayErrorsForSpclChar").text(spclCharError);
        $("#product").empty();
        $("#displayErrorsForSpclChar").fadeOut(2000);
        $("#displayErrorsForSpclChar").css("display", "inline");
        retVal = true;
    }
    else {
        $("#displayErrorsForSpclChar").css("display", "none");
        retVal = false;
    }

    return retVal;
}


