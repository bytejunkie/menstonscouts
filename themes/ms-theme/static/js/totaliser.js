const units = {
	Celcius: "K",
	Fahrenheit: "K"
};

const config = {
	minTemp: 0,
	maxTemp: 750,
	unit: ""
};

// Change min and max temperature values

const tempValueInputs = document.querySelectorAll("input[type='text']");

tempValueInputs.forEach((input) => {
	input.addEventListener("change", (event) => {
		const newValue = event.target.value;
		
		if(isNaN(newValue)) {
			return input.value = config[input.id];
		} else {
			config[input.id] = input.value;
			range[input.id.slice(0, 3)] = config[input.id]; // Update range
			return setTemperature(); // Update temperature
		}
	});
});

// Switch unit of temperature

const unitP = document.getElementById("unit");

unitP.addEventListener("click", () => {
	config.unit = config.unit === "Celcius" ? "Fahrenheit" : "Celcius";
	unitP.innerHTML = config.unit + ' ' + units[config.unit];
	return setTemperature();
})

// Change temperature

const range = document.querySelector("input[type='range']");
const temperature = document.getElementById("temperature");

function setTemperature() {
	// temperature.style.height = "5";
	temperature.style.height = (range.value - config.minTemp) / (config.maxTemp - config.minTemp) * 50 + "%";
	temperature.dataset.value = range.value;
}

range.addEventListener("input", setTemperature);
setTimeout(setTemperature, 1000);

