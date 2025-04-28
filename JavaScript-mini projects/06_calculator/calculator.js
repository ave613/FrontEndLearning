const display = document.getElementById("display");
function calculate() {
    try{
        display.value = eval(display.value);
  }
  catch (e) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(input) {
  display.value += input;
}