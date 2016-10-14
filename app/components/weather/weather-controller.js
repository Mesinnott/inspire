(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		// console.log(weather);
		weather=JSON.parse(weather)
	
		var main= weather.weather[0].main
		// console.log(main)
		var description=weather.weather[0].description
		// console.log(description)
		var icon = weather.weather[0].icon
		var temp = weather.main.temp
		// console.log(temp)
		var city = weather.name
		// console.log(city)

		var tempF = temp*9/5-459.67
		tempF=Math.floor(tempF)

		var iconUrl = `http://openweathermap.org/img/w/${icon}.png`

		var template = `<h3>Today's weather in ${city}:<h3>
						<h4> ${tempF}F  ${main} </h4>
						<h5><image src='${iconUrl}' alt=''></h5>
						<h5> Specifically: ${description}</h5>` 

		$('#weather').append(template)


		//What can you do with this weather object?
	})
	
	
	
	
	
}())
