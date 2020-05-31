// STEP_01 Define module
const app = angular.module("githubViewer", []);

var MainCtrl = function($scope, $http) {
  const onUserComplete = function(response) {
    $scope.user = response.data;
  }

  const onError = function(reason) {
    $scope.error = "Could not fetch the user becasue of " + reason;
  };

  $http.get("https://api.github.com/users/Yah-Yah")
       .then(onUserComplete, onError);

  $scope.message = "Hello AngularJS";
}

// STEP_02 Register module
app.controller("MainCtrl", MainCtrl);
// NOTE: when deploying to production the line above should look:
/*
app.controller("MainCtrl", ['$scope', '$http', MainCtrl]);
*/
// becasue when we deploy we use minifiers and they strip function parameters
// such as $scope of their name turning them into 'n' for example, but we still
// need to reffer to $scope and $http for angularJS to work properly
