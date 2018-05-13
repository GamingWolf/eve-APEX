apex.controller('marketControl', function($scope) {
  $scope.loading = true;
  $scope.searchInput = "";

  angular.element(document).ready(function() {
    $scope.loading = false;
  });
});
