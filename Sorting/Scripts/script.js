/// <reference path="angular.min.js" />

var myApp = angular.module("MyModule", []).controller("MyController", function ($scope) {
    var employees = [
        { name: 'Zenab', dateOfBirth: new Date("June 13, 1998"), gender: "Female", salary: 50000 },
        { name: 'abc', dateOfBirth: new Date("June 18, 1998"), gender: "Male", salary: 55000 },
        { name: 'xyz', dateOfBirth: new Date("June 30, 1998"), gender: "Male", salary: 30000 },
        { name: 'dfg', dateOfBirth: new Date("July 13, 1998"), gender: "Female", salary: 560000 }
    ];

    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? '.arrow_down' : '.arrow_up';
        }
        else {
            return '';
        }
    }
})