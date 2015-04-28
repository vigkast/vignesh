var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home',
    function($scope, TemplateService, NavigationService, $http) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        var onsuccess = function(data) {
            $scope.data = data;
        };
        $http.get("http://www.lylaloves.co.uk/admin/index.php/json/getproductbycategory?category=earrings&color=&price1=0&price2=30").success(onsuccess);
    }
);
phonecatControllers.controller('about', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('services', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Services");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('portfolio', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Portfolio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('abcd', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Abcd");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);

phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
]);