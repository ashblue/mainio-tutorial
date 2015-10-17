'use strict';

/* jshint -W098 */
angular.module('mean.checklist', ['mean.system']).config(['$viewPathProvider', function ($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'checklist/views/homepage.html');

  // Override the login forms to make them mobile friendly. Sigh... >_>
  $viewPathProvider.override('users/views/index.html', 'checklist/views/login.html');
  $viewPathProvider.override('users/views/login.html', 'checklist/views/login-form.html');
  $viewPathProvider.override('users/views/register.html', 'checklist/views/register.html');
  $viewPathProvider.override('users/views/reset-password.html', 'checklist/views/reset-password.html');
  $viewPathProvider.override('users/views/forgot-password.html', 'checklist/views/forgot-password.html');
}]);

angular.module('mean.checklist').controller('ChecklistController', ['$scope', 'Global', 'Checklist',
  function ($scope, Global, Checklist) {
    $scope.global = Global;
    $scope.package = {
      name: 'checklist'
    };
  }
]);

angular.module('mean.checklist').controller('ChecklistHomeController', ['$scope', '$location', 'MeanUser', 'Checklist',
  function ($scope, $location, MeanUser, Checklist) {
    // Async monitor since user's are authenticated after the controller fully loads
    $scope.MeanUser = MeanUser;
    $scope.$watch('MeanUser.loggedin', function () {
      if (MeanUser.loggedin) {
        console.log('home page redirect');
        $location.path('checklist/example');
      }
    });
  }
]);