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


.controller('HomeController', function($scope, $state, $http, $ionicPopup) {
  // Post
  var captureError = function(e) {
    console.log('captureError' ,e);
}

var captureSuccess = function(e) {
    console.log('captureSuccess');
    console.dir(e);
    // save the capture and send to watson
}

$scope.testPost = function() {

    var link = 'http://67a90940.ngrok.io/api/sendText';
    //var text = "I was appointed as goodwill ambassador for you and women six months ago and the more I've spoken about feminism the mall I have realized the fighting for women's rights has too often become synonymous with a man hating if there is one thing I know for certain it is thought this has still I've seen men made French oil and insecure by distorted sense of what constitutes male men don't have the benefits of equality either we don't often talk about men being imprisoned by gender stereotypes but I can see that they all and that when they are free things will change for women as a natural consequence if men don't have to be aggressive in order to be accepted";
    var text = "Good afternoon, everybody.  Seven years ago, in April of 2009, our economy lost nearly 700,000 jobs, and the unemployment rate hit 9 percent on its way to 10 percent.  Seven years later, in April 2016, our economy added 160,000 new jobs.  That makes April the 74th consecutive month of private sector job growth in America.  Over that record streak of job growth, our businesses have created 14.6 million new jobs in all. Wages have been rising at an annual rate of more than 3 percent this year.So the *unemployment rate [economy] has been growing, unemployment has been falling, and wages have been rising.  But the global economy, as many people here are aware, is not growing as fast as it should be.  You're still seeing lagging growth in places like Europe, Japan, and now China.  Here in the United States, there are folks out there who are still hurting.  And so we've got to do everything we can to strengthen the good trends and to guard against some dangerous trends in the global economy. And if the Republican Congress joined us to take some steps that are pretty common-sense, then we could put some additional wind at the backs of working Americans.To create new jobs, they should invest in our infrastructure -- our roads, our bridges, our schools, our water mains.  Some of you joined me when I went to Flint this week.  It was a great example of the kind of work that is out there to be done.  And we could be putting people all across this country back to work, with huge multiplier effects across the economy, if we started investing in the infrastructure that will make us more productive.To reward some of the hardest-working people in America, Congress should raise the minimum wage.  This is something that would not only help those individuals who are getting a bigger paycheck, but it also means they’re spending more, and that would be a boost to business.To level the playing field for American workers and crack down on unfair foreign competition, they should pass smart new trade agreements.And Congress should reform our tax code to promote growth and job creation, which includes closing wasteful loopholes and simplifying the tax code for everybody.  I've been talking about this for a while.  Only Congress can fully close the loopholes that wealthy individuals and powerful corporations all too often take advantage of, often at the expense of middle-class families.  If they’re getting out of paying their fair share of taxes, that means that the rest of us have to shoulder that burden.  And I’ve put forward plans repeatedly to do exactly that -- close loopholes, make sure that everybody is paying their fair share, which would not only give people greater confidence in the system, but would be good for our economy.  It would make sure that families and small businesses -- who don't have fancy lawyers and fancy accountants -- are being treated the same as big corporations who do.I think it's fair to say the Congress will not act on a big tax reform plan before the election that would shut down some of these loopholes.  But what my administration has been doing is to look for steps that we can take on our own to make the tax system fair.  In recent months, we’ve seen just how big a problem corruption and tax evasion have become around the globe.  We saw what happened with the release of the Panama Papers, and we've seen the degree to which both legal practices of tax avoidance that are still unfair and bad for the economy, as well as illegal practices that, in some cases, involve nefarious activities continue to exist and to spread.  So combating this kind of tax evasion and strengthening the global financial system have been priorities of mine since I took office.  And they’re part of our broader, ongoing efforts to make sure the rules aren’t rigged and our economy works for everybody. Let me give you an example.  Here at home, we’ve made our tax code fairer and asked the wealthiest Americans to start paying their fair share.  And last month, the Treasury Department took action to prevent more corporations from taking advantage of a tax loophole that let them shift their address abroad just to avoid paying taxes in America -- taxes that they rightfully owe. We’ve taken several steps to make sure that our law -- our tax laws are enforced, including leading efforts to crack down on offshore evasion.  And as a result, thousands of individuals have come forward to disclose offshore accounts and pay the taxes that they owe, along with interest and penalties.  Today, we’re building on those efforts.  And I believe that you’ve heard from Treasury, but I wanted to amplify what they’ve told you in detail.  Number one, we are requiring banks and other financial institutions to know, verify, and report who the real people are behind shell corporations that set up accounts at those institutions.  One of the main ways that companies avoid taxes, or wealthy individuals avoid taxes, is by setting up a bunch of shell corporations and making it harder to trace where monies are flowing and what taxes are owed.  We're saying to those financial institutions, you’ve got to step up and get that information.  Second, we’re plugging a gap in our tax rules that foreigners can exploit to hide their assets to evade taxes.  The Treasury Department and the IRS are issuing a proposed rule to make sure foreigners cannot hide behind anonymous shell companies formed inside the United States.  Now, these actions are going to make a difference.  They will allow us to continue to do a better job of tracking financial flows and making sure that people are paying the taxes that they owe, rather than using shell corporations and offshore accounts to avoid doing the things that ordinary Americans, hardworking Americans are doing every day, and that's making sure that they’re paying their fair share.  Having said that, we're not going to be able to complete this job unless Congress acts as well.  So I’m calling on Congress to pass new legislation that requires all companies formed inside the United States to report information about their real owners to the Treasury Department’s Financial Crimes Enforcement Network.  That’s going to help law enforcement better investigate and prevent financial crimes.  I’m calling on Congress to provide the Justice Department with additional tools to investigate corruption and money launderers.  And I’m calling on the Senate –--in particular, Senator Rand Paul, who’s been a little quirky on this issue -- to stop blocking the implementation of tax treaties that have been pending for years. And these treaties actually improve law enforcement’s ability to investigate and crack down on offshore tax evasion.  And I'm assuming that's not something that he’s in favor of.So we're going to need to cooperate internationally because tax evasion, tax avoidance, money laundering -- these things are all taking place in a global financial system, and if we can't cooperate with other countries it makes it harder for us to crack down.    If we can combine the actions that we're taking administratively with the new tools that I'm asking Congress to provide the Justice Department and Treasury, these actions will prevent tax evasion, they’ll prevent money laundering, they’ll prevent terrorist financing.  And they’ll, most importantly, uphold a fundamental principle of our economy -- in America, no matter how wealthy or powerful, you should play by the same set of rules as everybody else.  All right.  Thanks.  I'm going to take a couple questions with that.  Let’s see -- Jeff.  Yes -- since you're now the incoming president of the White House Correspondents.  (Laughter.)  Q    Thank you, sir.  Mr. President, what’s your reaction to Donald Trump becoming the presumptive nominee of the Republican Party this week?  And given the delegate math, do you think it's time for Bernie Sanders to step aside on the Democratic side?THE PRESIDENT:  Well, with respect to the Republican process and Mr. Trump, there’s going to be plenty of time to talk about his positions on various issues.  He has a long record that needs to be examined, and I think it's important for us to take seriously the statements he’s made in the past.  But most importantly -- and I speak to all of you in this room as reporters, as well as the American public -- I just want to emphasize the degree to which we are in serious times and this is a really serious job.  This is not entertainment.  This is not a reality show.  This is a contest for the presidency of the United States.  And what that means is that every candidate, every nominee needs to be subject to exacting standards and genuine scrutiny.  It means that you got to make sure that their budgets add up.  It means that if they say they got an answer to a problem that it is actually plausible and that they have details for how it would work.  And if it's completely implausible and would not work, that needs to be reported on.  The American people need to know that.  If they take a position on international issues that could threaten war, or has the potential of upending our critical relationships with other countries, or would potentially break the financial system, that needs to be reported on.And the one thing that I'm going to really be looking for over the next six months is that the American people are effectively informed about where candidates stand on the issues, what they believe, making sure that their numbers add up, making sure that their policies have been vetted and that candidates are held to what they’ve said in the past.  And if that happens, then I'm confident our democracy will work.  And that's true whether we're talking about Mr. Trump or Ms. Clinton, or Bernie Sanders, or anybody else.  But what I'm concerned about is the degree to which reporting and information starts emphasizing the spectacle and the circus, because that's not something we can afford.  And the American people, they’ve got good judgment, they’ve got good instincts, as long as they get good information.  All right?Q    And on Sanders dropping out?THE PRESIDENT:  I think on the Democratic side, let’s let the process play itself out.  You mentioned the delegate math.  I think everybody knows what that math is.  I think Senator Sanders has done an extraordinary job raising a whole range of issues that are important to Democratic voters as well as the American people, generally.  And I know that at some point there’s going to be a conversation between Secretary Clinton and Bernie Sanders about how we move towards the convention.  The good news is that despite the fact that during the course of primaries everybody starts getting a little chippy -- I've been through this, it's natural, sometimes even more with the staffs and supporters than with the candidates themselves -- the good news is, is that there’s a pretty strong consensus within the Democratic Party on the vast majority of issues.  There’s some disagreement about tactics.  There’s some disagreement about political strategy or policy nuance.  But both Secretary Clinton and Bernie Sanders believe that every American should have health care.  So do I.  Both candidates believe that we should be raising the minimum wage.  Both candidates believe that we should invest in our infrastructure and put more people back to work.  Both candidates believe that we should pass a comprehensive immigration reform policy that makes sure we're enforcing laws and improving our legal immigration system and making sure our borders are secure, but also that we continue to enjoy the incredible boost that we get from attracting talent from all around the world.  Both candidates agree that we should be prudent in terms of how we use our military and that we should care for our veterans when they come home.So if you look at 95 percent of the issues, there’s strong agreement there.  You don't see the same kinds of divisions between the two Democratic candidates that remain that you’ve been seeing in some of the Republican debates.Yes.Q    Mr. President, what do Speaker Ryan’s comments tell you about the state of the Republican Party?  And how would you advise your fellow Democrats who appear to have to now run against Donald Trump as to how they can win in November?THE PRESIDENT:  Well, I think you have to ask Speaker Ryan what the implications of his comments are.  There is no doubt that there is a debate that's taking place inside the Republican Party about who they are and what they represent.  Their standard bearer at the moment is Donald Trump.  And I think not just Republican officials, but more importantly, Republican voters are going to have to make a decision as to whether this is the guy who speaks for them and represents their values.  I think Republican women voters are going to have to decide, is that the guy I feel comfortable with in representing me and what I care about.  I think folks who, historically, have been concerned about making sure that budgets add up and that we are responsible stewards of government finances have to ask, does Mr. Trump’s budgets work.  Those are going to be questions that Republican voters, more than Republican officials have to answer.And as far as Democrats, I think we run on what we're for, not just on what we're against.";
    $http.post(link, { bodyOfText : text})

    .success(function (res){
       var alertPopup = $ionicPopup.alert({
        title: 'Recording finished! Success!'
        });
     }) 

    .error(function(data) {
       var alertPopup = $ionicPopup.alert({
        title: 'Recording finished! ERROR!'
        });
    });
} 

  // For recording
  $scope.recording = false;

  $scope.record = function($state) {
    if ($scope.recording) {
      // Post the data
      $scope.testPost();

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

  $scope.disorderpick = "";
  $scope.getDisorder = function() {
    $http.get("http://67a90940.ngrok.io/api/disorder", { params: { "key1": "value1"} })
      .success(function(data) {
            var lastitem = data.data.length-1;
            console.log("lastitem: "+ lastitem);
            $scope.disorderpick = data.data[lastitem].disorder;
            console.log("disorderpick: "+ $scope.disorderpick);
      })
      .error(function(data) {
          var alertPopup = $ionicPopup.alert({
              title: "ERROR: " + data
          });
      });
  } 

  $scope.sendTxtToDoctor = function(){
    $http.get("http://67a90940.ngrok.io/api/sendTxtdoctor",{ params: { "key1": "value1"} })
      .success(function(data) {
          console.log("sendText");
           var alertPopup = $ionicPopup.alert({
        title: 'Results sent to Doctor!'
        });
      })
      .error(function(data) {
          var alertPopup = $ionicPopup.alert({
              title: "ERROR: " + data
          });
      });
  };

    $scope.getvariables();
    $scope.getDisorder();
    
})

.controller('PreviousResultsController', function($scope) {
  // TODO
})
