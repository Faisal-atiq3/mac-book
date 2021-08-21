//function call
function calctMacMemoryPrice(macMemorySelect) {
    
    //Memory And Price Event 
    let memoryPrice = document.getElementById("memoryPrice"); 

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

function calctMAcStoragePrice(macStorageSelect) {

    //Storage Price 
    let storagePriceTag = document.getElementById("storagePrice");
    



    //Check The Mac Storage
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

function calctMacDeliveryCharge(macDeliverySelect) {

    // Storage Price 
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




//Extend Memory Button And Event Listener 
let extendMemoryButton = document.getElementById("extendMemory"); 

//Event Listener Button
extendMemoryButton.addEventListener('click', function() {
    calctMacMemoryPrice(true);
});


//Memory And Price Event
let defaultMemoryButton = document.getElementById("defaultMemory"); 

//Event Listener Button
defaultMemoryButton.addEventListener('click', function() {
    calctMacMemoryPrice(false);
});



//Extend Storage Button Event Apply And Handle
let extendMoreStorageBtn = document.getElementById("extendMoreStorage"); 

//Event Listener Button
extendMoreStorageBtn.addEventListener('click', function() {
    calctMAcStoragePrice(true);
});


//Extend Storage Button Event Apply And Handle
let extendStorageBtn = document.getElementById("extendStorage"); //Get The Extend Storage Button

//Event Listener Button
extendStorageBtn.addEventListener('click', function() {
    calctMAcStoragePrice(false);
});

// Storage Button Event Apply Handle
let defaultStorageBtn = document.getElementById("defaultStorage"); 

//Event Listener Button
defaultStorageBtn.addEventListener('click', function() {
    calctMAcStoragePrice();
});
// Delivery Charge Button Event Apply And Handle
let paidDeliveryBtn = document.getElementById("paidDelivery"); 

//Event Listener On This Button
paidDeliveryBtn.addEventListener('click', function() {
    calctMacDeliveryCharge(true);
});

// Delivery Free Button Event Apply And Handle
let defaultDeliveryBtn = document.getElementById("defaultDelivery"); 

//Event Listener On This Button
defaultDeliveryBtn.addEventListener('click', function() {
    calctMacDeliveryCharge(false);
});

//All Total Prices And SubTotal Value
function finalTotalPrice() {

    let besttotal = document.getElementById("subtotalPrice").innerText;
    let memoryPrice = document.getElementById("memoryPrice").innerText;
    let storagePrice = document.getElementById("storagePrice").innerText;
    let deliveryPrice = document.getElementById("deliveryPrice").innerText;

    let convtTotalPrice = (parseInt(besttotal) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice)); 

    let subtotalPrice = document.getElementById("totalPrice"); 
    subtotalPrice.innerText = convtTotalPrice; 

    
    // Bonus Part 
    //Get The Grand Total Tag
    let grandTotalPrice = document.getElementById("grandTotalPrice");
    grandTotalPrice.innerText = subtotalPrice.innerText; 

}

//Discount 20% Using The Promo Code

//Event Listener On Promo Code Apply Button
let promoCodeApplyBtn = document.getElementById("applyPromoCodeBtn");
promoCodeApplyBtn.addEventListener("click", function() {

    // The Peomo Code 

    let promoCode = "stevekaku" 

    // Input The Promo Code
    let promoCodeInput = document.getElementById("promoCodeInput");
    let promoCodeInputValue = promoCodeInput.value.toLowerCase();
    if (promoCodeInputValue == promoCode) {

        //Discount Percentage
        let discountPrcntge = 20;
        let subtotalPrice = document.getElementById("totalPrice"); 
        subtotalPrice = subtotalPrice.innerText; 

        // Discount Amount
        let discountAmount = (subtotalPrice / 100) * 20;
        subtotalPrice = subtotalPrice - discountAmount;  
        //Get The Grand Total Tag
        let grandTotalPrice = document.getElementById("grandTotalPrice");
        grandTotalPrice.innerText = subtotalPrice; 
        promoCodeInput.value = " ";

        //Success Messge
        let sccMessg = document.getElementById("successAlert"); 
        sccMessg.innerText = "You Get $" + discountAmount.toFixed(2) + " Discount!";

    } else if (promoCodeInputValue == "") {


        alert("Promo Code Is Empty!");

        let sccMessg = document.getElementById("successAlert"); 
        sccMessg.innerText = " ";
    } else if (promoCodeInputValue != promoCode) {


        alert("Promo Code Did Not Matched!");
        //Clear The Promo Code Field
        promoCodeInput.value = " ";
        let sccMessg = document.getElementById("successAlert"); 
        sccMessg.innerText = " ";
    } else {
        alert("You Already Applied This Promo Code!");
        //The Promo Code Field
        promoCodeInput.value = " ";
        let sccMessg = document.getElementById("successAlert"); 
        sccMessg.innerText = " ";
    }
});