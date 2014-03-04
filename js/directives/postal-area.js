angular.module('components', [])
    .directive('postalArea', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                postalArea: '=area'
            },
            controller: function ($scope, $element) {

            },
            template: '<div style="background-color: rgba(0, 102, 0, {{ postalArea.energy }});">' +
                '{{ postalArea.name }} - {{ postalArea.energy }}</div>',
            replace: true
        };
    })
