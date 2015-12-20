app.directive('af', function() {
  return {
  	restrict: 'E',
	replace: true,
    require: 'ngModel',
  	scope: {
      'formFields': '=',
      'bindTo': '=ngModel'
    },
    templateUrl: 'partials/auto-form.html'
  };
});