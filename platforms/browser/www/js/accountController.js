app.controller('account_controller' , function ($scope , $http , $q , $timeout , $interval ) {

    var api = 'https://animusa.net/api/v1/'   ;

    $scope.userAccountInfo = {

    }   ;

    $scope.getUserAccount = function () {

           var q = $q.defer() ;
           $scope.progressOnLoad = true ;
           $http.get(api+'get-user-details').then(
               function (response) {
                     q.resolve(response) ;

                     $scope.userAccountInfo = response.data.user ;
                     console.log($scope.userAccountInfo) ;
               } ,

               function (reason) {
                   q.reject(reason) ;
                   console.log(reason) ;

                   $scope.error = true ;
                   $scope.errorOnLoad = 'Data could not be loaded ! please check your internet connection' ;
               }

           ).catch(
               function (data) {
                   q.reject(data) ;
                   $scope.error = true ;
                   $scope.errorOnLoad = 'Data could not be loaded ! please check your internet connection' ;
               }
           ).finally(
               function () {
                   $scope.progressOnLoad = false ;

               }
           ) ;

           return q.promise ;

    }


})   ;
