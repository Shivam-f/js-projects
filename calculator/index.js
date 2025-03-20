const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input; // if we write only = it'll show only one letter at a time
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}