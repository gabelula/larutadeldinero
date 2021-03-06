'use strict';

/**
 * @ngdoc overview
 * @name larutadeldinero
 * @description
 * # larutadeldinero
 *
 * Main module of the application.
 */
angular
    .module('larutadeldinero', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ui.router',
        'angular.filter'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('root', {
                url:'/',
                views: {
                    'Treemap': {
                        templateUrl: 'views/treemap.html',
                        controller: 'TreemapCtrl'
                    },
                    'Map': {
                        templateUrl: 'views/map.html',
                        controller: 'MapCtrl'
                    },
                    'Charts': {
                        templateUrl: 'views/charts.html',
                        controller: 'ChartsCtrl'
                    },
                    'Table': {
                        templateUrl: 'views/table.html',
                        controller: 'TableCtrl'
                    },
                    'Sitio': {
                        templateUrl: 'views/sitio.html'
                    },
                    'Faq': {
                        templateUrl: 'views/faq.html'
                    },
                    'Team': {
                        templateUrl: 'views/team.html'
                    },
                    'Tutorial': {
                        templateUrl: 'views/tutorial.html'
                    }

                }
            })
            .state('aportante', {
                url: '/aportante/:documento',
                templateUrl: 'views/aportante.html',
                controller: 'AportanteCtrl'
            });
    })
    .run(function($rootScope, $location) {
        $rootScope.location = $location;
    })

    .controller('AppCtrl', function($scope, $rootScope, Agrupaciones) {

        $rootScope.filter = {
            year: null,
            type: null,
            district: null,
            party: null,
            sexes: {},
            ages: {},
            amounts: {},
            taxes: {},
            rulers: {}
        };

        $rootScope.view = 'Treemap';
        $scope.setView = function(view) {
            $rootScope.location.path('/');
            $rootScope.view = view;
        };

        $scope.reloadPage = function(){
            window.location.reload();
        };

        $scope.reloadChart = function(){
            $scope.$emit('reloadChart');
        };

        $scope.advancedFilterCollapsed = true;

        // Elementos del filtro
        $scope.years = [2007,2009,2011,2013];
        $scope.types = ['PRIMARIAS','GENERALES'];
        $scope.districts = ['Orden Nacional','Buenos Aires','Ciudad de Buenos Aires','Catamarca','Córdoba','Corrientes','Chaco','Chubut','Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucumán'];
        Agrupaciones.findAll().then(function(response) {
            $rootScope.parties = response.data.objects;
        });

        // Elementos del filtro avanzado
        $scope.sexes = [
            { name: 'M', val: 'M' },
            { name: 'F', val: 'F' },
            { name: 'J', val: 'J' }
        ];
        $scope.ages = [
            { name: '< 30', val: '30-' },
            { name: '30-39', val: '30-39' },
            { name: '40-49', val: '40-49' },
            { name: '50-59', val: '50-59' },
            { name: '60-69', val: '60-69' },
            { name: '>= 70', val: '70 y más' }
        ];
        $scope.amounts = [
            { name: '  < $500', val: '1 - $499' },
            { name: '    $500 -  $1.999', val: '500 - $1.999' },
            { name: '  $2.000 -  $4.999', val: '2.000 - $4.999' },
            { name: '  $5.000 -  $9.999', val: '5.000 - $9.999' },
            { name: ' $10.000 - $49.999', val: '10.000 - $49.999' },
            { name: '>$50.000', val: '50.000 y más' }
        ];
        $scope.taxes = [
            { name: 'IVA', val: 'iva' },
            { name: 'Ganancias', val: 'ganancias' },
            { name: 'Monotributo', val: 'monotributo' },
            { name: 'Empleador', val: 'empleador' }
        ];
        $scope.rulers = [
            { name: 'Fue designado', val: 'designacion' },
            { name: 'Fue candidato', val: 'candidatura' },
            { name: 'Fue contratado', val: 'contrato' },
            { name: 'Es autoridad partidaria', val: 'autoridad' },
            { name: 'Fue Diputado', val: 'diputado' },
            { name: 'Fue Senador', val: 'senador' }
        ];

        setTimeout(function() {
            $rootScope.$watch('filter', refreshData, true)
            $rootScope.$watch('setorder', refreshData, true);
        }, 1000);

        function refreshData() {
            setTimeout(function() {
                $rootScope.$emit('filterChanged');
            }, 100)
        }

        $scope.hasAnyTrueValues = function(obj) {
            for (var val in obj) {
                if (obj[val]) return true;
            }
            return false;
        }


    })

    .directive('preventClick', function() {
        return function(scope, element, attrs) {
            $(element).click(function(event) {
                event.preventDefault();
            })
        }
    })

    .filter('agrupacionName', function($rootScope) {
        return function(agrupacionId) {
            var filtered = $rootScope.parties.filter(function (agrupacion) {
                return agrupacion.id == agrupacionId
            });

            return filtered.length > 0 ? filtered[0].nombre : '-';
        }
    });
