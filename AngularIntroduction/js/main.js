function MainCtrl($scope) {

	$scope.todos = [ {
		text : "Learn AngularJS",
		done : false
	}, {
		text : "Basic tutorial for AngularJS",
		done : false
	} ]
	
	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}
	
	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	}
	
	$scope.clearCompleated = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		});
	}
}