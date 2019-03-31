angular.module('appConfigCtrl', []).controller(
    'configCtrl',
    [
        '$scope',
        '$http',
        function($scope, $http) {
            let endpoint = "https://jsonplaceholder.typicode.com/todos/1";
            $scope.title = "AngularJS Seed";
            $scope.data = {};

            $scope.request = {
                method: 'GET',
                url: endpoint,
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