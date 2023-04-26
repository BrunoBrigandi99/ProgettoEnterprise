import { Component } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {

  username ="Io";
  firstName ="Sono";
  lastName ="Giovanni";
  email = "iosonoGiovanni@gmail.com";
  profileImageUrl = "https://via.placeholder.com/150";


  /*
  <!-- Definisce il controller Angular -->
  <script>
    var app = angular.module('myApp', ['ngMaterial']);
    app.controller('MyController', function($scope) {
      $scope.username = 'IlMioUsername';
      $scope.firstName = 'Nome';
      $scope.lastName = 'Cognome';
      $scope.email = 'email@example.com';
      $scope.profileImageUrl = 'https://via.placeholder.com/150';
    });
  </script>*/
}
