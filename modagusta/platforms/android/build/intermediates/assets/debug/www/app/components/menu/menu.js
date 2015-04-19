myApp.controller('MenuCtrl', function($scope, $http, $ionicPopup, $timeout, $rootScope, $ionicSideMenuDelegate, localStorageService) {

    $scope.genders = [
        { id: 'Tümü' , name: 'Tümü' },
        { id: false, name: 'Erkek' },
        { id: true , name: 'kadin' }
    ];

$scope.getNews= function(url){

 $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"10", "q": url } })
            .success(function(data) {
                $rootScope.loadCards(data.responseData.feed.entries);
                $ionicSideMenuDelegate.toggleLeft();
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });

}

 $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"15", "q": "http://www.anadoluhaberajans.com/rss/haber/genel.xml" } })
            .success(function(data) {
                $rootScope.loadCards(data.responseData.feed.entries);
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });



 $scope.btnGenel = function(){
      $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/genel.xml");

   };
 $scope.btnGundem = function(){
      $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/gundem.xml");
   };
    $scope.btnSpor = function(){
         $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/spor.xml");
      };
       $scope.btnAsayis = function(){
            $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/asayis_1.xml");
         };
          $scope.btnSiyaset = function(){
               $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/siyaset_1.xml");
            };
             $scope.btnEkonomi = function(){
                  $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/ekonomi_1.xml");
               };
                $scope.btnEgitim = function(){
                     $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/egitim.xml");
                  };
                   $scope.btnSaglik = function(){
                        $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/saglik.xml");
                     };
                      $scope.btnTeknoloji = function(){
                           $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/teknoloji_1.xml");
                        };
                         $scope.btnMagazin = function(){
                              $scope.getNews("http://www.anadoluhaberajans.com/rss/haber/magazin_2.xml");
                           };


});
