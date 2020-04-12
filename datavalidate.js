
document.getElementById("search").addEventListener("click", dataValid)


function dataValid(){
    zipCodeValidate();
    productValidate();
}


function zipCodeValidate() {
    let zipcodeInput = document.getElementById("zipcode").value;
    let zipcodeVal = parseInt(zipcodeInput);
    if (Number.isInteger(zipcodeVal) == false) {
        alert('Please enter a number');
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
    if (specialCharFound){
        alert('find special character');
    }  
}


