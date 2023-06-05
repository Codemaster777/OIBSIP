function convertTemperatureCF() {
  var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
  var unitInput = document.getElementById("unitInput").value;
  var resultContainer = document.getElementById("resultContainer");

  if (unitInput === "celsius") {
    var fahrenheit = (temperatureInput * 9/5) + 32;
    resultContainer.innerHTML = temperatureInput + "°C = " + fahrenheit.toFixed(2) + "°F";
  } else if (unitInput === "fahrenheit") {
    var celsius = (temperatureInput - 32) * 5/9;
    resultContainer.innerHTML = temperatureInput + "°F = " + celsius.toFixed(2) + "°C";
  }
}

function convertTemperatureCK() {
  var temperatureInput = parseFloat(document.getElementById("temperature_Input").value);
  var unitInput = document.getElementById("unit_Input").value;
  var result_Container = document.getElementById("result_Container");

  if (unitInput === "celsius") {
    var kelvin = temperatureInput + 273.15;
    result_Container.innerHTML = temperatureInput + "°C = " + kelvin.toFixed(2) + "K";
  } else if (unitInput === "kelvin") {
    var celsius = temperatureInput - 273.15;
    result_Container.innerHTML = temperatureInput + "K = " + celsius.toFixed(2) + "°C";
  }
}
