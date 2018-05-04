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

