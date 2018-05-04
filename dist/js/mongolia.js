angular.module('mongolia.app.config', [
	'ui.router'
])


.constant('ApiBaseUrl', 'http://211.83.242.91:8080/')
// .constant('ApiBaseUrl', 'http://admapi.robot.maxrocky.com/')

.constant('AppDefaultRootUrl', '/home/homePage')
.constant('HTTP_COMMON_ERROR_MESSAGE', '服务器请求返回错误!')

//configs 
.config(['$urlRouterProvider', 'AppDefaultRootUrl', function($urlRouterProvider, AppDefaultRootUrl) {
    $urlRouterProvider.otherwise(AppDefaultRootUrl);
}])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}])


angular.module('mongoliaSupervise.app', [
    'mgcrea.ngStrap.modal',
    'ui.router',
    'ui.bootstrap',
    'mongolia.mongoliaManage'
])

    .run(['$rootScope', '$httpBackend', 'mrBookMarksService', '$state', '$http', '$filter', '$timeout', '$modal',
        function ($rootScope, $httpBackend, mrBookMarksService, $state, $http, $filter, $timeout, $modal) {
            $rootScope.bookMarks = [];
            $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
                mrBookMarksService.pushNewState($rootScope, toState);
            });
            $rootScope.nativeId=getCurrentNativeId();
            function getCurrentNativeId(){
                var str = "home/homePage";
                var href=window.location.href;
                var index = href.indexOf("home/");
                if(index != -1){
                    str = href.substring(index,href.length);
                }
                return str;
            }
        }
    ])

    .controller('AppController', ['$window', '$state',
        function ($window, $state) {

        }
    ])
angular.module('mongolia.framework.directives',[
	'mongolia.framework.directives.position',
	'mongolia.framework.directives.finishRender',
	'mongolia.framework.directives.native',
	'mongolia.framework.directives.stars'
])
angular.module('mongolia.framework',[
	'mongolia.framework.directives',
	'mongolia.framework.servers',
	'mongolia.framework.servers.bookmarks'
])


angular.module('mongolia.framework.servers',[
	'mongolia.framework.servers.math',
	'mongolia.framework.servers.cipher'
])

angular.module('mongolia.common.base64Encode', [])

.factory('Base64EncodeService', [
    function() {
        var dataCache = {};

        //下面是64个基本的编码
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
            52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        //编码的方法
        dataCache.base64encode = function(str) {
            var out, i, len;
            var c1, c2, c3;
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        }
        dataCache.base64encodeArr = function(arr) {
            var res = {};
            for (var i in arr) {
                var key = dataCache.base64encode(i);
                res[key] = dataCache.base64encode(arr[i]);
            }
            return res;
        }
        return dataCache;
    }
])
angular.module('mongolia.common',[
  	 'mongolia.common.httpTransform',
  	 'mongolia.common.httpBaseUrlSupport',
  	 'mongolia.common.httpMockBaseUrlSupport',
  	 'mongolia.common.base64Encode'
])
angular.module('mongolia.common.httpBaseUrlSupport', [
    'mongolia.app.config'
])

.config(['$provide', 'ApiBaseUrl', function($provide,ApiBaseUrl){
	function combineUrl(baseUrl,url){
		while(url.indexOf('/')===0) url=url.substring(1);
		return baseUrl+url;
	}

	$provide.decorator('$http',['$delegate', function($delegate) {
        var $http = $delegate;
 
	    var wrapper = function () {
	      	return $http.apply($http, arguments);
	    };
	 
	    Object.keys($http).filter(function (key) {
	      	return (typeof $http[key] === 'function');
	    }).forEach(function (key) {
	      	wrapper[key] = function () {
	      		var url=arguments[0];
	      		if(url.match('.tpl.html')||url.indexOf('http://')===0||url.indexOf('https://')===0){
	        		return $http[key].apply($http, arguments);
	      		}
	      		else{
	      			url=combineUrl(ApiBaseUrl,url);
	      			arguments[0]=url;
	        		return $http[key].apply($http, arguments);
	      		}
	      	};
	    });
	 
	    return wrapper;
    }]);
}])
angular.module('mongolia.common.httpMockBaseUrlSupport', [
    'ngMockE2E',
    'mongolia.app.config'
])

.config(['$provide', 'ApiBaseUrl', function($provide,ApiBaseUrl){
	function combineUrl(baseUrl,url){
		while(baseUrl.lastIndexOf('/')===baseUrl.length-1) baseUrl=baseUrl.substring(0,baseUrl.length-1);
		return baseUrl+url;
	}

	$provide.decorator('$httpBackend', ['$delegate',function($delegate) {
        var $httpBackend = $delegate;
 		var when=$httpBackend.when;
	    $httpBackend.when=function(){
	    	var url=arguments[1];
      		if(typeof url ==='string' && url.indexOf('http://')!==0 && url.indexOf('https://')!==0 && (url.indexOf('.tpl.html')===-1||url.indexOf('.tpl.html')!==url.length-9)){
      			url=combineUrl(ApiBaseUrl,url);
      			arguments[1]=url;
	      		return when.apply($httpBackend, arguments);
      		}
      		else if(url instanceof RegExp && url.source.indexOf('http:\\/\\/')!==0){
      			url=new RegExp(combineUrl(ApiBaseUrl,url.source));
      			arguments[1]=url;
	      		return when.apply($httpBackend, arguments);
      		}
      		else{
      			return when.apply($httpBackend, arguments);
      		}
	    }
	 
	    return $httpBackend;
    }]);
}])
angular.module('mongolia.common.httpTransform', [
    'mongolia.app.config'
])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('commonResponseParser');
}])

.factory('commonResponseParser', ['$rootScope','$q', 'HTTP_COMMON_ERROR_MESSAGE',
 function($rootScope,$q, HTTP_COMMON_ERROR_MESSAGE) {
    return {
        response: function(response) {
            if (!!response.config.url.match('.tpl.html'))
                return response;

            if (response.data && response.data.code === 0) {
                response.data = response.data.data;
                return response;
            } else if (response.data.msg) {
                $rootScope.$broadcast('tokenBug', [response.data.msg]);
                return $q.reject({
                    data: response.data.msg,
                    status: response.status,
                    headers: response.headers
                });
            } else {
                //alert('数据加载失败~~');
                $rootScope.$broadcast('tokenBug', ['数据加载失败']);
                return $q.reject(response);
            }
        },
        responseError: function(rejection) {
            return $q.reject(HTTP_COMMON_ERROR_MESSAGE);
        }
    };
}])
angular.module('mongolia.common.mocksData', [])

.factory('mocksData', [function() {
    return {
        resetData: function(data) {
            var result = {
                code: 0
            };
            result.data = data;
            result.msg = "";
            return result;
        }
    };
}])
/**
 * Created by Jason on 2017/6/29.
 */
angular.module('mongolia.mongoliaManage', [
    'mongolia.app.config',
    'mongolia.templates',
    'mongolia.common',
    'mongolia.framework',
    'mongolia.home',
    'mongolia.homePage',
    'mongolia.aboutUs',
    'mongolia.newsInfo',
    'mongolia.comment',
    'mongolia.houseInfo',
    'mongolia.highLife'
])
angular.module('mongolia.framework.directives.native',[
])

    .directive('native',['$rootScope',function($rootScope,$cookies){
        return{
            restrict:'A',
            link:function(scope,element,attrs){
                $(element).click(function(){
                    scope.$apply(function(){
                        $rootScope.nativeId = attrs.href;
                    });
                });
            }
        }
    }]);
angular.module('mongolia.framework.directives.finishRender',[
])

.directive('onFinishRenderFilters', ['$timeout',function ($timeout) {
	return {
		restrict: 'A',
		link: function(scope,element,attr) {
			if (scope.$last === true) {
				$timeout(function() {
				//根据controller的关系是选择$emit或者$broadcast
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	};
}])
    // .directive('onFinishRenderFilters',['$timeout', '$parse', function ($timeout, $parse) {
    //     return {
    //         restrict: 'A',
    //         link: function (scope, element, attr) {
    //             if (scope.$last === true) {
    //                 $timeout(function () {
    //                     scope.$emit('ngRepeatFinished'); //事件通知
    //                     var fun = $scope.$eval(attrs.onFinishRender);
    //                     if(fun && typeof(fun)=='function'){
    //                         fun();  //回调函数
    //                     }
    //                 });
    //             }
    //         }
    //     }
    // }])
angular.module('mongolia.framework.directives.position',[
])

.directive('mrPosition',['$parse', '$filter', function($parse, $filter){

	return {
		restrict:'C',
		scope:{
			left:"="
		},
		link: function(left, element, attrs){
			var index = attrs.index;
			// element.css('left',-8*index+'px');
		} 
	};
}])
/**
 * Created by Jason on 2017/7/11.
 */
angular.module('mongolia.framework.directives.stars', [])
    .directive('star', function () {
        return {
            template: '<ul class="rating" ng-mouseleave="leave()">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="click($index + 1)" ng-mouseover="over($index + 1)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                readonly: '@',
                onHover: '=',
                onLeave: '='
            },
            controller: function ($scope) {
                $scope.ratingValue = $scope.ratingValue || 0;
                $scope.max = $scope.max || 5;
                $scope.click = function (val) {
                    if ($scope.readonly && $scope.readonly === 'true') {
                        return;
                    }
                    $scope.ratingValue = val;
                };
                $scope.over = function (val) {
                    $scope.onHover(val);
                };
                $scope.leave = function () {
                    $scope.onLeave();
                }
            },
            link: function (scope, elem, attrs) {
                // elem.css("text-align", "center");
                var updateStars = function () {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };
                updateStars();

                scope.$watch('ratingValue', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
                scope.$watch('max', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        };
    });
angular.module('mongolia.framework.servers.bookmarks', [])


.factory('mrBookMarksService', ['mrMathService',
    function(mrMathService) {
        var bookMarks = {};
        bookMarks.pushNewState=function($rootScope,toState){
            var mmm = mrMathService.contains($rootScope.bookMarks,toState);
            if (!mmm) {//判断toState.name是否在 $rootScope.bookMarks数组里面
                // $rootScope.bookMarks.push('/home'+toState.url);
                $rootScope.bookMarks.push(toState);
            }
        }
        return bookMarks;
    }
])
angular.module('mongolia.framework.servers.cipher', [])

.factory('mrCipherService', ['CipherKey',function(CipherKey) {
	var mrCipher={};
	mrCipher.jiami=function(int){
            setMaxDigits(131); //131 => n的十六进制位数/2+3  
        var key = new RSAKeyPair("10001", '', CipherKey); //10001 => e的十六进制 
        var newPwd = encryptedString(key, int); //不支持汉字  
		return newPwd;
	}
	return mrCipher;
}])
angular.module('mongolia.framework.servers.math', [])


.factory('mrMathService', [
    function() {
        var math = {};
  
        math.contains = function(arr, obj) {
            var i = arr.length;
            while (i--) {
                if (arr[i] === obj) {
                    return true;
                }
            }
            return false;
        };

        return math;
    }
])
/**
 * Created by Jason on 2017/6/29.
 */
angular.module('mongolia.aboutUs', [
    'mongolia.aboutUs.mock',
    'ui.router'
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.aboutUs', {
            url: '/aboutUs',
            bookname: '',
            parentsname: '关于我们',
            views: {
                'content': {
                    controller: 'aboutUsController',
                    templateUrl: 'mongolia/aboutus/aboutUs.tpl.html',
                    resolve: {
                        aboutUsData: ['$http', function ($http) {
                            return $http.get('/webNews/getWebNewsList')
                        }],
                        teamData: ['$http', function ($http) {
                            return $http.get('/webNews/getTeamInfoList')
                        }]
                    }
                }
            }
        })
    }])
    .controller('aboutUsController', ['$scope', '$http', 'aboutUsData', 'teamData', function ($scope, $http, aboutUsData, teamData) {
        $scope.data = aboutUsData.data;
        $scope.teamData = teamData.data;
        $scope.isActive = 0;
        $scope.isCur = 2;
        $scope.isMove = 1;
        $('#main-slider.carousel').carousel({
            interval: 5000,
            pause: "hover"
        });
    }])
angular.module('mongolia.aboutUs.mock', [
    'ngMockE2E',
    'mongolia.common.mocksData'
])

    .run(['$httpBackend', 'mocksData', function ($httpBackend, mocksData) {
        var data = [
            {
                "menuName": "授权管理",
                "icon": "arrows-alt",
                "childMenuList": [
                    {
                        "menuName": "菜单管理",
                        "runscript": "/home/menu",
                        "menuId": "1"
                    },{
                        "menuName": "用户管理",
                        "runscript": "/home/user",
                        "menuId": "1"
                    }, {
                        "menuName": "角色管理",
                        "runscript": "/home/role",
                        "menuId": "1"
                    }
                ]
            }
        ];
        var result = mocksData.resetData(data);
        $httpBackend.whenGET('/type/typeList').respond(result);

        $httpBackend.whenGET('/webNews/getWebNewsList').passThrough();
        $httpBackend.whenGET('/webNews/getTeamInfoList').passThrough();
    }])
/**
 * Created by Jason on 2017/6/29.
 */
angular.module('mongolia.comment', [
    'mongolia.comment.mock',
    'ui.router'
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.comment', {
            url: '/comment',
            bookname: '',
            parentsname: '评论留言',
            views: {
                'content': {
                    controller: 'commentController',
                    templateUrl: 'mongolia/comment/comment.tpl.html',
                    resolve: {
                        commentData: ['$http', function ($http) {
                            return $http.get('/webNews/getMessageCommentList')
                        }]
                    }
                }
            }
        })
    }])
    .controller('commentController', ['$scope', '$http', '$modal', '$state', 'ApiBaseUrl', 'commentData',
        function ($scope, $http, $modal, $state, ApiBaseUrl, commentData) {
            $scope.data = commentData.data;

            $scope.max = 5;
            $scope.ratingVal = 1;
            $scope.readonly = false;
            $scope.onHover = function (val) {
                $scope.hoverVal = val;
            };
            $scope.onLeave = function () {
                $scope.hoverVal = null;
            }
            $scope.onChange = function (val) {
                $scope.ratingVal = val;
            }

            $scope.commitForm = function (myForm) {
                if (myForm.$valid) {
                    var params = {
                        mcUserName: $scope.data.mcUserName,
                        mcContactWay: $scope.data.mcContactWay,
                        mcGrade: $scope.ratingVal,
                        mcDescribe: $scope.data.mcDescribe
                    }
                    httpFunction('/webNews/addMessageComment', params);
                    return true;
                } else {
                    errorHint('请正确填写所有信息!!!');
                    return false;
                }
            };
            var httpFunction = function (url, params) {
                $http.post(url, params)
                    .success(function (result) {
                        if (result.error) {
                            errorHint(result.error);
                            return false;
                        } else {
                            successHint(result.success, back);
                        }
                    })
                    .error(function (msg) {
                        errorHint('网络异常，请稍后重试!!!');
                        return false;
                    });
            };
            var errorHint = function (message) {
                $modal({
                    title: '系统提示',
                    content: message,
                    show: true,
                    animation: 'am-fade-and-scale',
                    placement: 'center',
                    backdrop: false
                });
            };

            var successHint = function (message, method) {
                $modal({
                    title: '系统提示',
                    content: message,
                    show: true,
                    animation: 'am-fade-and-scale',
                    placement: 'center',
                    backdrop: false,
                    onHide: method
                });
            };
            var back = function () {
                $state.go("home.comment", {}, {reload: true});
                // $state.go("home.comment");
            };
        }])
angular.module('mongolia.comment.mock', [
    'ngMockE2E',
    'mongolia.common.mocksData'
])

    .run(['$httpBackend', 'mocksData', function ($httpBackend, mocksData) {
        var data = [
            {
                "menuName": "授权管理",
                "icon": "arrows-alt",
                "childMenuList": [
                    {
                        "menuName": "菜单管理",
                        "runscript": "/home/menu",
                        "menuId": "1"
                    },{
                        "menuName": "用户管理",
                        "runscript": "/home/user",
                        "menuId": "1"
                    }, {
                        "menuName": "角色管理",
                        "runscript": "/home/role",
                        "menuId": "1"
                    }
                ]
            }
        ];
        var result = mocksData.resetData(data);
        $httpBackend.whenGET('/type/typeList').respond(result);

        $httpBackend.whenGET('/webNews/getMessageCommentList').passThrough();
        $httpBackend.whenPOST('/webNews/addMessageComment').passThrough();
    }])
/**
 * Created by Jason on 2017/6/29.
 */
angular.module('mongolia.highLife', [
    'mongolia.highLife.mock',
    'ui.router'
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.highLife', {
            url: '/highLife',
            bookname: '',
            parentsname: '娱乐',
            views: {
                'content': {
                    controller: 'highLifeController',
                    templateUrl: 'mongolia/highLife/highLife.tpl.html',
                    resolve: {
                        viewSpotData: ['$http', function ($http) {
                            return $http.get('/webNews/getViewSpotInfo')
                        }]
                    }
                }
            }
        })
    }])
    .controller('highLifeController', ['$scope', '$http', 'viewSpotData',
        function ($scope, $http, viewSpotData) {
            $scope.viewSpotData = viewSpotData.data;
        }])
angular.module('mongolia.highLife.mock', [
    'ngMockE2E',
    'mongolia.common.mocksData'
])

    .run(['$httpBackend', 'mocksData', function ($httpBackend, mocksData) {
        var data = [
            {
                "menuName": "授权管理",
                "icon": "arrows-alt",
                "childMenuList": [
                    {
                        "menuName": "菜单管理",
                        "runscript": "/home/menu",
                        "menuId": "1"
                    },{
                        "menuName": "用户管理",
                        "runscript": "/home/user",
                        "menuId": "1"
                    }, {
                        "menuName": "角色管理",
                        "runscript": "/home/role",
                        "menuId": "1"
                    }
                ]
            }
        ];
        var result = mocksData.resetData(data);
        $httpBackend.whenGET('/type/typeList').respond(result);

        $httpBackend.whenGET('/webNews/getViewSpotInfo').passThrough();
    }])
angular.module('mongolia.home', [
    'ngAnimate',
    'ui.router',
    'mongolia.home.mock',
    'mgcrea.ngStrap.dropdown',
    'mgcrea.ngStrap.popover'
])
    //注释
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            abstract: true,
            url: '/home',
            cache: false,
            controller: 'homeController',
            templateUrl: 'mongolia/home/home.tpl.html'
        })
    }])
    .controller('homeController', ['$modal','$rootScope', '$scope', '$http', '$state', '$uibModal', '$filter','$location',
        function ($modal,$rootScope, $scope, $http, $state, $uibModal, $filter,$location) {
            $(".weixin-logo-icon").mouseleave(function () {
                $(this).prev().find(".popover").removeClass("hover");
            }).mouseenter(function () {
                $(this).prev().find(".popover").addClass("hover");
            });
            // $scope.nativeId = 'home/homePage';
            $scope.changeTab = function(type){
                $scope.nativeId = type;
            };
            // $(document).ready(function (){
            //     $('.navbar-nav > li').each(function(index){
            //         $(this).click(function(){
            //             $("li").removeClass("active");
            //             $("li").eq(index).addClass("active");
            //         });
            //     });
            // });
            // $(function(){
            //     $('.navbar-nav li').click(function(e){
            //         e.preventDefault();
            //         $(this).addClass('active').siblings().removeClass('active');
            //     });
            // });
        }])




angular.module('mongolia.home.mock', [
    'ngMockE2E',
    'mongolia.common.mocksData'
])

    .run(['$httpBackend', 'mocksData', function ($httpBackend, mocksData) {
        var data = [
            {
                "menuName": "授权管理",
                "icon": "arrows-alt",
                "childMenuList": [
                    {
                        "menuName": "菜单管理",
                        "runscript": "/home/menu",
                        "menuId": "1"
                    },{
                        "menuName": "用户管理",
                        "runscript": "/home/user",
                        "menuId": "1"
                    }, {
                        "menuName": "角色管理",
                        "runscript": "/home/role",
                        "menuId": "1"
                    }
                ]
            }
        ];
        var result = mocksData.resetData(data);
        $httpBackend.whenGET('/type/typeList').respond(result);
        var userData = {
            userName: "Admin",
            userId: "1",
        }
        var result1 = mocksData.resetData(userData);
        $httpBackend.whenGET('/user/getUserInfo').respond(result1);


        $httpBackend.whenGET(/\/user\/logout(\s\S)?/).passThrough();
        $httpBackend.whenPOST('/user/updateUserPwd').passThrough();
    }])
/**
 * Created by Jason on 2017/6/29.
 */
angular.module('mongolia.homePage', [
    'mongolia.homePage.mock',
    'ui.router'
])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.homePage', {
            url: '/homePage',
            bookname: '',
            parentsname: '网站首页',
            views: {
                'content': {
                    controller: 'homePageController',
                    templateUrl: 'mongolia/homePage/homePage.tpl.html',
                    resolve: {
                        newsData: ['$http', function ($http) {
                            return $http.get('/webNews/getWebNewsList')
                        }],
                        houseData: ['$http', function ($http) {
                            return $http.get('/webNews/getHouseInfo')
                        }],
                        viewSpotData: ['$http', function ($http) {
                            return $http.get('/webNews/getViewSpotInfo')
                        }],
                        touristData: ['$http', function ($http) {
                            return $http.get('/webNews/getTouristInfoList')
                        }]
                    }
                }
            }
        })
    }])
    .controller('homePageController', ['$scope', '$http', 'newsData', 'houseData', 'viewSpotData', 'touristData',
        function ($scope, $http, newsData, houseData, viewSpotData, touristData) {
            $scope.data = newsData.data;
            $scope.houseData = houseData.data;
            $scope.viewSpotData = viewSpotData.data;
            $scope.touristData = touristData.data;


            $scope.isActive = 0;

            $('#main-slider.carousel').carousel({
                interval: 5000,
                pause: "hover"
            });
            //页面渲染完毕，添加事件
            $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
                $(".txtMarquee-top").slide({
                    mainCell: ".infoList",
                    autoPlay: true,
                    effect: "topMarquee",
                    vis: 5,
                    interTime: 60,
                    trigger: "click"
                });

                $(".picMarquee-left").slide({
                    mainCell: ".bd ul",
                    autoPlay: true,
                    effect: "leftMarquee",
                    vis: 7,
                    interTime: 50,
                    trigger: "click"
                });
            });
        }])
angular.module('mongolia.homePage.mock', [
    'ngMockE2E',
    'mongolia.common.mocksData'
])

    .run(['$httpBackend', 'mocksData', function ($httpBackend, mocksData) {
        var data = [
            {
                "menuName": "授权管理",
                "icon": "arrows-alt",
                "childMenuList": [
                    {
                        "menuName": "菜单管理",
                        "runscript": "/home/menu",
                        "menuId": "1"
                    },{
                        "menuName": "用户管理",
                        "runscript": "/home/user",
                        "menuId": "1"
                    }, {
                        "menuName": "角色管理",
                        "runscript": "/home/role",
                        "menuId": "1"
                    }
                ]
            }
        ];
        var result = mocksData.resetData(data);
        $httpBackend.whenGET('/type/typeList').respond(result);

        $httpBackend.whenGET('/webNews/getWebNewsList').passThrough();
        $httpBackend.whenGET('/webNews/getHouseInfo').passThrough();
        $httpBackend.whenGET('/webNews/getViewSpotInfo').passThrough();
        $httpBackend.whenGET('/webNews/getTouristInfoList').passThrough();
    }])
angular.module('mongolia.houseInfo', [
    'mongolia.houseInfo.mock',
    'ui.router',
    'mongolia.app.config',
    'mgcrea.ngStrap.datepicker',
    'mgcrea.ngStrap.timepicker'
])
    .filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.houseInfo', {
            url: '/house/houseInfo/:houseId',
            bookname: '房屋详情',
            parentsname: '房屋管理',
            views: {
                'content': {
                    controller: 'houseInfoController',
                    templateUrl: 'mongolia/house/houseInfo.tpl.html',
                    resolve: {
                        houseInfoData: ['$http', '$stateParams', function ($http, $stateParams) {
                            return $http.get('/webNews/getHouseInfoById/' + $stateParams.houseId)
                        }]
                    },
                },

            }
        });
    }])
    .controller('houseInfoController', ['$modal', '$scope', '$http', 'houseInfoData', '$filter', '$stateParams', '$state', 'ApiBaseUrl',
        function ($modal, $scope, $http, houseInfoData, $filter, $stateParams, $state, ApiBaseUrl) {
            $scope.data = houseInfoData.data;

            // $scope.msg=$scope.data.newsInfo.newsContent;
            var back = function () {
                $state.go("home.homePage");
            };
        }])


angular.module('mongolia.houseInfo.mock',[
  	'ngMockE2E',
  	'mongolia.common.mocksData'
])
	.run(['$httpBackend', 'mocksData', function($httpBackend, mocksData) {
		var data = {
			contList:[
				{
					"userName":"阿斯顿",
					'role':"",
					"pwd":"",
					'img':"",
					'sex':"",
					'birthday':"",
					'mobile':"",
					'village':"",
					'post':"物管"
				}
			]
		}
		var result = mocksData.resetData(data);
		$httpBackend.whenGET(/\/user\/updateUser(\s\S)?/).respond(result);

		$httpBackend.whenGET(/\/webNews\/getHouseInfoById(\s\S)?/).passThrough();
	}])

angular.module('mongolia.newsInfo', [
    'mongolia.newsInfo.mock',
    'ui.router',
    'mongolia.app.config',
    'mgcrea.ngStrap.datepicker',
    'mgcrea.ngStrap.timepicker'
])
    .filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home.newsInfo', {
            url: '/news/newsInfo/:newsId',
            bookname: '新闻详情',
            parentsname: '新闻管理',
            views: {
                'content': {
                    controller: 'newsInfoController',
                    templateUrl: 'mongolia/news/newsInfo/newsInfo.tpl.html',
                    resolve: {
                        newsInfoData: ['$http', '$stateParams', function ($http, $stateParams) {
                            return $http.get('/webNews/getWebNewsInfoById/' + $stateParams.newsId)
                        }]
                    },
                },

            }
        });
    }])
    .controller('newsInfoController', ['$modal', '$scope', '$http', 'newsInfoData', '$filter', '$stateParams', '$state', 'ApiBaseUrl',
        function ($modal, $scope, $http, newsInfoData, $filter, $stateParams, $state, ApiBaseUrl) {
            $scope.data = newsInfoData.data;
            $scope.msg=$scope.data.newsInfo.newsContent;
            var back = function () {
                $state.go("home.homePage");
            };
            var errorHint = function (message) {
                $modal({
                    title: '系统提示',
                    content: message,
                    show: true,
                    animation: 'am-fade-and-scale',
                    placement: 'center',
                    backdrop: false
                });
            };

            var successHint = function (message, method) {
                $modal({
                    title: '系统提示',
                    content: message,
                    show: true,
                    animation: 'am-fade-and-scale',
                    placement: 'center',
                    backdrop: false,
                    onHide: method
                });
            };

            var httpFunction = function (url, params) {
                $http.post(url, params)
                    .success(function (result) {
                        if (result.error) {
                            errorHint(result.error);
                            return false;
                        } else {
                            successHint(result.success, back);
                        }
                    })
                    .error(function (msg) {
                        errorHint('网络异常，请稍后重试!!!');
                        return false;
                    });
            };

            //时间
            $scope.dateOptions = {
                maxDate: new Date(new Date().getTime()),
                minDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 365 * 100),
                startingDay: 1,
            };
            $scope.open = function (type) {
                $scope.popup.opened = true;
            };
            $scope.popup = {
                opened: false
            };
            //返回
            $scope.cancel = function () {
                $state.go("home.homePage");
            };

        }])


angular.module('mongolia.newsInfo.mock',[
  	'ngMockE2E',
  	'mongolia.common.mocksData'
])
	.run(['$httpBackend', 'mocksData', function($httpBackend, mocksData) {
		var data = {
			contList:[
				{
					"userName":"阿斯顿",
					'role':"",
					"pwd":"",
					'img':"",
					'sex':"",
					'birthday':"",
					'mobile':"",
					'village':"",
					'post':"物管"
				}
			]
		}
		var result = mocksData.resetData(data);
		$httpBackend.whenGET(/\/user\/updateUser(\s\S)?/).respond(result);

		$httpBackend.whenGET(/\/webNews\/getWebNewsInfoById(\s\S)?/).passThrough();
	}])

//# sourceMappingURL=../maps/mongolia.js.map
