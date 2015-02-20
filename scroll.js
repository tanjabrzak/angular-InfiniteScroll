var app = angular.module('scroll', []);

app.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
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
