(function(){

	var qs= this
	var quoteService= new QuoteService();

	quoteService.getQuote(function(quote){
		quote= JSON.parse(quote)
		var quoteText= quote.quote
		var author = quote.author
		var quoteTemplate=`<h2>Ponder this today: "${quoteText}"</h2>
								<h5>--${author}</h5>`
		$('#quote').append(quoteTemplate)

		
	})
	
}())
