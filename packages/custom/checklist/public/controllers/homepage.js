'use strict';

/* jshint -W098 */
angular.module('mean.checklist').controller('ChecklistHomeController', ['$scope', '$location', 'MeanUser', 'Checklist',
    function ($scope, $location, MeanUser, Checklist) {
        // Async monitor since user's are authenticated after the controller fully loads
        $scope.MeanUser = MeanUser;
        $scope.$watch('MeanUser.loggedin', function () {
            if (MeanUser.loggedin) {
                console.log('redirect');
                $location.path('checklist/example');
            }
        });
    }
]);