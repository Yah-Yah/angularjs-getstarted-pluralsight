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
