myApp.controller('BrowseCtrl', function($scope, $http, $ionicPopup, $rootScope, localStorageService) {


    $rootScope.loadCards = function(data) {
        var cardTypes = data;
        $scope.cards = [];

        for (i = 0; i < data.length; i++) {

            eachProduct = {
                "id": data[i].id,
                "title": data[i].title,
                "image": $(data[i].content).find('img').attr("src"),
                "realNewsURL":  $(data[i].content).find('a').attr("href")
            };

            $scope.cards.push(angular.extend({}, eachProduct));

       };
    }

    $scope.cardSwipedLeft = function(index) {
        $(".td-cards td-card:last").remove();
    }

    $scope.likedBtn = function(index) {

        $(".td-cards td-card:last").remove();
        $scope.cardSwipedRight(index);
    }

    $scope.cardSwipedRight = function(index) {


 $http.get($scope.cards[index].realNewsURL).success(function(data) {
     var  x = $(data).find("article");
     $(x).find("script").remove();

       var myPopup = $ionicPopup.show({
         subTitle: x.text(),
         scope: $scope,
         buttons: [
           { text: 'Tamam' }
         ]
       });


    console.log(x.text());

    })
    .error(function(data) {
    console.log("ERROR: " + data);
    });

        return true;
    }

    $scope.onDoubletap = function(index) {
      
    }

    $scope.cardTouch = function(index) {

    }

    $scope.onRelease = function(index) {

    }

    $scope.onTap = function(index) {
window.open($scope.cards[index].realNewsURL , '_system', 'location=yes');

    }

    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        // console.log('Card removed');
    }


    ionic.Platform.ready(function() {

    });

});

var server = "http://192.168.1.3:3000/";
