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

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('HomeController', function($scope, $state) {
  // For recording
  $scope.recording = false;

  $scope.record = function($state) {
    if ($scope.recording) {
      // Post the data

    }
    $scope.recording = !$scope.recording;
  }

})

.controller('ResultsController', function($scope, $http, $stateParams, $ionicPopup) {
     // When button is clicked, the popup will be shown...
    $scope.showAlert = function() {
  
      var alertPopup = $ionicPopup.alert({
        title: 'Results sent!'
      });

    
   }

  // ---- D3 ----
  $scope.vm = {};
  // ---- D3 (Options) ----
  $scope.vm.options = {  
   chart: {
    type: 'pieChart',
    height: 440,
    x: function(d){return d.key;},
    y: function(d){return d.y;},
    showLabels: false,
    duration: 500,
    labelThreshold: 0.01,
    labelSunbeamLayout: true,
    width: 400,
    title: 'E L I Z A',
    donut: true,
    tooltips: false,
    legend: {
      margin: {
        top: 20,
        right: 0,
        bottom: 20,
        left: -10
      }
    }
  }
  }
  // ---- D3 (DATA) ----
  $scope.vm.data = [  
  {
    key: "Stress",
    y: 5
  },
  {
    key: "Sad",
    y: 2
  },
  {
    key: "Impulsive",
    y: 9
  },
  {
    key: "Stubborn",
    y: 7
  },
  {
    key: "Self-Conscious",
    y: 4
  },
  {
    key: "Cheerfulness",
    y: 2
  },
  {
    key: "Pleasure",
    y: .5
  },
  {
    key: "Curiosity",
    y: 1
  }
];
})

.controller('PreviousResultsController', function($scope) {
  // TODO
})
