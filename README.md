# angularjs-getstarted-pluralsight

# Learning notes
this is a notebook of following course AngularJS: Get Started By Scott Allen on pluralsight.com

## Interesting sites:

### builtwith angularjs
builtwith.angularjs.org
a collection of websites built with angularjs

### Plunker
plnkr.co
a complete web development environment hosted in browser

## Only two requirements:

### <script> tag pointing to angularjs
```
<script src="angular.js"></script>
```

### ng-app directive as an attribute added to html
```
<div ng-app>
  <!-- everything within this div is under ng-app controller control -->
</div>
```

## Controller

Controllers controll information that is put on the page or save information that user types into page
Controllers use directive `ng-controller` placed as an attribute in html on a div that it will controll

`<div ng-app>` is a directive that initialises (bootstraps) angularJS in the section, preferably in the page
`<div ng-controller>` is a directive that alows to control information in the section
`<div ng-controller="MainCtrl">` controllers can have specified names
that specifically named controller needs to be created in .js file as a function assigned to a variable of that name
```
const MainCtrl = function($scope) {
  $scope.message = 'Hello!';
}
```
AngularJS will invoke this function when it needs to create the controller to manage area of the page
When AngularJS creates that controller it can pass in a parameter to that function `$scope`
We can assign model to that `$scope` argument - so `$scope` is not a model, but things that are attached to it will be a model
in the example we assigned a single property `.message` and apponted a string `"Hello!"` to it. That makes message available to us inside html so we can data bind it into a display

### Responsibilities:
Primary responsibility of a controller is to setup a model on a $scope object
AngularJS passes $scope into controller function and then controller manipulates that $scope.
That's why controller never has to directly manipulate html - the view - it only manipulates a $scope by attaching a model. Then it uses binding expressions to move data form $scope into the view.
We can also setup methods that react to events through directive.

### Capabilities:
* multiple controllers in one html page
* complex objects
* nested controllers
* controllers can be used to manipulate attributes too `<img src="{{chart.source}}">

### $http Service
Usualy data provided to the controller are not hardcoded, instead it's fetched from server.
Communication with server is a job of `$http` service - an object with http methods (GET, PUT, POST, DELETE) to make an http calls to the server.
To access this service we need to add it as a parameter on a controller
```
var PersonController = function($scope, $http) {

}
```
Once controller is provided with this service it can make http calls to the server with `.get` method:
```
var PersonController = function($scope, $http) {
  $scope.user = $http.get("/users/783");
}
```
However $http call is asynchronous so it doesn\'t retrieve data immediately, it gives a `promise` object. That's why we add `.then` method on the promise and pass a function that will be called in the future (once the data is fetched).
```
var PersonController = function($scope, $http) {
  var promise = $http.get("/users/783");
  promise.then(function(response){
    $scope.user = response.data;
  });
}
```
that code can be shortened to a single chain of functions:
```
var PersonController = function($scope, $http) {
  $http.get("/users/783")
       .then(function(response){
         $scope.user = response.data;
       });
}
```
or even better a function that handles response is declared and passed into .then method:
```
var PersonController = function($scope, $http) {
  const onUserComplete = function(response) {
    $scope.user = response.data;
  }
  $http.get("/users/783")
       .then(onUserComplete);
}
```


