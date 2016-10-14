(function () {

	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		weather = JSON.parse(weather)

		var main = weather.weather[0].main
		var description = weather.weather[0].description
		var icon = weather.weather[0].icon
		var temp = weather.main.temp
		var city = weather.name

		var tempF = temp * 9 / 5 - 459.67
		var tempC = temp - 273.15
		tempC = Math.floor(tempC)
		tempF = Math.floor(tempF)

		var iconUrl = `http://openweathermap.org/img/w/${icon}.png`

		var template = `<div class = 'container-fluid'>
							<div class='row'> 
								<div class='col-xs-2 col-xs-offset-10 weatherBox'>
								<div class='row'>
								<h4> Today in ${city}:<h4>
								</div>
							<div class= 'row'>
								<div class='col-xs-6'>
									<p> <button class='mybutton' id='f'>${tempF}&deg; F</button>
									<button class='mybutton' id='c'>${tempC}&deg; C</button>   </p>
									</div>
								<div class='col-xs-6'><p> ${description}<image src='${iconUrl}' alt=''><p>
									</div>
									</div>
									</div>
								</div>
							</div>`

		$('#weather').append(template)

		$('#c').hide()

		$('#f').on('click', function (e) {
			e.preventDefault()
			$('#f').hide()
			$('#c').show()
		})
		$('#c').on('click', function (e) {
			e.preventDefault()
			$('#c').hide()
			$('#f').show()
		})

		//What can you do with this weather object?
	})





} ())
