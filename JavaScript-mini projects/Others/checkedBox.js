const visaCard=document.getElementById("visaCard");
const masterCard=document.getElementById("masterCard");
const paypal=document.getElementById("paypal");
const checkBtn=document.getElementById("checkBtn");
const submitBtn=document.getElementById("submitBtn");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

submitBtn.onclick = function(){
    if(checkBtn.checked){
        subResult.textContent=`You have subscribed!`;
    }
    else{
        subResult.textContent=`You have not subscribed`;
    }

    if(visaCard.checked){
        paymentResult.textContent=`You are paying with VISA Card`;
    }
    else if(masterCard.checked){
        paymentResult.textContent=`You are paying with Master Card`;
    }
    else if(paypal.checked){
        paymentResult.textContent=`You are paying with PayPal`;
    }
}