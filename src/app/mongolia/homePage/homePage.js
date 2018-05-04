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