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

