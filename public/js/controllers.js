angular.module('todoApp.controllers',[]).
		controller('List', ['$scope', function($scope){
			$scope.addTodo= function(){
				// var todo = new ToDo{};
				$scope.todos.push($scope.todo);

			};

		}]);