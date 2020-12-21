import Model from "./model.js";
import "./styles.css";

(async function main() {
	const model = Model();

	let weatherData = await model.getData();
	console.log(weatherData);

	//Query Selectors
	let dataText = document.querySelector(".dataText p");

	//Create P
	let p = document.createElement("p");
	let icon = document.createElement("img");

	//HTML
	icon.src = weatherData.icon;

	p.innerHTML = weatherData.temp;
	p.appendChild(icon);

	p.innerHTML += `<br><br>Also, humidity is ${weatherData.humidity}, feels like ${weatherData.feels}, and wind is ${weatherData.wind}`;

	//Append
	dataText.appendChild(p);
})();
