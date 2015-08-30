var app = angular.module('scroll', ['ngRoute']);

app.config( ['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/first', {
			templateUrl: 'first.html'
		})
		.when('/second', {
			templateUrl: 'second.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
		
		scope.$on(
            '$destroy',
            function handleDestroyEvent() {
                console.log( 'destroyed' );
                elm.unbind('scroll');
            }
		);
    };
});

app.controller('scrollCtrl', function($scope) {
    $scope.items = [];
	
    var counter = 0;
	
    $scope.loadMore = function() {
        for (var i = 0; i < 5; i++) {
            $scope.items.push({id: counter});
            counter += 10;
        }
    };
    //$scope.loadMore();
});
