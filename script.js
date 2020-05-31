var MainCtrl = function($scope) {
  // STEP_01 Set up javascript object literal 'person', that variable is currently only available inside the function
  var person = {
    firstName: 'Janina',
    lastName: 'Zylinksa',
    imgSrc: 'https://imgix.ranker.com/user_node_img/3168/63352038/original/jiji-photo-u3?w=650&q=50&fm=pjpg&fit=crop&crop=faces'
  };
  $scope.message = "Hello AngularJS";
  // STEP_02 Attach 'person' model to the $scope
  $scope.person = person;
}
