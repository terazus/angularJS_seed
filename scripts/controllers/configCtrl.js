angular.module('appConfigCtrl', []).controller(
    'configCtrl',
    [
        '$scope',
        '$http',
        function($scope, $http) {
            /* server base URL for endpoints */
            $scope.title = "CUSTOM TITLE";

            $scope.data = {
                description: "This_is_a_description_with_removed_underscores",
                field: "This is a field"
            }
        }
    ]
);