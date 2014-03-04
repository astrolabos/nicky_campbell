angular.module('app', ['components'])
    .controller('MainCtrl', function ($scope) {
        var i, timeout,
            count = 0,
            results = {};

        $scope.postalAreas = [];

        for (i = 0; i < 37; i++) {
            $scope.postalAreas.push({name: 'postcode-' + i, energy: 1});
        }
        timeout = window.setInterval(function () {
            console.log(' ++ extra skenky');

            var id = Math.floor(Math.random() * 37),
                cell_id = '#postcode-' + id,
                opacity = results[cell_id] ? (results[cell_id] * 0.8) : 0.8;

            if (count > 100) {
                window.clearInterval(timeout);
            }

            $scope.postalAreas[id].energy = opacity;
            console.log(opacity);
            console.log($scope.postalAreas[id]);
            results[cell_id] = opacity;

            count++;
        }, 1000);
    });