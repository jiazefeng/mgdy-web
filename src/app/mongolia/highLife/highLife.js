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