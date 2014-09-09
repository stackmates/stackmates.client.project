module.exports = angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("layout/templates/_alert.html","<alert ng-repeat=\"alert in alerts\" type=\"alert.type\" close=\"closeAlert($index)\">\n  <div class=\"container\">\n    {{ alert.message }}\n  </div>\n</alert>\n");
$templateCache.put("layout/templates/_footer.html","<div class=\"container\">\n  <p class=\"text-muted credit\">\n    Much credit to <a href=\"//github.com/pilwon/ultimate-seed\">ultimate-seed</a>, <a href=\"https://www.npmjs.org/package/generator-angulpify\">angulpify</a>, <a href=\"https://github.com/ProLoser/AngularJS-ORM\">angular orm</a>\n  </p>\n</div>\n");
$templateCache.put("layout/templates/_header.html","<div class=\"container\">\n\n</div>\n");
$templateCache.put("layout/templates/_nav.html","<div>\n\n  <ul class=\'SlideNavList\'>\n    <li class=\"SlideNavList-item NavigableList-item SlideNavList-item--home\"\n      ui-sref-active=\"active\">\n\n      <a class=\'SlideNavList-button\'\n        ui-sref=\"app.home\"\n        slide-menu-return=\"left\">Home <i class=\"icon ion-home\"></i></a>\n\n    </li>\n    <li class=\"SlideNavList-item NavigableList-item SlideNavList-item--settings\"\n       ui-sref-active=\"active\" ng-if=\"user.nick\">\n\n      <a class=\'SlideNavList-button\'\n        ui-sref=\"app.account\"\n        slide-menu-return=\"left\">{{ user.nick }} <i class=\"icon ion-settings\"></i></a>\n\n    </li>\n    <li class=\"SlideNavList-item NavigableList-item SlideNavList-item--logout\"\n       ui-sref-active=\"active\" ng-if=\"user.nick\">\n\n      <a class=\'SlideNavList-button\'\n        ng-click=\"logout()\" slide-menu-return=\"left\">Logout</a>\n\n    </li>\n    <li class=\"SlideNavList-item NavigableList-item SlideNavList-item--login\"\n       ui-sref-active=\"active\" ng-if=\"!user.nick\">\n\n      <a class=\'SlideNavList-button\'\n        ui-sref=\"app.login\" slide-menu-return=\"left\">Login</a>\n\n    </li>\n  </ul>\n\n</div>\n");
$templateCache.put("main/templates/home.html","<header class=\'u-cf u-z4 u-sizeFullHeight Banner {{ home.haikuBanner.bannerPalette }}\' role=\'banner\'>\n\n    <div class=\"Banner-intro\">\n      <div class=\'u-pullBottomNO\'>\n        <div class=\'_site-width\'>\n          <div class=\'_copy-width\'>\n\n\n            <h1 class=\'u-textCenter\'>{{ home.haikuBanner.bannerSubHeading }}</h1>\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n</header>\n\n\n<div class=\'__content content\' role=\'main\'>\n\n  <div ng-repeat=\'content in home.haikuExternal\'>\n  <section class=\'__section {{content.palette}}\'>\n\n      <div class=\'_site-width\'>\n\n        <div class=\'_copy-width u-textCenter\'>\n\n          <h2 class=\"u-textCenter u-marginBn u-marginTn\">{{ content.haikuHeading }}</h2>\n\n          <blockquote class=\'t-important\'\n            ng-bind-html=\"content.haikuThought\">\n          </blockquote>\n\n          <h4 class=\'u-textCenter u-marginBn u-marginTn\'>\n            <a href=\"#/tab/haiku/{{haiku.flow}}\"\n              ng-bind-html=\"content.haikuAction\">\n            </a>\n          </h4>\n\n        </div>\n\n      </div>\n\n  </section>\n  </div>\n\n\n</div>\n");
$templateCache.put("viz/templates/donut.html","");
$templateCache.put("viz/templates/viz.html","\n\n<div>\n  <toptag-chart\n    toptags=\'viz.toptags\'\n    tagsize=\'viz.tagsize\'\n    artists=\'viz.artists\'>\n  </toptag-chart>\n</div>\n\n<div>\n  <artists-chart artists=\"viz.artists\"></artists-chart>\n</div>\n\n\n\n<div ng-init=\"chart=[{value: 10}, {value: 20}, {value: 30}]\">\n  <donut-chart data=\"chart\" style=\"float:right\"></donut-chart>\n  <button ng-click=\"chart.push({value: 10})\">add slice</button>\n  <button ng-click=\"chart.pop()\">remove slice</button>\n  <div ng-repeat=\"slice in chart track by $index\">\n    <input type=\"range\" ng-model=\"slice.value\">\n  </div>\n</div>\n\n<!-- {{ viz.employers || json }} -->\n\n\n<div class=\"ScatterChart\">\n  <scatter data=\"viz.employers\" selected-point=\"selectEmployer\"> </scatter>\n</div>\n<div class=\"detail\">\n  <div ng-show=\"selectEmployer\">\n    <h2>{{selectEmployer.name }}</h2>\n    <h3>Employees: {{selectEmployer.value }}M</h3>\n  </div>\n  <div ng-show=\"!selectEmployer\">\n    <h2> [hover over a company] </h2>\n  </div>\n</div>\n");
$templateCache.put("directives/logo/logo.html","<div class=\"LogoContainer\">\n\n  <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n  <?xml-stylesheet href=\"../main.css\" type=\"text/css\"?>\n\n  <!DOCTYPE svg PUBLIC “-//W3C//DTD SVG 1.1//EN” “http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd”>\n  <svg viewBox=\"0 0 207 219\"\n      version=\"1.1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>logo</title>\n      <description>dreamineering logo created with Sketch</description>\n      <defs></defs>\n      <g id=\"icons\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"256\" transform=\"translate(-22.000000, -18.000000)\" fill=\"#000000\">\n              <g id=\"logo\" transform=\"translate(21.500000, 17.500000)\">\n                  <path class=\"bd-logo-svg\" d=\"M69.3045933,107.986937 L90.0502585,17.6043327 L0.660870037,17.6043327 L21.0954805,107.986937 L69.3045933,107.986937 Z M69.3045933,107.986937\" id=\"dream\"></path>\n                  <path class=\"bd-logo-svg\" d=\"M57.5705067,219.34676 L57.5705067,128.964156 L146.959895,174.155458 L57.5705067,219.34676 Z M57.5705067,219.34676\" id=\"engine\"></path>\n                  <g id=\"reality\" transform=\"translate(117.552961, 0.540079)\">\n                      <path class=\"bd-logo-svg\" d=\"M62.0906971,107.041504 C67.1464577,111.993692 69.6743002,118.115055 69.6743002,125.405775 C69.6743002,132.834057 67.1113488,139.196147 61.9853693,144.492237 C56.8593897,149.788327 50.6451104,152.436332 43.342345,152.436332 C36.1800174,152.436332 30.0710649,149.788327 25.0153043,144.492237 C19.9595436,139.196147 17.4317012,132.834057 17.4317012,125.405775 C17.4317012,117.977494 19.9244347,111.821742 24.9099764,106.938334 C29.8955182,102.054927 36.0395796,99.6132597 43.342345,99.6132597 C50.7855482,99.6132597 57.0349364,102.089316 62.0906971,107.041504 Z M62.0906971,107.041504\" id=\"?\"></path>\n                      <path class=\"bd-logo-svg\" d=\"M26.9075929,91.057101 L26.9075929,87.7258314 C26.9075929,82.0568004 27.5008197,77.4544345 28.6872911,73.9185956 C29.8737625,70.3827567 31.6399605,67.1537952 33.9859381,64.2316143 C36.3319157,61.3094333 41.6035449,56.1664721 49.8009838,48.8025761 C54.1693558,44.9452973 56.3535091,41.4095115 56.3535091,38.1951124 C56.3535091,34.9807134 55.4771513,32.4822862 53.7244094,30.6997559 C51.9716675,28.9172255 49.3156293,28.0259737 45.7562151,28.0259737 C41.9271482,28.0259737 38.7587777,29.3993781 36.2510086,32.1462282 C33.7432394,34.8930782 32.1388306,39.6853831 31.4377338,46.5232864 L0.0503286328,42.3153669 C1.12893902,29.8084326 5.32197398,19.7416703 12.6295593,12.1147781 C19.9371447,4.48788594 31.1410419,0.674497044 46.2415873,0.674497044 C57.9984405,0.674497044 67.4900695,3.33364179 74.716759,8.65201107 C84.5321135,15.8405761 89.4397171,25.4251858 89.4397171,37.4061275 C89.4397171,42.3738351 88.1723689,47.1661399 85.6376345,51.7831858 C83.1029001,56.4002316 77.925648,62.0399562 70.1057227,68.7025287 C64.6587403,73.3780182 61.2207212,77.1329643 59.7915625,79.9674798 C58.3624037,82.8019953 57.6478351,86.4984987 57.6478351,91.057101 L26.9075929,91.057101 Z M26.9075929,91.057101\" id=\"?\"></path>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n\n\n</div>\n");
$templateCache.put("modules/auth/templates/login.html","<div class=\'__content content content--{{$state.current.name}}\' role=\'main\'>\n\n  <section class=\'__section __section--{{ content.section }} {{ content.mindset }} {{content.section}}\'>\n\n    <form class=\"Form Form--inline Form--simple\"\n      no-validate accept-charset=\"utf-8\"\n      name=\"loginForm\" ng-submit=\"login()\">\n\n        <div class=\"Form-item\">\n          <label class=\"Form-label\" for=\"username\">Username</label>\n          <input type=\"text\"\n            class=\"Form-input\"\n            placeholder=\"username\"\n            ng-model=\"user.nick\"\n            required>\n        </div>\n        <div class=\"Form-item\">\n          <label class=\"Form-label\" for=\"password\">Password</label>\n          <input type=\"password\"\n            class=\"Form-input\"\n            placeholder=\"password\"\n            ng-model=\"user.password\"\n            required>\n        </div>\n        <div class=\"Form-item Form-item--full\">\n          <input type=\"submit\" class=\"Button\" value=\"Login\">\n          <button class=\"Button Button--quiet\" ui-sref=\'app.register\'>Register</button>\n        </div>\n    </form>\n\n  </section>\n\n</div>\n\n\n\n");
$templateCache.put("modules/auth/templates/register.html","<section >\n  <form class=\"Form Form--inline Form--simple\" no-validate accept-charset=\"utf-8\"\n    name=\"signupForm\" ng-submit=\"register()\" >\n\n      <div class=\"Form-item\">\n        <label class=\"Form-label\" for=\"user.name\">Name</label>\n        <input type=\"text\"\n          class=\"Form-input\" id=\"user.name\"\n          placeholder=\"Name\"\n          ng-model=\"user.nick\"\n          required >\n      </div>\n      <div class=\"Form-item\">\n        <label class=\"Form-label\" for=\"user.email\">Email</label>\n        <input type=\"email\"\n          class=\"Form-input\" id=\"user.email\"\n          placeholder=\"yourname@email.com\"\n          ng-model=\"user.email\"\n          required >\n      </div>\n      <div class=\"Form-item\">\n        <label class=\"Form-label\" for=\"user.password\">Password</label>\n        <input type=\"password\"\n          class=\"Form-input\" id=\"user.password\"\n          placeholder=\"Password\"\n          ng-model=\"user.password\"\n          required >\n      </div>\n      <div class=\"Form-item Form-item--full\">\n        <input type=\"submit\" class=\"Button\" value=\"Register\">\n        <button class=\"Button Button--quiet\" ui-sref=\'app.login\'>Log in</button>\n      </div>\n\n  </form>\n</section>\n");
$templateCache.put("modules/auth/templates/mobile/tab-account.html","<ion-view title=\"Account\">\n  <ion-content class=\"has-header padding\">\n    <h1>Account</h1>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("button/index.html","");
$templateCache.put("header/index.html","<h1>Demo</h1>\n\n\n");
$templateCache.put("angular/__style_guide/templates/test_practices.html","<div class=\'l-content-container\'>\n\n  <div class=\'l-content content content--{{$state.current.name}}\' role=\'main\'>\n\n    <section id=\"intro\" class=\'l-section intro intro--{{$state.current.name}}\' role=\'banner\'>\n\n      <div class=\'l-site-width l-intro\'>\n\n        <div class=\'l-copy-width\'>\n\n          <h1>Testing Practices</h1>\n\n        </div>\n\n      </div>\n\n    </section>\n\n    <section class=\'l-section view\'>\n\n      <div class=\'l-site-width l-view\'>\n\n        <div class=\'l-copy-width\' ng-init=\"text=\'hello\'\">\n\n          <h2>{{text}}</h2>\n\n          <text-and-sub text={{text}} sub=\"hello\"></text-and-sub>\n\n          <p>Not much to see here, check out the source</p>\n\n          <ui-view></ui-view>\n\n          <p><a ui-sref=\'home\'>Home</a></p>\n\n        </div>\n\n      </div>\n\n    </section>\n\n  </div>\n\n</div>\n");
$templateCache.put("angular/__style_guide/templates/text-and-sub.html","<span class=\"text-and-sub\">\n  <h3 ng-bind=\"text\"></h3>\n  <h5 ng-bind=\"sub\"\n      ng-show=\"sub\"></h5>\n</span>\n");
$templateCache.put("angular/accordion/templates/accordion-group.html","<div class=\"Accordion-group\">\n\n  <div class=\"Accordion-heading\" >\n    <a class=\"Accordion-toggle\" ng-click=\"isOpen = !isOpen\" accordion-transclude=\"heading\">{{heading}}</a>\n  </div>\n\n  <div class=\"Accordion-body\" collapse=\"!isOpen\">\n\n    <div class=\"Accordion-inner\" ng-transclude></div>\n\n  </div>\n</div>\n");
$templateCache.put("angular/accordion/templates/accordion.html","<div class=\"Accordion\" ng-transclude></div>\n");
$templateCache.put("angular/dynamic_list/templates/dynamic_list_image.html","<div class=\"entry-photo\">\n  <h2>&nbsp;</h2>\n  <div class=\"entry-img\">\n    <span><a href=\"{{rootDirectory}}{{content.data}}\">\n      <img ng-src=\"{{rootDirectory}}{{content.data}}\" alt=\"entry photo\">\n    </a></span>\n  </div>\n  <div class=\"entry-text\">\n    <div class=\"entry-title\">{{content.title}}</div>\n    <div class=\"entry-copy\">{{content.description}}</div>\n  </div>\n</div>\n");
$templateCache.put("angular/dynamic_list/templates/dynamic_list_text.html","<div class=\"entry-note\">\n  <h2>&nbsp;</h2>\n  <div class=\"entry-text\">\n    <div class=\"entry-title\">{{content.title}}</div>\n    <div class=\"entry-copy\">{{content.data}}</div>\n  </div>\n</div>\n");
$templateCache.put("angular/dynamic_list/templates/dynamic_list_video.html","<div class=\"entry-video\">\n  <h2>&nbsp;</h2>\n  <div class=\"entry-vid\">\n    <iframe ng-src=\"{{content.sanitzedUrl}}\"\n      width=\"280\"\n      height=\"200\"\n      frameborder=\"0\"\n      webkitAllowFullScreen\n      mozallowfullscreen\n      allowFullScreen>\n    </iframe>\n  </div>\n  <div class=\"entry-text\">\n    <div class=\"entry-title\">{{content.title}}</div>\n    <div class=\"entry-copy\">{{content.description}}</div>\n  </div>\n</div>\n");
$templateCache.put("angular/input_controls/template/input.html","<div class=\"control-group\" ng-class=\"{\'error\' : $field.$invalid && $field.$dirty, \'success\' : $field.$valid && $field.$dirty}\">\r\n  <label class=\"control-label\"></label>\r\n  <div class=\"controls\">\r\n    <input>\r\n    <span class=\"help-inline\" ng-repeat=\"error in $fieldErrors\">{{$validationMessages[error](this)}}</span>\r\n  </div>\r\n</div>");
$templateCache.put("angular/input_controls/template/select.html","<div class=\"control-group\" ng-class=\"{\'error\' : $field.$invalid && $field.$dirty, \'success\' : $field.$valid && $field.$dirty}\">\r\n  <label class=\"control-label\"></label>\r\n  <div class=\"controls\">\r\n    <select></select>\r\n    <span class=\"help-inline\" ng-repeat=\"error in $fieldErrors\">{{$validationMessages[error](this)}}</span>\r\n  </div>\r\n</div>");
$templateCache.put("angular/input_controls/template/textarea.html","<div class=\"control-group\" ng-class=\"{\'error\' : $field.$invalid && $field.$dirty, \'success\' : $field.$valid && $field.$dirty}\">\r\n  <label class=\"control-label\"></label>\r\n  <div class=\"controls\">\r\n    <textarea></textarea>\r\n    <span class=\"help-inline\" ng-repeat=\"error in $fieldErrors\">{{$validationMessages[error](this)}}</span>\r\n  </div>\r\n</div>");}]);