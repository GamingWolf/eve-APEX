apex.directive('apexLogoLoading', function($rootScope, $timeout) {
  return {
    templateUrl : './includes/assets/svg/APEX-loading.svg'
  };
});

apex.directive('apexLogo', function() {
  return {
    templateUrl : './includes/assets/svg/APEX-static.svg'
  };
});

apex.directive('showDuringResolve', function($rootScope) {

  return {
    link: function(scope, element) {

      element.addClass('ng-hide');

      var unregister = $rootScope.$on('$routeChangeStart', function() {
        element.removeClass('ng-hide');
      });

      scope.$on('$destroy', unregister);
    }
  };
});
