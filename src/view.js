var view = function () {
	let applyData = function (data) {
		//Query Selectors
		let city = document.querySelector(".city");
		let degrees = document.querySelector(".degrees");
		let icon = document.querySelector(".icon img");

		let feels = document.querySelector(".feels");
		let humidity = document.querySelector(".humidity");
		let wind = document.querySelector(".wind");

		//Change Info
		city.innerHTML = data.city;
		degrees.innerHTML = data.temp;
		icon.src = data.icon;
		feels.innerHTML = data.feels;
		humidity.innerHTML = data.humidity;
		wind.innerHTML = data.wind;
	};

	return {
		applyData,
	};
};

export default view;
