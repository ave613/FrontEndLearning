const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min=0;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick=function(){
    randomNum1 = Math.floor(Math.random()*(max-min+1))+min;
    randomNum2 = Math.floor(Math.random()*(max-min+1))+min;
    randomNum3 = Math.floor(Math.random()*(max-min+1))+min;
    label1.textContent=randomNum1;
    label2.textContent=randomNum2;
    label3.textContent=randomNum3;
}


