//  Function call
function calculateMacPrice(macMemorySelect, macDeliverySelect) {
    
    let memoryPrice = document.getElementById("memoryPrice");




    // If ELse Statements
    if (macMemorySelect == true) {

        memoryPrice.innerText = 180; 

        //Update Total Price
        finalTotalPrice();

    } else {

        memoryPrice.innerText = 0; 

        //Update Total Price Again
        finalTotalPrice();
    }

}
//funtion call 
function calculateMacPrice2(macStorageSelect) {

    
    let storagePriceTag = document.getElementById("storagePrice");
   
    // Mac Storage Selection
    if (macStorageSelect == true) {
        storagePriceTag.innerText = 180; 

        //Update Total Price
        finalTotalPrice();

    } else if (macStorageSelect == false) {
        storagePriceTag.innerText = 100; 

        //Update Total Price
        finalTotalPrice();
    } else {
        storagePriceTag.innerText = 0; 

        //Update Total Price
        finalTotalPrice();
    }
}

function calculateMacPrice3(macDeliverySelect) {

    //Get Storage 
    let deliveryPriceTag = document.getElementById("deliveryPrice");
    

    if (macDeliverySelect == true) {

        deliveryPriceTag.innerText = 20; 

        //Update Total Price Again
        finalTotalPrice();

    } else {
        deliveryPriceTag.innerText = 0; 

        //Update Total Price Again
        finalTotalPrice();
    }
}

let extendMemoryButton = document.getElementById("extendMemory"); 



extendMemoryButton.addEventListener('click', function() {
    calculateMacPrice(true);
});


//Default Memory And Price Event
let defaultMemoryButton = document.getElementById("defaultMemory"); 

// Event Listener  Button
defaultMemoryButton.addEventListener('click', function() {
    calculateMacPrice(false);
});

let extendMoreStorageBtn = document.getElementById("extendMoreStorage"); 

// Event Listener  Button
extendMoreStorageBtn.addEventListener('click', function() {
    calculateMacPrice2(true);
});



let extendStorageBtn = document.getElementById("extendStorage"); 

//Apply Event Listener On This Button

extendStorageBtn.addEventListener('click', function() {
    calculateMacPrice2(false);
});


let defaultStorageBtn = document.getElementById("defaultStorage"); 
// Event Listener On This Button
defaultStorageBtn.addEventListener('click', function() {
    calculateMacPrice2();
});


let paidDeliveryBtn = document.getElementById("paidDelivery"); 


paidDeliveryBtn.addEventListener('click', function() {
    calculateMacPrice3(true);
});

// Delivery Free Button Event Apply And Handle
let defaultDeliveryBtn = document.getElementById("defaultDelivery"); 

// Event Listener On This Button
defaultDeliveryBtn.addEventListener('click', function() {
    calculateMacPrice3(false);
});

function finalTotalPrice() {

    let besttotal = document.getElementById("subtotalPrice").innerText;
    let memoryPrice = document.getElementById("memoryPrice").innerText;
    let storagePrice = document.getElementById("storagePrice").innerText;
    let deliveryPrice = document.getElementById("deliveryPrice").innerText;

    let convtTotalPrice = (parseInt(besttotal) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice)); //Convert All Of Prices From String To Intiger

    let subtotalPrice = document.getElementById("totalPrice"); //Get The SubTotal Price Tag
    subtotalPrice.innerText = convtTotalPrice; //Set Sub Total Price

    //****************************************************************
    //Let's Make Bonus Part For Getting Bonus Marks
    //****************************************************************	

    //***********Dynamic Grand Total In Footer************
    //Get The Grand Total Tag
    let grandTotalPrice = document.getElementById("grandTotalPrice");

    grandTotalPrice.innerText = subtotalPrice.innerText; //Set The Grand Total Price Of The MAC 

}

//Using The Promo Code Discount 20%

// Let's Apply Event Listener On The Promo Code Apply Button
let promoCodeApplyBtn = document.getElementById("applyPromoCodeBtn");
promoCodeApplyBtn.addEventListener("click", function() {

    //Peomo Code 
    let promoCode = "stevekaku" 

    //Input the promo code
    let promoCodeInput = document.getElementById("promoCodeInput");
    let promoCodeInputValue = promoCodeInput.value.toLowerCase();
    if (promoCodeInputValue == promoCode) {

        //Discount percentage
        let discountPrcntge = 20;
        let subtotalPrice = document.getElementById("totalPrice"); 
        subtotalPrice = subtotalPrice.innerText; 

        // Discount amount
        let discountAmount = (subtotalPrice / 100) * 20;
        subtotalPrice = subtotalPrice - discountAmount; 
        // Grand Total 
        let grandTotalPrice = document.getElementById("grandTotalPrice");
        grandTotalPrice.innerText = subtotalPrice; 
        promoCodeInput.value = " ";

        //Success messge
        let sccMessg = document.getElementById("successAlert");  Tag
        sccMessg.innerText = "Wow, You Get $" + discountAmount.toFixed(2) + " Discount!";

    } else if (promoCodeInputValue == "") {


        alert("Your Promo Code Input Is Empty!");

        let sccMessg = document.getElementById("successAlert"); Tag
        sccMessg.innerText = " ";
    } else if (promoCodeInputValue != promoCode) {


        alert("Sorry Wrong Promo Code!");
        // Clear The Promo Code Field
        promoCodeInput.value = " ";
        let sccMessg = document.getElementById("successAlert"); 
        sccMessg.innerText = " ";
    } else {
        alert("You Have Already Been Applied!");
        //Clear
        promoCodeInput.value = " ";
        let sccMessg = document.getElementById("successAlert"); 
        sccMessg.innerText = " ";
    }
});