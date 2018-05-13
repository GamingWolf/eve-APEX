var apex = angular.module('apex', [ 'ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate']);

apex.config(function($routeProvider) {
  $routeProvider.when("/market", {
    templateUrl: "includes/test.html"
  }).when("/home", {
    templateUrl: "includes/home.html"
  })
});

apex.config(function ($mdThemingProvider) {

  var customPrimary = {
  '50': '#fce3a7',
  '100': '#fbdb8f',
  '200': '#fad376',
  '300': '#facb5d',
  '400': '#f9c345',
  '500': '#F8BB2C',
  '600': '#f7b313',
  '700': '#e9a608',
  '800': '#d19407',
  '900': '#b88306',
  'A100': '#fdebc0',
  'A200': '#fef3d9',
  'A400': '#fffbf1',
  'A700': '#9f7105'
};
$mdThemingProvider.definePalette('customPrimary', customPrimary);

var customAccent = {
  '50': '#a8a8a8',
  '100': '#b5b5b5',
  '200': '#c2c2c2',
  '300': '#cfcfcf',
  '400': '#dbdbdb',
  '500': '#e8e8e8',
  '600': '#ffffff',
  '700': '#ffffff',
  '800': '#ffffff',
  '900': '#ffffff',
  'A100': '#ffffff',
  'A200': '#F5F5F5',
  'A400': '#e8e8e8',
  'A700': '#ffffff'
};
$mdThemingProvider.definePalette('customAccent', customAccent);

var customWarn = {
  '50': '#ff5555',
  '100': '#ff3c3c',
  '200': '#ff2222',
  '300': '#ff0909',
  '400': '#ee0000',
  '500': '#D50000',
  '600': '#bb0000',
  '700': '#a20000',
  '800': '#880000',
  '900': '#6f0000',
  'A100': '#ff6f6f',
  'A200': '#ff8888',
  'A400': '#ffa2a2',
  'A700': '#550000'
};
$mdThemingProvider.definePalette('customWarn', customWarn);

$mdThemingProvider.theme('default')
 .primaryPalette('customPrimary')
 .accentPalette('customAccent')
 .warnPalette('customWarn')
 .dark()
});
