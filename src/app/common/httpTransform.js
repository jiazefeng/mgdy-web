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