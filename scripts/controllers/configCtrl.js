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
            };

            $scope.request = {
                method: 'GET',
                url: null,
                headers: {
                    'Accept': "application/json",
                },
                data: null,
                //timeout: 2000
            };

            $scope.executeCall = function(){
                try{
                    $http($scope.request).then(function(response){
                        $scope.data = response.data;
                    }, function(error){
                        $scope.data = {
                            message: "There is an error with your request, see below",
                            error: error,
                            request: $scope.request
                        };
                    })
                }
                catch (e){
                    $scope.data = {
                        message: "There is an error with your request, see below",
                        error: e,
                        request: $scope.request
                    };
                }

            };

            $scope.executeCall();
        }
    ]
);