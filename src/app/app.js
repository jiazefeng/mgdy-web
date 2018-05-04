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