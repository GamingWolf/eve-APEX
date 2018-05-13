<html>
  <head>
    <meta charset="utf-8">
    <title>APEX Interstellar</title>
    <!-- AngularJs CSS and custom overwrites -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.7/angular-material.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./includes/css/md-overwrite.min.css">
  </head>
  <body ng-app="apex" ng-claok>
    <!-- AngularJS Material Dependencies -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-aria.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-messages.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.8/angular-material.min.js"></script>
    <script src="./includes/js/apps.js"></script>
    <script src="./includes/js/services.js"></script>
    <script src="./includes/js/controller.js"></script>
    <script src="./includes/js/directives.js"></script>

    <md-nav-bar md-selected-nav-item="currentNavItem" nav-bar-aria-label="navigation links">
      <md-nav-item md-nav-href="#!home" name="home" class="menu-logo"><apex-logo></apex-logo></md-nav-item>
      <md-nav-item md-nav-href="#!market" name="market">Market</md-nav-item>
    </md-nav-bar>

    <md-content class="mainWrapper">
      <md-content ng-view>
      </md-content>
    </md-content>
  </body>
</html>
