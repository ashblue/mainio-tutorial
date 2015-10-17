'use strict';

angular.module('mean.checklist').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('checklist example page', {
      url: '/checklist/example',
      templateUrl: 'checklist/views/index.html'
    });
  }
]);
