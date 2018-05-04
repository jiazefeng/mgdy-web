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