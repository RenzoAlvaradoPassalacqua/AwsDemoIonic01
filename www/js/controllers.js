angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.AccountData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    var apigClient = apigClientFactory.newClient({
      accessKey: 'AKIAID6P4WF7TRVV7NKA',
      secretKey: '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',
      //sessionToken: 'SESSION_TOKEN', //OPTIONAL: If you are using temporary credentials you must include the session token
      region: 'us-east-2' // OPTIONAL: The region where the API is deployed, by default this parameter is set to us-east-1
  });
   

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
 
 
})
 
.controller('Transferencia1Controller', function ($scope, $location) {
  $scope.query = { keywords: "" };

  console.log('doTransferir ', $scope.AccountData);
  //on form submit
  $scope.doTransferir = function () {
    if ($scope.query.keywords !== null) {
      $location.path('/app/verificacionTransferencia1');
    }
  };

  
  //on button click
  $scope.submitForm = $scope.doTransferir;
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.transferencias = [
    { title: 'Transferencias Interbancaria Diferida', id: 1 },
    { title: 'Transferencias Tipo 2', id: 2 },
    { title: 'Transferencias Tipo 3', id: 3 }
    
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SaldoCtrl', function($scope) {
  console.log('SaldoCtrl ', $scope.AccountData);
})



.controller('SaldoCtrl', function($scope, $stateParams) {
 // alert("page loaded");
 console.log('SaldoCtrl page loaded ' );

 $scope.$on("$ionicView.beforeEnter", function(event, data){
   // handle event
   console.log("beforeEnter " );
  }) 
  
  $scope.$on("$ionicView.afterEnter", function(event, data){
    // handle event
   console.log("afterEnter   " );

   var apigClient = apigClientFactory.newClient({
    accessKey: ' ',
    secretKey: ' ',
    //sessionToken: 'SESSION_TOKEN', //OPTIONAL: If you are using temporary credentials you must include the session token
    region: 'us-east-2' // OPTIONAL: The region where the API is deployed, by default this parameter is set to us-east-1
});
 
    var params = {
      //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
      TableName: 'awssynopsisiosdemo-mobilehub-1926081490-Notes'
  };
  var body = {
      //This is where you define the body of the request
  };
  var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {
         // param0: '',
         // param1: ''
      },
      queryParams: {
          //param0: '',
          //param1: ''
      }
  };
  
  apigClient.rootGet(params, body, additionalParams)
      .then(function(result){
          //This is where you would put a success callback
          console.log("rootGet result from API Gateway ", result );

      }).catch( function(result){
          //This is where you would put an error callback
      });

  })

});

 
 
  

