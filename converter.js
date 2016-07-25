function toCelsius (number) {
	return number * 9 / 5 + 32;
	console.log(Math.round(number));
}

function toFahrenheit (number) {
	return (number -32) * 5 / 9;
	console.log(Math.round(number));
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	for (var i = 0; i <button.length; i++){
		if (button[i].checked == true){
			selectedConverter = button[i].value;
		}
	}	
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);