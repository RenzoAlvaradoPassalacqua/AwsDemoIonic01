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
/*
    var apigClient = apigClientFactory.newClient({
      accessKey: 'AKIAJSFR5WJXDMOZ4BVQ',
      secretKey: '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',
      //sessionToken: 'SESSION_TOKEN', //OPTIONAL: If you are using temporary credentials you must include the session token
      region: 'us-east-2' // OPTIONAL: The region where the API is deployed, by default this parameter is set to us-east-1
      
  });
   */

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
    accessKey: '',
    secretKey: '',
    //sessionToken: 'SESSION_TOKEN', //OPTIONAL: If you are using temporary credentials you must include the session token
    region: 'us-east-2' // OPTIONAL: The region where the API is deployed, by default this parameter is set to us-east-1
});
 
    var params = {
      //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
      //TableName: 'awssynopsisiosdemo-mobilehub-1926081490-Notes'
  };
  var body = {
      //This is where you define the body of the request
      TableName:'awssynopsisiosdemo-mobilehub-1926081490-Notes'
 
  };
  var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {
         // param0: '',
         // param1: ''
        // Authorization:'AWS4-HMAC-SHA256 Credential=AKIAJSFR5WJXDMOZ4BVQ/20180703/us-east-2/execute-api/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-date, Signature=a1187d7f78ae6268a03ff597626286ab6de085122b23fb00c31e965b9bbd175a'
      },
      queryParams: {
          //param0: '',
          //param1: ''
      }
  };
  
  apigClient.consultarestexternoPost (params, body, additionalParams)
      .then(function(result){
          //This is where you would put a success callback
          console.log("consultarestexternoPost result from API Gateway ", result );

      }).catch( function(result){
          //This is where you would put an error callback
          console.log(" catch - consultarestexternoPost  ", result );
      })



  apigClient.consultasaldosAhorrosPost (params, body, additionalParams)
      .then(function(result){
          //This is where you would put a success callback
          console.log("consultasaldosAhorrosPost result from API Gateway ", result );

      }).catch( function(result){
          //This is where you would put an error callback
          console.log(" catch - consultasaldosAhorrosPost  ", result );
      })

  
  apigClient.consultasaldosAhorrosDetallePost (params, body, additionalParams)
      .then(function(result){
          //This is where you would put a success callback
          console.log("consultasaldosAhorrosDetallePost result from API Gateway ", result );

      }).catch( function(result){
          //This is where you would put an error callback
          console.log(" catch - consultasaldosAhorrosDetallePost  ", result );
      })

      var bodyTransferencia = {
        //This is where you define the body of the request
         
        TableName:'awssynopsisiosdemo-mobilehub-1926081490-Notes',
        Item:{
          'content': '#099921212',
            'saldoCont': '1232321.99',
            'noteId': '10380819-5809-43CF-9800-A47EA839E68D',
            'userId': 'us-east-2:258fd7e5-5519-49da-9b8f-cd7148a59cd5',
            'creationDate': 1528839565.919825,
            'updatedDate': 1528839671.453481,
            'title': '200999'
        }
      };
      apigClient.transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionPost (params, bodyTransferencia, additionalParams)
      .then(function(result){
          //This is where you would put a success callback
          console.log("transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionPost result from API Gateway ", result );

      }).catch( function(result){
          //This is where you would put an error callback
          console.log(" catch - transferenciasInterbancariaDiferidaOtrascuentasRealizaoperacionPost  ", result );
      })

      apigClient.transferenciasInterbancariaInmediataOptions (params, body, additionalParams)
      .then(function(result){
          //This is where you would put a success callback
          console.log("transferenciasInterbancariaInmediataOptions result from API Gateway ", result );

      }).catch( function(result){
          //This is where you would put an error callback
          console.log(" catch - transferenciasInterbancariaInmediataOptions  ", result );
      })

  })

});

 
 
  

