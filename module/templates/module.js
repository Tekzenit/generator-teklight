require('./<%= name %>-service.js');
require('./<%= name %>-directive.js');
require('./<%= name %>-controller.js');
module.exports.name = '<%= name %>';

angular.module(module.exports.name, [
    '<%= name %>-controller'
])

/// configure the <%= name %> module
.config(function($stateProvider) {
    $stateProvider
        .state('<%= name %>', {
            url: '/',
            templateUrl: '<%= name %>/<%= name %>-template.html',
            controller: '<%= name %>'
        });
})

;