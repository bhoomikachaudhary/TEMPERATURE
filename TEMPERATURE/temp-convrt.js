let celsuisInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");

celsuisInput.addEventListener("keyup", function () {
  let insertedValue = this.value;
  let convertedToFahrenheit = convertToFahrenheit(insertedValue);
  fahrenheitInput.value = convertedToFahrenheit;
  if(!this.value){
    fahrenheitInput.value = "";
  }
});

fahrenheitInput.addEventListener("keyup", function() {
    let insertedValue = this.value;
    let convertedValueToCelsius = convertToCelsius(insertedValue);
    celsuisInput.value = parseFloat(convertedValueToCelsius).toFixed(2);
    if(!this.value){
        celsuisInput.value = "";
    }
})  

function convertToFahrenheit(insertedValue) {
  return (parseFloat(insertedValue) * 9) / 5 + 32;
}

function convertToCelsius(insertedValue){
    return (((parseFloat(insertedValue) - 32) * 5) / 9);
}