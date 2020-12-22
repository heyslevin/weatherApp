import Model from "./model.js";
import View from "./view.js";
import "./styles.css";

(async function main() {
	const model = Model();
	const view = View();
	console.log(view);
	console.log(model);

	//Query Selectors
	let input = document.querySelector("input[name='city']");
	let button = document.querySelector("button");

	//Create Elements
	let currentWeather = document.createElement("div");
	let p = document.createElement("p");
	let icon = document.createElement("img");

	//Functions

	let getInput = async function () {
		let city = input.value;
		let climate = await model.getData(city).catch(model.handleError);

		console.log("climate is " + climate);
		if (typeof climate !== "undefined") {
			console.log("doing it");
			view.applyData(climate);
		}
	};

	//Event
	button.addEventListener("click", getInput);
})();
