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

.controller('PatientsController', function($scope) {
  // TO DO
})

.controller('ResultsController', function($scope, $http, $stateParams, $ionicPopup) {

  var disorder = "";
  var Anxiety, Depression, Bipolar, ADHD, OCD = "";
  $scope.stress = 19;
  $scope.melancholy = 40; 
  $scope.impulsiveness = 36;
  $scope.uncompromising = 48;
  $scope.elfcon = 33;
  $scope.cheerfulness = 29; 
  $scope.pleasure = 57;
  $scope.curiosity = 36;
  $scope.getvariables = function() {
    $http.get("http://67a90940.ngrok.io/api/lod", { params: { "key1": "value1", "key2": "value2","key3": "value3","key4": "value4" ,"key5": "value5" ,"key6": "value6" ,"key7": "value7","key8": "value8"  } })
      .success(function(data) {
            var lastitem = data.data.length-1;
            console.log("lastitem: "+ lastitem);
            $scope.stress = data.data[lastitem].stress;
            console.log("stress: " + $scope.stress);
            $scope.melancholy = data.data[lastitem].melancholy; 
            console.log("melancholy: " + $scope.melancholy);
            $scope.impulsiveness = data.data[lastitem].impulsiveness;
            console.log("impulsiveness: " + $scope.tress);
            $scope.uncompromising = data.data[lastitem].uncompromising;
            console.log("uncompromising: " + $scope.uncompromising);
            $scope.selfcon = data.data[lastitem].selfcon;
            console.log("selfcon: " + $scope.selfcon);
            $scope.cheerfulness = data.data[lastitem].cheerfulness; 
            console.log("cheerfulness: " + $scope.cheerfulness);
            $scope.pleasure = data.data[lastitem].pleasure;
            console.log("pleasure: " + $scope.pleasure);
            $scope.curiosity = data.data[lastitem].curiosity;
            console.log("curiosity: " + $scope.curiosity );
    $scope.vm = {};
    // ---- D3 (Options) ----
    $scope.vm.options = {  
     chart: {
      type: 'pieChart',
      height: 435,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: false,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      width: 375,
      title: 'K A T H R Y N',
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
      y: $scope.stress
    },
    {
      key: "Sad",
      y: $scope.melancholy
    },
    {
      key: "Impulsive",
      y: $scope.impulsiveness
    },
    {
      key: "Stubborn",
      y: $scope.uncompromising
    },
    {
      key: "Self-Conscious",
      y: $scope.selfcon
    },
    {
      key: "Cheerfulness",
      y: $scope.cheerfulness
    },
    {
      key: "Pleasure",
      y: $scope.pleasure
    },
    {
      key: "Curiosity",
      y: $scope.curiosity
    }
  ];
      })
      .error(function(data) {
          var alertPopup = $ionicPopup.alert({
              title: "ERROR: " + data
          });
      });
    };
    $scope.getvariables();
})