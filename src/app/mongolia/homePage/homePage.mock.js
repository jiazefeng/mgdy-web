angular.module('mongolia.homePage.mock', [
    'ngMockE2E',
    'mongolia.common.mocksData'
])

    .run(['$httpBackend', 'mocksData', function ($httpBackend, mocksData) {
        var data = [
            {
                "menuName": "授权管理",
                "icon": "arrows-alt",
                "childMenuList": [
                    {
                        "menuName": "菜单管理",
                        "runscript": "/home/menu",
                        "menuId": "1"
                    },{
                        "menuName": "用户管理",
                        "runscript": "/home/user",
                        "menuId": "1"
                    }, {
                        "menuName": "角色管理",
                        "runscript": "/home/role",
                        "menuId": "1"
                    }
                ]
            }
        ];
        var result = mocksData.resetData(data);
        $httpBackend.whenGET('/type/typeList').respond(result);

        $httpBackend.whenGET('/webNews/getWebNewsList').passThrough();
        $httpBackend.whenGET('/webNews/getHouseInfo').passThrough();
        $httpBackend.whenGET('/webNews/getViewSpotInfo').passThrough();
        $httpBackend.whenGET('/webNews/getTouristInfoList').passThrough();
    }])