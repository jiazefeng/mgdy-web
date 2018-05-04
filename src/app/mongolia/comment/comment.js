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