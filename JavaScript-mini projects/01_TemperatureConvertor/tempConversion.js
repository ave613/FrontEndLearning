const textBox=document.getElementById("textBox");
const toFah=document.getElementById("toFah");
const toCel=document.getElementById("toCel");
const result=document.getElementById("result");
let temp;

function convert(){
    event.preventDefault();
    if(toFah.checked){
       temp = Number(textBox.value);
       temp = temp * 9/5 +32;
       result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCel.checked){
        result.textContent="You selected to Celsius";
        temp = Number(textBox.value);
        temp = (temp -32) * (5/9) ;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent="Select a unit";
    }
}