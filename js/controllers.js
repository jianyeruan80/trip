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

.controller('CustomerCtrl', function($scope, $stateParams, $timeout) {
  
  $scope.shuffle=function(arr) {
    var i, 
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};
  
  
  $scope.bubble={};
  $scope.bubble.left=$scope.shuffle(['10%','20%','30%','40%','50%','60%','70%','80%','90%','15%','25%','35%','45%','55%','65%','75%','85%','48%']);
  $scope.bubble.p=$scope.shuffle([0,5,10,20,25,30,35,40,-5,-10,-20,-25,-30,-35,-40,25,30,35,40,-25,-30,-35,-40]);
  $scope.bubble.bottom=$scope.shuffle(['30%','40%','50%','60%','35%','45%','55%','30%','40%','50%','60%','35%','45%','55%','30%','40%','50%','60%','35%','45%','55%','30%','40%','50%','60%','35%','45%','55%']);
  $scope.bubble.delayTime=$scope.shuffle([3,4,5,6,1.5,2.5,3.5,4.5,5.5,6.5,0.5,,4,5,6,1.5,2.5,3.5,4.5,5.5,6.5,7,8,9,10,11]);
  $scope.bubble.showTime=$scope.shuffle([15,21,22,23,24,25,26,27,28,15,16,17,18,19,20,15,10,11,12,13,14,15,16,17,18,19,20,15,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
  $scope.bubble.size=$scope.shuffle(['5vw','6vw','7vw','5vw','6vw','7vw','5vw','6vw','7vw','8vw','9vw','5.5vw','5vw','6vw','7vw','8vw','9vw','5vw','6vw','7vw','8vw','9vw','5.5vw','4vw','5vw','6vw','7vw','8vw','9vw']);
  $scope.bubble.color=$scope.shuffle(['#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#000000']);
  $scope.bubble.fontColor=["#000","#fff",'#F44336',"#000","#03A9F4",'#F44336',"#000","#fff",'blue',"#000","#fff",'#F44336',"blue","#fff",'#F44336',"#000","#fff",'#03A9F4',"#000","#fff",'#F44336',]
  
   $timeout(
    function(){
    $scope.bubble.size=$scope.shuffle($scope.bubble.size);
    $scope.bubble.left=$scope.shuffle($scope.bubble.left); 
  $scope.bubble.color=$scope.shuffle( $scope.bubble.color);
  },20000)
})


.controller('FeatureCtrl', function($scope, $stateParams, $timeout,$location){
      $scope.gallery=[
   'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
   ]
  
    var displayTime=15;
    var cssHTML="";
   var len=$scope.gallery.length;
   $scope.gallery[len]=$scope.gallery[0];
           angular.forEach($scope.gallery,function(v,k){
                 var delayTime=parseInt(displayTime)*k;
                 cssHTML+=
                   ".anim_fade_image"+k+"{animation: fadeInOut  "+displayTime+"s "+delayTime+"s linear forwards;z-index:"+(len-k)+";}";
/*                     background-size: auto 100%;
  cursor: pointer;
  animation: panorama 10s linear infinite alternate; */
          })
    
         createStyle(cssHTML);
         
        $timeout(function(){fade(len);},50) 
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
  $location.path("/home/feature");
        break;
    case 2:
        $location.path("/home/customer");
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

     
 function createStyle(cssHTML){
   var style = document.createElement('style');
    style.type = 'text/css';
   var head = document.getElementsByTagName('head')[0];
    if(style.styleSheet){
    style.styleSheet.cssText = cssHTML;
    }else{
     style.appendChild(document.createTextNode(cssHTML));
    }
    document.getElementsByTagName('head')[0].appendChild(style); 
 }
function whichTransitionEvent(){
       var t;
       var el = document.createElement('fakeelement');
       var transitions = {
         'animation':'animationend',
         'webkitAnimation':'webkitAnimationEnd',
         'transition':'transitionend',
         'OTransition':'oTransitionEnd',
         'MozTransition':'transitionend',
         'WebkitTransition':'webkitTransitionEnd',
         
       }
       for(t in transitions){
           if( el.style[t] !== undefined ){
               return transitions[t];
           }
       }
   }
var transitionEvent = whichTransitionEvent();
 function fade(len) {
      var  elementList = document.querySelectorAll(".efg");
      var e=elementList[elementList.length-2];
    
    transitionEvent && e.addEventListener(transitionEvent, function() {
             for(var i=0;i<elementList.length;i++){
               elementList[i].classList.remove('anim_fade_image'+i);
                     (function(arg){         
                               window.setTimeout(function(){
                                 elementList[arg].classList.add('anim_fade_image'+arg);
                               },100)
                        })(i);                             
 }
              });
         
  }
