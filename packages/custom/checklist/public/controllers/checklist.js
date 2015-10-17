'use strict';

/* jshint -W098 */
angular.module('mean.checklist', ['mean.system']).config(['$viewPathProvider', function ($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'checklist/views/homepage.html');
}]);

angular.module('mean.checklist').controller('ChecklistController', ['$scope', 'Global', 'Checklist',
  function ($scope, Global, Checklist) {
    $scope.global = Global;
    $scope.package = {
      name: 'checklist'
    };
  }
]);