angular.module('mongolia.home', [
    'ngAnimate',
    'ui.router',
    'mongolia.home.mock',
    'mgcrea.ngStrap.dropdown',
    'mgcrea.ngStrap.popover'
])
    //注释
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            abstract: true,
            url: '/home',
            cache: false,
            controller: 'homeController',
            templateUrl: 'mongolia/home/home.tpl.html'
        })
    }])
    .controller('homeController', ['$modal','$rootScope', '$scope', '$http', '$state', '$uibModal', '$filter','$location',
        function ($modal,$rootScope, $scope, $http, $state, $uibModal, $filter,$location) {
            $(".weixin-logo-icon").mouseleave(function () {
                $(this).prev().find(".popover").removeClass("hover");
            }).mouseenter(function () {
                $(this).prev().find(".popover").addClass("hover");
            });
            // $scope.nativeId = 'home/homePage';
            $scope.changeTab = function(type){
                $scope.nativeId = type;
            };
            // $(document).ready(function (){
            //     $('.navbar-nav > li').each(function(index){
            //         $(this).click(function(){
            //             $("li").removeClass("active");
            //             $("li").eq(index).addClass("active");
            //         });
            //     });
            // });
            // $(function(){
            //     $('.navbar-nav li').click(function(e){
            //         e.preventDefault();
            //         $(this).addClass('active').siblings().removeClass('active');
            //     });
            // });
        }])



