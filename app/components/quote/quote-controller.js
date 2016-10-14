(function(){

	var qs= this
	var quoteService= new QuoteService();

	quoteService.getQuote(function(quote){
		quote= JSON.parse(quote)
		var quoteText= quote.quote
		var author = quote.author
		var quoteTemplate=`<h4>Ponder this today:</h4><h5> "${quoteText}"</h5>`
		var authorTemplate=`<h4>--${author}</h4>`
		$('#quote').html(quoteTemplate)

		$('#quote').on('mouseenter', function (e){
			console.log('enter')
			e.preventDefault()

			$('#quote').html(authorTemplate)
		})
		$('#quote').on('mouseout', function (e){
			console.log('clicksy')
			e.preventDefault()

			$('#quote').html(quoteTemplate)
		})

		})

		
	
	
}())
