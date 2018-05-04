angular.module('mongolia.framework.directives.finishRender',[
])

.directive('onFinishRenderFilters', ['$timeout',function ($timeout) {
	return {
		restrict: 'A',
		link: function(scope,element,attr) {
			if (scope.$last === true) {
				$timeout(function() {
				//根据controller的关系是选择$emit或者$broadcast
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	};
}])
    // .directive('onFinishRenderFilters',['$timeout', '$parse', function ($timeout, $parse) {
    //     return {
    //         restrict: 'A',
    //         link: function (scope, element, attr) {
    //             if (scope.$last === true) {
    //                 $timeout(function () {
    //                     scope.$emit('ngRepeatFinished'); //事件通知
    //                     var fun = $scope.$eval(attrs.onFinishRender);
    //                     if(fun && typeof(fun)=='function'){
    //                         fun();  //回调函数
    //                     }
    //                 });
    //             }
    //         }
    //     }
    // }])