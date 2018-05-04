angular.module('mongolia.houseInfo.mock',[
  	'ngMockE2E',
  	'mongolia.common.mocksData'
])
	.run(['$httpBackend', 'mocksData', function($httpBackend, mocksData) {
		var data = {
			contList:[
				{
					"userName":"阿斯顿",
					'role':"",
					"pwd":"",
					'img':"",
					'sex':"",
					'birthday':"",
					'mobile':"",
					'village':"",
					'post':"物管"
				}
			]
		}
		var result = mocksData.resetData(data);
		$httpBackend.whenGET(/\/user\/updateUser(\s\S)?/).respond(result);

		$httpBackend.whenGET(/\/webNews\/getHouseInfoById(\s\S)?/).passThrough();
	}])
