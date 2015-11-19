/**Angular module**/
var SmartSearch = angular.module("SmartSearch", []);

	
SmartSearch.controller("Search", function($scope, $http) {
	
		var postData = function(dataURI, params) {
			return $http({
				method : 'POST',
				url : dataURI,
				data : params
			});
		};
		
		$scope.sendQuery = function(){
			console.log("Hello : " + $scope.searchquery + " : " + $scope.category);
			
			var params = {
					'querystring' : $scope.searchquery,
					'category' : $scope.category
			};
			
			postData("",params).success(function(res){
				console.log(res);
			}).error(function(err){
				console.log(res);
				
			});
			
		};
});