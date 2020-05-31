// STEP_01 add $http service to my controller
var MainCtrl = function($scope, $http) {
  // STEP_02 setup .get request for api
  /*
  $http.get("https://api.github.com/users/Yah-Yah")
       .then(function(response){
         $scope.person = response.data
       })
  */
  // STEP_03 we can pass an anonymous function as above or we could declare
  // local function responsible for handling promise and then pass that function into .then method
  const onUserComplete = function(response) {
    $scope.user = response.data;
  }
  // STEP_04 $scope.user now has all the data form the api stored as properties, for example 'name' or 'avatar_url' etc

  // NOTE: .then method is only invoked if the .get call is successful and there's data fetched form the server
  // STEP_06 we can pass second function into .then method that will handle error - `reason` holds all technical reason why call failed
  const onError = function(reason) {
    $scope.error = "Could not fetch the user becasue of " + reason;
  };

  $http.get("https://api.github.com/users/Yah-Yah")
       .then(onUserComplete, onError);



  $scope.message = "Hello AngularJS";
}
