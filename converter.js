var userTemp = document.getElementById("userTemp");
var inputTemp = document.getElementById("inputTemp");
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clear = document.getElementById("cleartemp");

//Functions
function toCelsius (number) {
	return number * 9 / 5 + 32;
	console.log(Math.round(number));
}

function toFahrenheit (number) {
	return (number -32) * 5 / 9;
	console.log(Math.round(number));
}

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
	if (document.getElementById("celsius").checked) {
		var tempCelsius = toCelsius(userTemp.value);
		inputTemp.innerHTML = tempCelsius;
		if (tempCelsius > 32) {
			inputTemp.style.backgroundColor = "lightpink";
		} else if (tempCelsius < 0) {
			inputTemp.style.backgroundColor = "lightblue";
		} else {
			inputTemp.style.backgroundColor = "lightgreen";
		}
	} else if (document.getElementById("fahrenheit").checked) {
		var tempFahrenheit = toFahrenheit(userTemp.value);
		inputTemp.innerHTML = tempFahrenheit;
		if (tempFahrenheit > 90) {
			inputTemp.style.backgroundColor = "lightpink";
		} else if (tempFahrenheit < 32) {
			inputTemp.style.backgroundColor = "lightblue";
		} else {
			inputTemp.style.backgroundColor = "lightgreen";
		}
	} else {
		alert("Choose a degree");
	}
  	console.log("click", clickEvent);
}
//Function for enter button
/*function enterButton(event){
	if (event.keyCode === 13){
		userTemp.determineConverter();
	}
}
function onClick (userTemp) {
	if (document.getElementById("userTemp") == 13 ){
	 	determineConverter(userTemp);
	}
	console.log("")
}*/
//Function to clear values
function clearConverter (clickEvent){
		inputTemp.innerHTML = "";
		userTemp.value = "";
		if (document.getElementById("celsius").checked) {
			document.getElementById("celsius").checked = false;
		} else {
			document.getElementById("fahrenheit").checked = false;
		}
		inputTemp.style.backgroundColor = "white";
		console.log("click", clickEvent);
}

button.addEventListener("click", determineConverter, true);
clear.addEventListener("click", clearConverter, true);



