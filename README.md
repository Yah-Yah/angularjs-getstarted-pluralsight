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
