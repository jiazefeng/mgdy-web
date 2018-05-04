(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/aboutus/aboutUs.tpl.html',
    '<section id="main-slider" class="carousel">\n' +
    '    <div class="carousel-inner">\n' +
    '        <div class="item" ng-repeat="slideShowInfo in data.slideShowList track by $index"\n' +
    '             ng-class="{active:isActive === $index}">\n' +
    '            <div class="container">\n' +
    '                <div class="carousel-content">\n' +
    '                    <div class="title">\n' +
    '                        <h1>{{slideShowInfo.newsTitle}}</h1>\n' +
    '                        <p class="lead"></p>\n' +
    '                    </div>\n' +
    '                    <div class="pic">\n' +
    '                        <a href="/home/news/newsInfo/{{slideShowInfo.newsId}}" style="cursor:pointer;"><img\n' +
    '                                style="width: 100%" src="{{slideShowInfo.newsImgUrl}}"\n' +
    '                                alt="{{slideShowInfo.newsTitle}}"></a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div><!--/.carousel-inner-->\n' +
    '    <a class="prev" href="#main-slider" data-slide="prev"><i class="glyphicon glyphicon-menu-left"></i></a>\n' +
    '    <a class="next" href="#main-slider" data-slide="next"><i class="glyphicon glyphicon-menu-right"></i></a>\n' +
    '</section>\n' +
    '\n' +
    '<div class="container" style="margin-bottom: 50px">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">蒙古大营服务团队</h3>\n' +
    '        <p class="line"></p>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class=" app-none" style="position:relative;">\n' +
    '            <div class="mb-describe hbox box-v-center">\n' +
    '                <div class="col-md-8" style="padding:0">\n' +
    '                    <div id="mb-ibox" class="mb-ibox ">\n' +
    '                        <div class=" animated ShowBgUp"  ng-repeat="teamInfo in teamData.teamInfoList track by $index">\n' +
    '                            <a  ng-class="{cur:isCur === $index}">\n' +
    '                                <img src="{{teamInfo.teamImageUrl}}"\n' +
    '                                     class="img-responsive" style="width: 100%">\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <!--<a class="move">-->\n' +
    '                        <!--<div class=" animated ShowBgUp"><img src="/images/xietiaozhuanyuan.jpg"-->\n' +
    '                        <!--class="img-responsive"></div>-->\n' +
    '                        <!--</a>-->\n' +
    '                        <!--<a class="cur">-->\n' +
    '                        <!--<div class=" animated ShowBgUp"><img src="/images/jiatingyisheng.jpg"-->\n' +
    '                        <!--class="img-responsive"></div>-->\n' +
    '                        <!--</a>-->\n' +
    '                        <!--<a class="">-->\n' +
    '                        <!--<div class=" animated ShowBgUp"><img src="/images/tuhuandaifu.jpg"-->\n' +
    '                        <!--class="img-responsive"></div>-->\n' +
    '                        <!--</a>-->\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div id="mb-itxt" class="col-md-4">\n' +
    '                    <div style="display: none;" class="slide-itxt"\n' +
    '                         ng-repeat="teamInfo in teamData.teamInfoList track by $index">\n' +
    '                        <div class="kePublic-rightdiv">\n' +
    '                            <div class="jiankangguwen-ico animated animateUp delay_1"></div>\n' +
    '                            <div class="tuandui-title">\n' +
    '                                <div class="animated animateUp delay_2">{{teamInfo.teamName}}</div>\n' +
    '                            </div>\n' +
    '                            <div class="kePublic-cont-info animated animateUp delay_3">\n' +
    '                                {{teamInfo.teamDescribe}}\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <!--<div style="display: none;" class="slide-itxt">-->\n' +
    '                    <!--<div class="kePublic-rightdiv">-->\n' +
    '                    <!--<div class="xietiaozhuanyuan-ico  animated animateUp delay_1"></div>-->\n' +
    '                    <!--<div class="tuandui-title">-->\n' +
    '                    <!--<div class="animated animateUp delay_2">医疗协调专员</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--<div class="kePublic-cont-info animated animateUp delay_3">-->\n' +
    '                    <!--您与家人的医疗服务协调顾问，拥有多年临床工作背景和分诊经验，给予您和家人必要的就医指导，帮助您选择适需的科室就医、获得专科医生线上预诊服务，或为您连接您所需的医疗服务-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--<div style="display: block;" class="slide-itxt">-->\n' +
    '                    <!--<div class="kePublic-rightdiv">-->\n' +
    '                    <!--<div class="jiatingyisheng-ico  animated animateUp delay_1"></div>-->\n' +
    '                    <!--<div class="tuandui-title">-->\n' +
    '                    <!--<div class="animated animateUp delay_2">途欢家庭医生</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--<div class="kePublic-cont-info animated animateUp delay_3">-->\n' +
    '                    <!--您与家人的健康守门人。解决您与家庭日常大多数的医疗需求及慢性疾病稳定期的治疗、随访与管理。在途欢健康管理平台与健康顾问支持下，协助您完成更精准，更有价值的诊疗-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--<div style="display: none;" class="slide-itxt">-->\n' +
    '                    <!--<div class="kePublic-rightdiv">-->\n' +
    '                    <!--<div class="tuhuandaifu-ico  animated animateUp delay_1"></div>-->\n' +
    '                    <!--<div class="tuandui-title">-->\n' +
    '                    <!--<div class="animated animateUp delay_2">途欢大夫</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--<div class="kePublic-cont-info animated animateUp delay_3">-->\n' +
    '                    <!--如您与家人患有慢性疾病，定期为您连接三甲医院专科医生，并评估指导您的诊疗方案。当家庭发生临床医疗需求，将为您推荐并连接最适宜的医生与专家，确保获得更优的医疗解决方案-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <ul id="mb-inav" class="mb-inav-about ">\n' +
    '                <li ng-repeat="teamInfo in teamData.teamInfoList track by $index">\n' +
    '                    <div class="item-li">\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '                <!--<li>-->\n' +
    '                <!--<div class="item-li">-->\n' +
    '                <!--</div>-->\n' +
    '                <!--</li>-->\n' +
    '                <!--<li>-->\n' +
    '                <!--<div class="item-li cur">-->\n' +
    '                <!--</div>-->\n' +
    '                <!--</li>-->\n' +
    '                <!--<li>-->\n' +
    '                <!--<div class="item-li">-->\n' +
    '                <!--</div>-->\n' +
    '                <!--</li>-->\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="app-none">\n' +
    '    <div style="background: url(/images/about-yuanjing.jpg) 50% 0%; height: 420px;">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="tuhuanyuanjing" style="text-align: center; color: rgba(255, 255, 255, 0.8)">\n' +
    '                    <figure class="thyj-logo-icon"></figure>\n' +
    '                    <p class="text-white" style="margin-top: 3.2%;">\n' +
    '                        蒙古大营，是近年升起的一颗新星。是经内蒙古自治区旅局批准。工商局正式注册，有着独立法人资格的专业旅行企业。经营许可证书：L-NMG00870。主要承受各国旅游者来蒙古大营旅游的订房、会议、商务考察、特色旅自助游等业务和所有活动。同时从事蒙古大营的旅游者到全国各地旅游。以严谨的作风、专业的操作、过硬的质量、合理的价格、优良的信誉与国内众多的旅行社、酒店、等旅游相关机构建立了良好的业务合作关系。拥有一批训练有素、经验有素、热情周到的管理人员。分别有外联部；计调部；财务部与办公室。\n' +
    '                        这支经验丰富、年轻、高素质及高度敬业精神的员工队伍。为不同行业，层次的旅游者精心设计了不同标准、等级的旅游线路，亦可根据不同要求，安排各种开拓视野的特色观光活动，为来蒙古大营草原观光的游客提供全方位的服务。\n' +
    '                        非凡之旅的宗旨；优质服务，宾客至上，真诚合作，信誉第一\n' +
    '                        旅游是艺术，旅游是文化，旅游是高品味的生活方式；一次合作，终身为友。全体员工期待着为您服务！蒙古大营草原的非凡之旅等待您的光临！</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="container">\n' +
    '\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">联系我们</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="linh25 f12">蒙古大营，以最优质的服务团体来为您服务</p>\n' +
    '    </div>\n' +
    '    <div class="row contactus">\n' +
    '        <div class="col-lg-6  small-12">\n' +
    '            <div class="tcenter contactus-item">\n' +
    '                <figure class="contact-kefu ac-figure-icon"></figure>\n' +
    '                <div>\n' +
    '                    <h4>联系客服</h4>\n' +
    '                    <p class="f12">电话：15911184548</p>\n' +
    '                    <p class="f12">邮箱：jizefeng311@qq.com</p>\n' +
    '                    <p class="f12">工作时间：09：00~18：00（周一到周日）</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div><!-- /.col-lg-4 -->\n' +
    '        <div class="col-lg-6 small-12">\n' +
    '            <div class="tcenter contactus-item">\n' +
    '                <figure class="contact-dizhi ac-figure-icon"></figure>\n' +
    '                <div>\n' +
    '                    <h4>公司地址</h4>\n' +
    '                    <p class="f12">内蒙古自治区乌兰察布察哈尔右翼中旗辉腾锡勒草原</p>\n' +
    '                    <p class="f12">邮编：013550</p>\n' +
    '                    <!--<p class="f12">传真：028-83226095</p>-->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div><!-- /.col-lg-4 -->\n' +
    '    </div>\n' +
    '    <div class="gray-line"></div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/comment/comment.tpl.html',
    '<div class="container">\n' +
    '    <div class="app-none">\n' +
    '        <div class="title-comm">\n' +
    '            <h3 class="welinain">反馈意见</h3>\n' +
    '            <p class="line"></p>\n' +
    '            <p class="mtop40 mb8">感谢体验蒙古大营服务</p>\n' +
    '            <p class="linh25">您宝贵的建议是蒙古大营前进的动力，我们期待您的反馈和建议</p>\n' +
    '        </div>\n' +
    '        <div class="feedback">\n' +
    '            <div class="feedback-l">\n' +
    '                <img src="/images/wKgB4lIv_2SAOsFdAAgp4rhW_PU39.jpeg" class="img-responsive">\n' +
    '            </div>\n' +
    '            <form class="form-horizontal" name="myForm" ng-submit="commitForm(myForm);">\n' +
    '                <div class="feedback-r">\n' +
    '                    <div class="feedback-submit-con">\n' +
    '                        <input type="text" class="inputdiv form-control" ng-model="data.mcUserName" required\n' +
    '                               ng-required="true"\n' +
    '                               placeholder="请输入您的名称"/>\n' +
    '                        <input type="text" class="inputdiv form-control" ng-model="data.mcContactWay" required\n' +
    '                               ng-required="true"\n' +
    '                               placeholder="请输入邮箱或电话号码，便于我们联系您"/>\n' +
    '                        <div star rating-value="ratingVal" max="max" on-hover="onHover" on-leave="onLeave" readonly="{{readonly}}" style="margin-bottom: 10px"></div>\n' +
    '                        <!--<div>-->\n' +
    '                            <!--Max: <input type="number" name="input" ng-model="max" min="0" max="99" required>-->\n' +
    '                            <!--<p>current value: {{ratingVal}}</p>-->\n' +
    '                            <!--<p>hover on : {{hoverVal?hoverVal:"none"}}</p>-->\n' +
    '                            <!--<p>readonly : <input type="checkbox"-->\n' +
    '                                                 <!--ng-model="readonly"></p>-->\n' +
    '                        <!--</div>-->\n' +
    '                        <textarea class="form-control" ng-model="data.mcDescribe" required ng-required="true"\n' +
    '                                  placeholder="请输入您的建议与评价"></textarea>\n' +
    '                        <button type="submit" class="btn btn-primary btn-sm width100">提交</button>\n' +
    '                        <button type="reset" class="btn btn-default btn-sm width100 ml15">重置</button>\n' +
    '                        <!--<a href="javascript:AddFeedback()" id="btn-submit" class="global-btn" data-submit="1">提交</a>-->\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="clearfix"></div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="container">\n' +
    '    <div class="demoBox ">\n' +
    '        <div name="effect10" id="effect10" class="hd"><h3><span>游客.</span>反馈记录</h3></div>\n' +
    '        <div class="bd">\n' +
    '            <div class="txtMarquee-top" style="margin-bottom: 10px" ng-repeat="messageComment in data.messageComment">\n' +
    '                <div star rating-value="messageComment.mcGrade" max="max" on-hover="onHover" on-leave="onLeave" readonly="true" ></div>\n' +
    '                <div style="margin-left: 10px">\n' +
    '                    <h3>\n' +
    '                        <span style="margin-right: 20px"><b>{{messageComment.mcUserName}}</b></span>\n' +
    '                        {{messageComment.createOn| date:\'yyyy-MM-dd HH:mm:ss\'}}\n' +
    '                    </h3>\n' +
    '                </div>\n' +
    '                <div style="margin-left: 140px;margin-top: 5px;">\n' +
    '                    <span style="font-size: 14px"><b>详情：</b>{{messageComment.mcDescribe}}</span>\n' +
    '                </div>\n' +
    '                <div style="margin-left: 170px;margin-top: 20px;margin-bottom: 10px">\n' +
    '                    <span style="color: #f09"><b>回复：</b>{{messageComment.reply}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div><!-- bd E -->\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/homePage/homePage.tpl.html',
    '<section id="main-slider" class="carousel">\n' +
    '    <div class="carousel-inner">\n' +
    '        <!--<div  ng-repeat="slideShowInfo in data.slideShowList track by $index">-->\n' +
    '        <div class="item" ng-repeat="slideShowInfo in data.slideShowList track by $index"\n' +
    '             ng-class="{active:isActive === $index}">\n' +
    '            <div class="container">\n' +
    '                <div class="carousel-content">\n' +
    '                    <div class="title">\n' +
    '                        <h1>{{slideShowInfo.newsTitle}}</h1>\n' +
    '                        <p class="lead"></p>\n' +
    '                    </div>\n' +
    '                    <div class="pic">\n' +
    '                        <a href="/home/news/newsInfo/{{slideShowInfo.newsId}}" style="cursor:pointer;"><img\n' +
    '                                style="width: 100%" src="{{slideShowInfo.newsImgUrl}}"\n' +
    '                                alt="{{slideShowInfo.newsTitle}}"></a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!--</div>-->\n' +
    '        <!--/.item-->\n' +
    '        <!--<div class="item active">-->\n' +
    '        <!--<div class="container">-->\n' +
    '        <!--<div class="carousel-content">-->\n' +
    '\n' +
    '        <!--<div class="title">-->\n' +
    '        <!--<h1>自主软件研发、大数据、金融服务、IT技术培训。</h1>-->\n' +
    '        <!--<p class="lead"></p>-->\n' +
    '        <!--</div>-->\n' +
    '        <!--<div class="pic"><img src="../../../images/ppt1.jpg" alt="成都小风车科技有限公司－立足新起点，开创新局面。"></div>-->\n' +
    '\n' +
    '        <!--</div>-->\n' +
    '        <!--</div>-->\n' +
    '        <!--</div>&lt;!&ndash;/.item&ndash;&gt;-->\n' +
    '    </div><!--/.carousel-inner-->\n' +
    '    <a class="prev" href="#main-slider" data-slide="prev"><i class="glyphicon glyphicon-menu-left"></i></a>\n' +
    '    <a class="next" href="#main-slider" data-slide="next"><i class="glyphicon glyphicon-menu-right"></i></a>\n' +
    '</section>\n' +
    '<div class="container">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">关于旅行</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="mtop40">真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚弱</p>\n' +
    '        <p class="linh25">正因如此，旅行并不仅仅是去看风景，更难的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="container" style="margin-bottom: 50px">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">我们的景点</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="mtop40">\n' +
    '            没有到过草原，你就不能明了“天苍苍，野茫茫，风吹草低见牛羊”的那份寥廓和深远；没有到过草原，你就不知道‘天穹压落、云欲擦肩’的那份豪迈和洒脱；没有到过草原，你就永远不能体会在大自然的雄奇和伟大面前，你的灵魂是一种怎样地颤动和震撼！</p>\n' +
    '        <p class="linh25">\n' +
    '            夏日的辉腾锡勒草原弥漫着花草清香。蓝天白云，暖暖的阳光照在身上，一切都那么美好。当你静静躺在秀美的草原之上，耳畔传来远处悠扬的马头琴声，犹如天籁，往日的烦躁在这一刻烟消云散。在绿色的大海之上心情是如此恬静，这里会是你永远心驰神往的地方。</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class=" app-none" style="position:relative;">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-12">\n' +
    '                <div class="col-lg-4" style="text-align: -webkit-center;"\n' +
    '                     ng-repeat="viewspot in viewSpotData.viewSpotInfoList | limitTo: 12">\n' +
    '                    <span class="imageUrl" style="background:url({{viewspot.viewSpotImageUrl}}) no-repeat center center;background-size:cover;">\n' +
    '                         <!--<img src="{{viewspot.viewSpotImageUrl}}">-->\n' +
    '                    </span>\n' +
    '                    <p style="text-align: -webkit-center;">{{viewspot.viewSpotTitle}}</p>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="clearfix"></div>\n' +
    '</div>\n' +
    '<div class="container" style="margin-bottom: 50px">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">我们的住宿</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="mtop40">蒙古包，蒙语里包即为家的意思，蒙古包自匈奴时代起沿用至今，从蒙古族的实用型建筑，演化成了今天的景观型建筑，蒙古包是蒙族文化的象征。</p>\n' +
    '        <p class="linh25">蒙古包顶部呈圆拱形，不仅起到了大方美观的作用，而且在雨雪天气包顶不易积水，且圆拱形坚固耐用，可抗八九级大风，且蒙古包易搭建和拆卸，满足了古代的战争需求。</p>\n' +
    '        <p class="linh25">蒙族人的搭建的蒙古包有特制的木架做“哈那”，即外部围栏支撑，围上多层羊毛毡，蒙古包的羊毛毡取自羊身上最柔软的毛，经过多人千次的捶打制成，具有很好的耐寒性和保湿性。</p>\n' +
    '        <p class="linh25">蒙古包顶部开有窗户，易于采光和通风，蒙古包的门开向东南方向，有效地避免了西伯利亚寒流的侵蚀。</p>\n' +
    '        <p class="linh25">素来具有高超模仿能力的中国人在蒙古包的发展上有了更深的造诣，今天的蒙古包已经不仅仅是御寒的作用了，更朝着美观大方、舒适耐用、多元化的方向发展。\n' +
    '            蒙古包的支撑结构首先发生了革命性的变化，由木质结构逐步演变为钢架支撑，钢架不仅在价格上便宜，而且更坚固耐用，木料比钢架也更易于腐蚀。\n' +
    '            其次外部采用了保暖性更好的防雨帆布，内部围上多层羊毛毡在配上明黄色考究的装饰，给人一种舒适感，在夜晚温度下降的坝上草原也起到了很好的保暖效果。</p>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class=" app-none" style="position:relative;">\n' +
    '            <div class="mb-describe hbox box-v-center">\n' +
    '                <div class="col-md-8" style="padding:0">\n' +
    '                    <div id="mb-ibox" class="mb-ibox ">\n' +
    '                        <div class=" animated ShowBgUp" ng-if="houseData.lucuryHouse">\n' +
    '                            <a class="" href="/home/house/houseInfo/{{houseData.lucuryHouse.houseId}}"\n' +
    '                               style="cursor:pointer;">\n' +
    '                                <img src="{{houseData.lucuryHouse.houseImge}}" class="img-responsive"\n' +
    '                                     style="width: 100%">\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                        <div class=" animated ShowBgUp" ng-if="houseData.highgradeHouse">\n' +
    '                            <a class="move" href="/home/house/houseInfo/{{houseData.highgradeHouse.houseId}}"\n' +
    '                               style="cursor:pointer;">\n' +
    '                                <img src="{{houseData.highgradeHouse.houseImge}}" class="img-responsive"\n' +
    '                                     style="width: 100%">\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                        <div class=" animated ShowBgUp" ng-if="houseData.comfortableHouse">\n' +
    '                            <a class="cur" href="/home/house/houseInfo/{{houseData.comfortableHouse.houseId}}"\n' +
    '                               style="cursor:pointer;">\n' +
    '                                <img src="{{houseData.comfortableHouse.houseImge}}" class="img-responsive"\n' +
    '                                     style="width: 100%">\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                        <div class=" animated ShowBgUp" ng-if="houseData.economicsHouse">\n' +
    '                            <a class="" href="/home/house/houseInfo/{{houseData.economicsHouse.houseId}}"\n' +
    '                               style="cursor:pointer;">\n' +
    '                                <img src="{{houseData.economicsHouse.houseImge}}" class="img-responsive"\n' +
    '                                     style="width: 100%">\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div id="mb-itxt" class="col-md-4">\n' +
    '                    <div style="display: none;" class="slide-itxt" ng-if="houseData.lucuryHouse">\n' +
    '                        <div class="kePublic-rightdiv">\n' +
    '                            <div class="jiankangguwen-ico animated animateUp delay_1"></div>\n' +
    '                            <div class="tuandui-title">\n' +
    '                                <div class="animated animateUp delay_2">{{houseData.lucuryHouse.houseType}}</div>\n' +
    '                            </div>\n' +
    '                            <div class="kePublic-cont-info animated animateUp delay_3">\n' +
    '                                {{houseData.lucuryHouse.houseDescribe}}\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div style="display: none;" class="slide-itxt" ng-if="houseData.highgradeHouse">\n' +
    '                        <div class="kePublic-rightdiv">\n' +
    '                            <div class="xietiaozhuanyuan-ico  animated animateUp delay_1"></div>\n' +
    '                            <div class="tuandui-title">\n' +
    '                                <div class="animated animateUp delay_2">{{houseData.highgradeHouse.houseType}}</div>\n' +
    '                            </div>\n' +
    '                            <div class="kePublic-cont-info animated animateUp delay_3">\n' +
    '                                {{houseData.highgradeHouse.houseDescribe}}\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div style="display: block;" class="slide-itxt" ng-if="houseData.comfortableHouse">\n' +
    '                        <div class="kePublic-rightdiv">\n' +
    '                            <div class="jiatingyisheng-ico  animated animateUp delay_1"></div>\n' +
    '                            <div class="tuandui-title">\n' +
    '                                <div class="animated animateUp delay_2">{{houseData.comfortableHouse.houseType}}</div>\n' +
    '                            </div>\n' +
    '                            <div class="kePublic-cont-info animated animateUp delay_3">\n' +
    '                                {{houseData.comfortableHouse.houseDescribe}}\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div style="display: none;" class="slide-itxt" ng-if="houseData.economicsHouse">\n' +
    '                        <div class="kePublic-rightdiv">\n' +
    '                            <div class="tuhuandaifu-ico  animated animateUp delay_1"></div>\n' +
    '                            <div class="tuandui-title">\n' +
    '                                <div class="animated animateUp delay_2">{{houseData.economicsHouse.houseType}}</div>\n' +
    '                            </div>\n' +
    '                            <div class="kePublic-cont-info animated animateUp delay_3">\n' +
    '                                {{houseData.economicsHouse.houseDescribe}}\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <ul id="mb-inav" class="mb-inav-about ">\n' +
    '                <li ng-if="houseData.lucuryHouse">\n' +
    '                    <div class="item-li"></div>\n' +
    '                </li>\n' +
    '                <li ng-if="houseData.highgradeHouse">\n' +
    '                    <div class="item-li"></div>\n' +
    '                </li>\n' +
    '                <li ng-if="houseData.comfortableHouse">\n' +
    '                    <div class="item-li cur"></div>\n' +
    '                </li>\n' +
    '                <li ng-if="houseData.economicsHouse">\n' +
    '                    <div class="item-li"></div>\n' +
    '                </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="container">\n' +
    '    <div id="txtMarquee-top" class="demoBox ">\n' +
    '        <div name="effect10" id="effect10" class="hd"><h3><span></span>新闻</h3></div>\n' +
    '        <div class="bd">\n' +
    '            <div class="txtMarquee-top">\n' +
    '                <div class="hd">\n' +
    '                    <a class="next"></a>\n' +
    '                    <a class="prev"></a>\n' +
    '                </div>\n' +
    '                <div class="bd">\n' +
    '                    <ul class="infoList">\n' +
    '                        <li ng-repeat="newsInfo in data.newsList" on-finish-render-filters>\n' +
    '                            <span class="date">{{newsInfo.createDate}}</span>\n' +
    '                            <a href="/home/news/newsInfo/{{newsInfo.newsId}}">{{newsInfo.newsTitle}}</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                    <!--<ul class="infoList">-->\n' +
    '                    <!--<li>-->\n' +
    '                    <!--<span class="date">2011-11-11</span>-->\n' +
    '                    <!--<a href="http://www.SuperSlide2.com" target="_blank">中国打破了世界软件巨头规则</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--<li><span class="date">2011-11-11</span><a href="http://www.SuperSlide2.com" target="_blank">口语：会说中文就能说英语！</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--<li><span class="date">2011-11-11</span><a href="http://www.SuperSlide2.com" target="_blank">农场摘菜不如在线学外语好玩</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--<li><span class="date">2011-11-11</span><a href="http://www.SuperSlide2.com" target="_blank">数理化老师竟也看学习资料？</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--<li><span class="date">2011-11-11</span><a href="http://www.SuperSlide2.com" target="_blank">学英语送ipad2,45天突破听说</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--<li><span class="date">2011-11-11</span><a href="http://www.SuperSlide2.com" target="_blank">学外语，上北外！</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--<li><span class="date">2011-11-11</span><a href="http://www.SuperSlide2.com" target="_blank">那些无法理解的荒唐事</a>-->\n' +
    '                    <!--</li>-->\n' +
    '                    <!--</ul>-->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div><!-- bd E -->\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="container">\n' +
    '    <div id="picMarquee-left" class="demoBox  demoBoxEven">\n' +
    '        <div name="effect5" id="effect5" class="hd"><h3><span>游客足迹.</span>感谢一路陪伴</h3></div>\n' +
    '        <div class="bd">\n' +
    '            <div class="picMarquee-left">\n' +
    '                <div class="hd">\n' +
    '                    <a class="next"></a>\n' +
    '                    <a class="prev"></a>\n' +
    '                </div>\n' +
    '                <div class="bd" style="text-align: -webkit-center;">\n' +
    '                    <ul class="picList">\n' +
    '                        <li ng-repeat="touristInfo in touristData.touristInfoList" on-finish-render-filters>\n' +
    '                            <div class="pic"><a href="#"><img\n' +
    '                                    src="{{touristInfo.touristImageUrl}}"/></a></div>\n' +
    '                            <div class="title"><a href="#">{{touristInfo.touristName}}</a>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                        <!--<li>-->\n' +
    '                        <!--<div class="pic"><a href="http://www.SuperSlide2.com" target="_blank"><img-->\n' +
    '                        <!--src="../images/pic2.jpg"/></a></div>-->\n' +
    '                        <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图2</a></div>-->\n' +
    '                        <!--</li>-->\n' +
    '                        <!--<li>-->\n' +
    '                        <!--<div class="pic"><a href="http://www.SuperSlide2.com" target="_blank"><img-->\n' +
    '                        <!--src="../images/pic3.jpg"/></a></div>-->\n' +
    '                        <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图3</a></div>-->\n' +
    '                        <!--</li>-->\n' +
    '                        <!--<li>-->\n' +
    '                        <!--<div class="pic"><a href="http://www.SuperSlide2.com" target="_blank"><img-->\n' +
    '                        <!--src="../images/pic4.jpg"/></a></div>-->\n' +
    '                        <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图4</a></div>-->\n' +
    '                        <!--</li>-->\n' +
    '                        <!--<li>-->\n' +
    '                        <!--<div class="pic"><a href="http://www.SuperSlide2.com" target="_blank"><img-->\n' +
    '                        <!--src="../images/pic5.jpg"/></a></div>-->\n' +
    '                        <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图5</a></div>-->\n' +
    '                        <!--</li>-->\n' +
    '                        <!--<li>-->\n' +
    '                        <!--<div class="pic"><a href="http://www.SuperSlide2.com" target="_blank"><img-->\n' +
    '                        <!--src="../images/pic6.jpg"/></a></div>-->\n' +
    '                        <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图6</a></div>-->\n' +
    '                        <!--</li>-->\n' +
    '                        <!--<li>-->\n' +
    '                        <!--<div class="pic"><a href="http://www.SuperSlide2.com" target="_blank"><img-->\n' +
    '                        <!--src="../images/pic7.jpg"/></a></div>-->\n' +
    '                        <!--<div class="title"><a href="http://www.SuperSlide2.com" target="_blank">效果图7</a></div>-->\n' +
    '                        <!--</li>-->\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div><!-- bd E -->\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/home/home.tpl.html',
    '<header id="header">\n' +
    '    <div class="container" role="banner">\n' +
    '        <div id="navbar" class="navbar-default navbar">\n' +
    '            <div class="navbar-header">\n' +
    '                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
    '                    <span class="sr-only">切换导航</span>\n' +
    '                    <span class="icon-bar"></span>\n' +
    '                    <span class="icon-bar"></span>\n' +
    '                    <span class="icon-bar"></span>\n' +
    '                </button>\n' +
    '                <a class="navbar-brand" href="/" title="蒙古大营"></a>\n' +
    '            </div>\n' +
    '            <div class="collapse navbar-collapse">\n' +
    '                <ul class="nav navbar-nav navbar-right">\n' +
    '                    <li ng-class="{active:nativeId==\'home/homePage\'}"><a native  href="/home/homePage" ng-click="changeTab(\'home/homePage\')"><i class="glyphicon glyphicon-home"></i>&nbsp;网站首页</a></li>\n' +
    '                    <li ng-class="{active:nativeId==\'home/highLife\'}"><a native  href="/home/highLife" ng-click="changeTab(\'home/highLife\')">吃喝玩乐</a></li>\n' +
    '                    <li ng-class="{active:nativeId==\'home/comment\'}"><a native  href="/home/comment" ng-click="changeTab(\'home/comment\')">评论留言</a></li>\n' +
    '                    <li ng-class="{active:nativeId==\'home/aboutUs\'}"><a native  href="/home/aboutUs" ng-click="changeTab(\'home/aboutUs\')">关于我们</a></li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>\n' +
    '<div class="mr-homeNav">\n' +
    '    <div class="mrCont">\n' +
    '        <!--<div class="seat hidden-xs hidden-sm">您当前的位置是：{{nowParentname}}-->\n' +
    '            <!--<span ng-if="nowstatename"> > {{nowstatename}}</span>-->\n' +
    '        <!--</div>-->\n' +
    '        <div ui-view="content"></div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<footer>\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="ac-gf-footer-legal">\n' +
    '                <!--<div class="footer-legal-links">-->\n' +
    '                    <!--<a href="/home/news">大营动态</a>-->\n' +
    '                    <!--<div class="bor-line"></div>-->\n' +
    '                    <!--<a href="/joinus/">加入我们</a>-->\n' +
    '                    <!--<div class="bor-line"></div>-->\n' +
    '                    <!--<a href="/customres/">企业用户</a>-->\n' +
    '                    <!--<div class="bor-line"></div>-->\n' +
    '                    <!--<a href="/useragreement/" class="nob">用户使用协议</a>-->\n' +
    '                <!--</div>-->\n' +
    '                <div class="footer-beizhu">Copyright © 2017 北京宏锋信息科技有限公司 京ICP备1526311707号-1</div>\n' +
    '            </div>\n' +
    '            <div class="footer-weixin">\n' +
    '                <div class="bt-example-popover">\n' +
    '                    <div class="popover top">\n' +
    '                        <div class="arrow"></div>\n' +
    '                        <div style="padding: 7px">\n' +
    '                            <figure class="erweima-logo-icon"></figure>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <figure class="weixin-logo-icon"></figure>\n' +
    '            </div>\n' +
    '            <!--<div class="footer-weixin">-->\n' +
    '                <!--<div class="bt-example-popover">-->\n' +
    '                    <!--<div class="popover top">-->\n' +
    '                        <!--<div class="arrow"></div>-->\n' +
    '                        <!--<div style="padding: 7px">-->\n' +
    '                            <!--<figure class="erweimaapp-logo-icon"></figure>-->\n' +
    '                        <!--</div>-->\n' +
    '                    <!--</div>-->\n' +
    '                <!--</div>-->\n' +
    '                <!--<figure class="shouji-logo-icon"></figure>-->\n' +
    '            <!--</div>-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/highLife/highLife.tpl.html',
    '<div class="container" style="margin-bottom: 50px">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">我们的美景</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="mtop40">\n' +
    '            没有到过草原，你就不能明了“天苍苍，野茫茫，风吹草低见牛羊”的那份寥廓和深远；没有到过草原，你就不知道‘天穹压落、云欲擦肩’的那份豪迈和洒脱；没有到过草原，你就永远不能体会在大自然的雄奇和伟大面前，你的灵魂是一种怎样地颤动和震撼！</p>\n' +
    '        <p class="linh25">\n' +
    '            夏日的辉腾锡勒草原弥漫着花草清香。蓝天白云，暖暖的阳光照在身上，一切都那么美好。当你静静躺在秀美的草原之上，耳畔传来远处悠扬的马头琴声，犹如天籁，往日的烦躁在这一刻烟消云散。在绿色的大海之上心情是如此恬静，这里会是你永远心驰神往的地方。</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class=" app-none" style="position:relative;">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-12" style="margin-bottom: 30px" ng-repeat="viewspot in viewSpotData.viewSpotInfoList | limitTo: 12">\n' +
    '                <div class="col-lg-4" style="text-align: -webkit-center;">\n' +
    '                        <span class="imageUrl" style="background:url({{viewspot.viewSpotImageUrl}}) no-repeat center center;background-size:cover;">\n' +
    '                            <!--<img src="{{viewspot.viewSpotImageUrl}}">-->\n' +
    '                        </span>\n' +
    '                    <p style="text-align: -webkit-center;">{{viewspot.viewSpotTitle}}</p>\n' +
    '                </div>\n' +
    '                <div class="col-lg-8">\n' +
    '                    <span>{{viewspot.viewSpotDescribe}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="clearfix"></div>\n' +
    '</div>\n' +
    '<div class="container" style="margin-bottom: 50px">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">我们的美食</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="mtop40">蒙古包，蒙语里包即为家的意思，蒙古包自匈奴时代起沿用至今，从蒙古族的实用型建筑，演化成了今天的景观型建筑，蒙古包是蒙族文化的象征。</p>\n' +
    '        <p class="linh25">蒙古包顶部呈圆拱形，不仅起到了大方美观的作用，而且在雨雪天气包顶不易积水，且圆拱形坚固耐用，可抗八九级大风，且蒙古包易搭建和拆卸，满足了古代的战争需求。</p>\n' +
    '        <p class="linh25">蒙族人的搭建的蒙古包有特制的木架做“哈那”，即外部围栏支撑，围上多层羊毛毡，蒙古包的羊毛毡取自羊身上最柔软的毛，经过多人千次的捶打制成，具有很好的耐寒性和保湿性。</p>\n' +
    '        <p class="linh25">蒙古包顶部开有窗户，易于采光和通风，蒙古包的门开向东南方向，有效地避免了西伯利亚寒流的侵蚀。</p>\n' +
    '        <p class="linh25">素来具有高超模仿能力的中国人在蒙古包的发展上有了更深的造诣，今天的蒙古包已经不仅仅是御寒的作用了，更朝着美观大方、舒适耐用、多元化的方向发展。\n' +
    '            蒙古包的支撑结构首先发生了革命性的变化，由木质结构逐步演变为钢架支撑，钢架不仅在价格上便宜，而且更坚固耐用，木料比钢架也更易于腐蚀。\n' +
    '            其次外部采用了保暖性更好的防雨帆布，内部围上多层羊毛毡在配上明黄色考究的装饰，给人一种舒适感，在夜晚温度下降的坝上草原也起到了很好的保暖效果。</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class=" app-none" style="position:relative;">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-12" style="margin-bottom: 30px" ng-repeat="food in viewSpotData.foodInfoList | limitTo: 12">\n' +
    '                <div class="col-lg-4" style="text-align: -webkit-center;">\n' +
    '                        <span class="imageUrl" style="background:url({{food.viewSpotImageUrl}}) no-repeat center center;background-size:cover;">\n' +
    '                            <!--<img src="{{viewspot.viewSpotImageUrl}}">-->\n' +
    '                        </span>\n' +
    '                    <p style="text-align: -webkit-center;">{{food.viewSpotTitle}}</p>\n' +
    '                </div>\n' +
    '                <div class="col-lg-8">\n' +
    '                    <span>{{food.viewSpotDescribe}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="clearfix"></div>\n' +
    '</div>\n' +
    '<div class="container" style="margin-bottom: 50px">\n' +
    '    <div class="title-comm">\n' +
    '        <h3 class="welinain">我们的娱乐</h3>\n' +
    '        <p class="line"></p>\n' +
    '        <p class="mtop40">\n' +
    '            没有到过草原，你就不能明了“天苍苍，野茫茫，风吹草低见牛羊”的那份寥廓和深远；没有到过草原，你就不知道‘天穹压落、云欲擦肩’的那份豪迈和洒脱；没有到过草原，你就永远不能体会在大自然的雄奇和伟大面前，你的灵魂是一种怎样地颤动和震撼！</p>\n' +
    '        <p class="linh25">\n' +
    '            夏日的辉腾锡勒草原弥漫着花草清香。蓝天白云，暖暖的阳光照在身上，一切都那么美好。当你静静躺在秀美的草原之上，耳畔传来远处悠扬的马头琴声，犹如天籁，往日的烦躁在这一刻烟消云散。在绿色的大海之上心情是如此恬静，这里会是你永远心驰神往的地方。</p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class=" app-none" style="position:relative;">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-12" style="margin-bottom: 30px" ng-repeat="disp in viewSpotData.dispInfoList | limitTo: 12">\n' +
    '                <div class="col-lg-4" style="text-align: -webkit-center;">\n' +
    '                        <span class="imageUrl" style="background:url({{disp.viewSpotImageUrl}}) no-repeat center center;background-size:cover;">\n' +
    '                            <!--<img src="{{viewspot.viewSpotImageUrl}}">-->\n' +
    '                        </span>\n' +
    '                    <p style="text-align: -webkit-center;">{{disp.viewSpotTitle}}</p>\n' +
    '                </div>\n' +
    '                <div class="col-lg-8">\n' +
    '                    <span>{{disp.viewSpotDescribe}}</span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="clearfix"></div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/house/houseInfo.tpl.html',
    '<div class="container" style="padding-top: 100px;padding-bottom: 50px;">\n' +
    '    <div class="row">\n' +
    '        <div class="form-group  col-lg-9">\n' +
    '            <label class="col-sm-2 control-label">房屋类型</label>\n' +
    '            <div class="col-sm-9">\n' +
    '                {{data.houseInfo.houseType}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group  col-lg-9">\n' +
    '            <label class="col-sm-2 control-label">房屋原价</label>\n' +
    '            <div class="col-sm-9">\n' +
    '                {{data.houseInfo.housePrice}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group  col-lg-9">\n' +
    '            <label class="col-sm-2 control-label">团购价</label>\n' +
    '            <div class="col-sm-9">\n' +
    '                {{data.houseInfo.groupBuyingPrice}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group  col-lg-9">\n' +
    '            <label class="col-sm-2 control-label">描述</label>\n' +
    '            <div class="col-sm-9">\n' +
    '                {{data.houseInfo.houseDescribe}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '        <div class="col-lg-4" style="text-align: -webkit-center;" ng-repeat="houseImageInfo in data.houseInfo.houseImageList">\n' +
    '            <span class="imageUrl" style="background:url({{houseImageInfo}}) no-repeat center center;background-size:cover;"></span>\n' +
    '            <!--<img src="{{houseImageInfo}}" class="img-thumbnail" style="width: 100%">-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('mongolia.templates');
} catch (e) {
  module = angular.module('mongolia.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('mongolia/news/newsInfo/newsInfo.tpl.html',
    '<div class="global" style="min-height: 750px;">\n' +
    '	<!--<div class="company-dynamics-banner">-->\n' +
    '		<!--<div class="container">-->\n' +
    '			<!--<div class="row" style="position: relative;">-->\n' +
    '				<!--<img src="{{data.newsInfo.newsImgUrl}}" class="img-responsive" id="myimg">-->\n' +
    '			<!--</div>-->\n' +
    '		<!--</div>-->\n' +
    '	<!--</div>-->\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<div class="company_dynamics">\n' +
    '				<dl>\n' +
    '					<dt><span>{{data.newsInfo.createTime}}</span><span>{{data.newsInfo.createDate}}</span></dt>\n' +
    '					<dd style="border: none;">\n' +
    '						<h3 style="font-size: 20px; margin: 0;">\n' +
    '							<b>【蒙古大营动态】{{data.newsInfo.newsTitle}}</b>\n' +
    '						</h3>\n' +
    '						<div class="company-cont-info">\n' +
    '							<p ng-bind-html="msg | to_trusted"></p>\n' +
    '						</div>\n' +
    '					</dd>\n' +
    '				</dl>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();

//# sourceMappingURL=../maps/mongolia.templates.js.map
