(function(){

	var qs= this
	var quoteService= new QuoteService();

	quoteService.getQuote(function(quote){
		quote= JSON.parse(quote)
		var quoteText= quote.quote
		var author = quote.author
		var quoteTemplate=`<h2>Ponder this today: "${quoteText}"</h2>`
		var authorTemplate=`<h5>--${author}</h5>`
		$('#quote').html(quoteTemplate)

		$('#quote').on('mouseenter', function (e){
			console.log('enter')
			e.preventDefault()

			$('#quote').html(authorTemplate)
		})
		$('#quote').on('mouseleave', function (e){
			console.log('clicksy')
			e.preventDefault()

			$('#quote').html(quoteTemplate)
		})

		})

		
	
	
}())
