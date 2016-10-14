(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		weather=JSON.parse(weather)
	
		var main= weather.weather[0].main
		var description=weather.weather[0].description
		var icon = weather.weather[0].icon
		var temp = weather.main.temp
		var city = weather.name

		var tempF = temp*9/5-459.67
		var tempC = temp-273.15
		tempC=Math.floor(tempC)
		tempF=Math.floor(tempF)

		var iconUrl = `http://openweathermap.org/img/w/${icon}.png`

		var template = `<h3>Today's weather in ${city}:<h3>
						<h4> <button class='btn' id='f'>${tempF} F</button>
							<button class='btn' id='c'>${tempC} C</button>
							${main} </h4>
						<h5><image src='${iconUrl}' alt=''></h5>
						<h5> Specifically: ${description}</h5>` 

		$('#weather').append(template)
		$('#c').hide()
		$('#f').on('click', function(e){
				e.preventDefault()
				$('#f').hide()
				$('#c').show()
		})
		$('#c').on('click', function(e){
				e.preventDefault()
				$('#c').hide()
				$('#f').show()
		})

		//What can you do with this weather object?
	})
	
	
	
	
	
}())
