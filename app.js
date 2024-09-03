var app = angular.module('myApp', []);
app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.showAlert = function() {
        alert('Button clicked!');
    };
}]);
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });