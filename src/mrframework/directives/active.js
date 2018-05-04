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