app.controller('login_ctrl' , function ($scope , $http , $q , $timeout , $interval , $sce ) {

    var api  = 'https://animusa.net/api/v1/' ;
    $scope.login = function () {

        var data = {
            email : $scope.email ,
            password : $scope.password
        }   ;

        if(data.email === undefined || data.password === undefined){
            $scope.error = 'Please fill all the fields !' ;

            return false ;
        }

        $scope.progress = true ;

        var q = $q.defer() ;

        $http.post(api+'login', data ).then(
            function (res) {
                q.resolve(res);
                console.log(res.data) ;
                if(res.data.success === false) {
                    $scope.error = res.data.message ;
                    $scope.success = undefined ;
                }
                else {
                    $scope.error = undefined ;
                    $scope.success = res.data.message ;

                    $timeout(redirectToDashboard , 1500) ;
                    
                    function redirectToDashboard() {
                          window.location.href = 'account.html' ;
                    }

                }
            }  ,
            function (reason) {
                q.reject(reason) ;
                $scope.success = undefined ;
                $scope.error = 'Something went wrong !' ;

            }
        ).catch(
            function (data) {
                q.reject(data) ;
                $scope.success = undefined ;
                $scope.error = 'Something went wrong !' ;
            }
        ).finally(
            function () {
                $scope.progress = false ;
            }
        )  ;

        return q.promise ;

    } ;

})  ;
