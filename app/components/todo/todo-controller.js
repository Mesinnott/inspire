(function(){

	var todoService= new TodoService();


	todoService.getTodos

	todoService.saveTodos
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns an array
	// saveTodos accepts an array and stores it to your local storage
	
	var printTodos = function(){
		var tasks= todoService.getTodos()
		var taskTemplate= `Total Tasks on the Docket: ${tasks.length}<hr>`
		for(var i=0; i<tasks.length; i++){
			var thisTask=tasks[i]
			taskTemplate += `<li id='${i}'><i id='${i}' class="fa fa-circle-o" aria-hidden="true"></i> ${i+1}: ${thisTask}<i id='${i}'class="fa fa-times" aria-hidden="true"></i></li>`
		}
		$('#taskList').html(taskTemplate)
		// $('.fa-check-circle').hide()
	}

	printTodos()


	var addTodo = function(todo){
		var tasks= todoService.getTodos()
		tasks.push(todo)
		todoService.saveTodos(tasks)
	}

	var deleteTodo = function(id){
		var tasks=todoService.getTodos()
		var newTasks =tasks.splice(id,1)
		todoService.saveTodos(tasks)
	}

	$('#addToDo').on('click', function(e){
		e.preventDefault();
		var task = $('#addField').val()
		var var1 = document.getElementById('myForm');
		addTodo(task)
		printTodos()
		var1.reset()
	
	})

	$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        var task = $('#addField').val()
		var var1 = document.getElementById('myForm');
		addTodo(task)
		printTodos()
		var1.reset()
    }
});

	
	$('#taskList').on('click','.fa-times', function(e){
		deleteTodo(this.id)
		printTodos()
	})

	$('#taskList').on('click','.fa-circle-o', function(e){
		e.preventDefault();
		$(this).toggleClass('fa-circle-o  fa-check-circle ')
		var yep= this.id
		console.log(this.id)

		$('#yep').addClass('strikethrough')
	})
	
	$('#taskList').on('click','.fa-check-circle', function(e){
		e.preventDefault();
		console.log(this.id)
		$(this).toggleClass('fa-check-circle fa-circle-o')
		})

	
}())
