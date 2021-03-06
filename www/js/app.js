// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.saldos', {
    url: '/saldos',
    views: {
      'menuContent': {
        templateUrl: 'templates/saldos.html',
        controller: 'SaldoCtrl'
      }
    }
  })

  .state('app.pagos', {
      url: '/pagos',
      views: {
        'menuContent': {
          templateUrl: 'templates/pagos.html'
           
        }
      }
    })

  .state('app.transferencias', {
      url: '/transferencias',
      views: {
        'menuContent': {
          templateUrl: 'templates/transferencias.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/transferencias/1',
    views: {
      'menuContent': {
        templateUrl: 'templates/transferencia_01.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.transferencias/2', {
    url: '/transferencias/2',
    views: {
      'menuContent': {
        templateUrl: 'templates/transferencia_02.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.transferencias/3', {
    url: '/transferencias/3',
    views: {
      'menuContent': {
        templateUrl: 'templates/transferencia_03.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.verificacionTransferencia1', {
    url: '/verificacionTransferencia1',
    views: {
      'menuContent': {
        templateUrl: 'templates/verificaciontransferencia_01.html'
       
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/saldos');
});
