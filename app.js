document.getElementById("generate-btn").addEventListener("click", function(){
function getPin() {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}
generatePin();
});
document.getElementById("key-pad").addEventListener("click", function(event){
    const targetKey =  event.target.innerText;
    const cals = document.getElementById("typed-numbers");
    if (isNaN(targetKey)) {
       if (targetKey == "C") {
           cals.value = " ";
       }
   }else{
    const prevCals = cals.value;
    const newCals = prevCals + targetKey;
    cals.value = newCals;
   }

});
function verifyPin() {
    const generatePin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const successMatch = document.getElementById("pin-success");
    const errorMsg = document.getElementById("pin-field");
    if (generatePin == typedNumbers) {
        successMatch.style.display = "block";
        errorMsg.style.display = "none";

    }else{
        errorMsg.style.display = "block";
        successMatch.style.display = "none";

    }
}