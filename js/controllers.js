angular.module('starter.controllers', [])
 .factory("myService",function($http){
        return {
            getImages : function(cb){
                $http({ method : "GET", url: 'images.json'}).
                    success(function(data, status) {
                        cb(data,status);
                    }).
                    error(function(data, status) {
                    });
            }
        }
    })
 .controller('AppCtrl', function($scope,$rootScope,$state,$location,$ionicLoading,$timeout,myService) {
            $ionicLoading.show();
            $scope.app={};
            
            $scope.app.menus=[
              {"name":"特价"},
              {"name":"特色"},
              {"name":"订制"},
              {"name":"租车"},
              {"name":"横跨国家"}
            ];
            
       var page = 1;
        var pageSize = 20;

       $timeout(function(){},100)
        myService.getImages(function(data){

            $scope.images = [];
            $scope.results = data.results.slice(0,page*pageSize);
            for (var i = 0; i < $scope.results.length; i++) {
                $scope.images.push($scope.results[i]);
            }
            $ionicLoading.hide();
        })
        $scope.text = "点我加载更多"
        $scope.loadMore = true;
        $scope.loadMoreData = function(){
            $scope.text = "加载中，请稍后···";
            $timeout(function(){
                page++;
                myService.getImages(function(data){
                    $scope.images = [];
                    $scope.results = data.results.slice(0,page*pageSize);
                    if ($scope.results.length == 73) {
                        $scope.text = "内容已经全部加载完毕"
                    }
                    for (var i = 0; i < $scope.results.length; i++) {
                        $scope.images.push($scope.results[i]);
                    }
                })
                $scope.text = "点我加载更多···"
            },1500);
        };
//        $scope.$on("waterfall:loadMore",function(){//滚动自动填充事件
//            $scope.loadMoreData();
//        })     
 })


 .controller('RentcarCtrl', function($scope,$rootScope,$state,$location,$timeout,myService) {
  
  })
.controller('SpecialCtrl', function($scope,$rootScope,$state,$timeout,$ionicLoading,$location,$timeout,myService) {
  
                


         $scope.rand=function(num) {
                return parseInt(Math.random() * num + 1);
            }
            $scope.randomcolor=function() {
                var str = Math.ceil(Math.random() * 16777215).toString(16);
                if (str.length < 6) {
                    str = "0" + str;
                }
                return str;
            }
        $scope.randomCloudLabel=function() {
            var obj =elementList = document.querySelectorAll(".CloudLabel a"); 
           
            for (len = obj.length, i = len; i--; ) {
                obj[i].style.left = $scope.rand(600) + "px";
                obj[i].style.top = $scope.rand(400) + "px";
                obj[i].className = "color" + $scope.rand(5);
                obj[i].style.zIndex =   $scope.rand(5);
                obj[i].style.fontSize =   $scope.rand(20) + 20 + "px";
                obj[i].style.color = "#" + $scope.randomcolor();
            }
        }
  $timeout(function(){
$scope.randomCloudLabel();    
  },10)
  
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('HomeCtrl', function($scope, $stateParams, $timeout,$location){
         $scope.timer=null;
          $scope.mark=false;
         $scope.hoverIndex=6;
         $scope.hoverIn=function(index){
          $timeout.cancel($scope.timer);
           
           $scope.hoverIndex=index;
           
           $scope.stopPropagation();
         }
         $scope.hoverOut=function(){
            $scope.timer=$timeout(function(){
              $scope.hoverIndex=6;
            },300)
            
            
         }
         $scope.linkTo=function(i){
                switch(i) {
    case 0:
        $location.path("/home/special");
        break;
    case 1:
//        code block
        break;
    case 2:
        // $location.path("/home/rentcar");
        break;
     case 3:

         $location.path("/home/rentcar");
  //      code block
        break;
    case 4:
    //    code block
        break;	
    
}
          }
         $scope.homeMenus=[
              {"name":"特价服务"},
              {"name":"特色服务"},
              {"name":"订制服务"},
              {"name":"租车服务"},
              {"name":"横跨国家"}
            ];
            
$scope.stopPropagation=function(){
       
         var e = window.event;
         e.cancelBubble = true;

         if (e.stopPropagation) e.stopPropagation();
  }

var vList = ['https://s3-us-west-2.amazonaws.com/coverr/mp4/Hey-World.mp4', 'https://s3-us-west-2.amazonaws.com/coverr/mp4/Hey-World.mp4']; // ³õÊ¼»¯²¥·ÅÁÐ±í
var vLen = vList.length; // ²¥·ÅÁÐ±íµÄ³¤¶È

var n = 0; // µ±Ç°²¥·ÅµÄÊÓÆµ


    document._video = document.getElementById("video");
  //  document.addEventListener("DOMContentLoaded", init, false);

/*myVid.muted=true;*/
$scope.stop=function(){
  if(!document._video.paused){
    document._video.pause();
    $scope.mark=true;

  }else{
    document._video.play();
    $scope.mark=false;
    $scope.hoverIndex=6;
  }
  //document._video.pause();
}

function play() {

    if(n>=vLen)n=0;
    document._video.src = vList[n];
    document._video.load(); // Èç¹û¶ÌµÄ»°£¬¿ÉÒÔ¼ÓÔØÍê³ÉÖ®ºóÔÙ²¥·Å£¬¼àÌý canplaythrough ÊÂ¼þ¼´¿É
    document._video.play();
  n++;

  //play(n);
    
}
$timeout(function(){
play(0)
},0);

document.getElementById("video").addEventListener("ended", play);
/*function myFc3() {
  play();
}*/

})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
