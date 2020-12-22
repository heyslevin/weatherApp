var model = function () {
	var getData = async function (city = "Monterrey") {
		const apiKey = "1bb0d8b4f3762be3fe8f5ccfeb29326b";
		let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

		const response = await fetch(apiLink, { mode: "cors" });
		const data = await response.json();

		let cleanData = {
			city: data.name,
			temp: Math.round(data.main.temp) + "C°",
			humidity: data.main.humidity + "%",
			desc: data.weather[0].description,
			wind: Math.round(data.wind.speed).toFixed(1) + "m/s",
			feels: data.main.feels_like,
			icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
		};

		return cleanData;
	};

	return {
		getData,
	};
};

export default model;