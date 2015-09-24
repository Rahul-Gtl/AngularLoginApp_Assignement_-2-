/**
 * Created by rahulkumar.solanki on 9/23/2015.
 */
var login = angular.module("login", [])
    .controller("login-controller", function ($scope) {
        $scope.loginData = {
            user_name: '',
            password: '',
            islogin:false,
            isfail:true,
            success:''
        };
        $scope.login = function () {
            if($scope.loginData.user_name=="" && $scope.loginData.password=="")
            {
                alert("Please Enter Username and password.");
                $scope.loginData.islogin=false;
                $scope.loginData.isfail=true;

            }else if($scope.loginData.user_name=="")
            {
                alert("Please Enter Username.");
                $scope.loginData.islogin=false;
                $scope.loginData.isfail=true;

            }else if ($scope.loginData.password == "") {
                alert("Please Enter Password.");
                $scope.loginData.islogin=false;
                $scope.loginData.isfail=true;

            }else if ($scope.loginData.user_name == "gtl" && $scope.loginData.password == "gtl") {
                $scope.loginData.islogin=true;
                $scope.loginData.isfail=false;
                $scope.loginData.success='Welcome '+$scope.loginData.user_name;
            } else {
                alert("invalid user.");
            }
        };
        $scope.logout = function () {
                $scope.loginData.islogin=false;
                $scope.loginData.isfail=true;
                $scope.loginData.user_name='';
                $scope.loginData.password='';
        };
    });