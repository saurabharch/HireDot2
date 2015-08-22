app.config(function($stateProvider) {
  $stateProvider.state('company-profile', {
    url: '/company/:id',
    templateUrl: 'js/company/profile/profile.html',
    resolve: {
      company: ($stateParams, User) =>
        User.getCompany($stateParams.id)
    },
    controller: ($scope, company) => {
      $scope.company = company
    }
  });
});