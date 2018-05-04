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

