;(function(window, angular) {
  'use strict';


  var app = angular.module('todoApp', []);

  app.controller('TodoCtrl', function($scope, Utils) {

    var todoCtrl = this;

    todoCtrl.collection = [];

    todoCtrl.model = null;

    $scope.remove = function(index) {
      todoCtrl.collection.splice(index, 1);
    };

    $scope.submit = function(text) {

      var model = {
        id: Utils.uuid(),
        text: text
      };

      todoCtrl.collection.push(model);

      todoCtrl.model = null;

    };

  });


  app.factory('Utils', function() {
    return {
      uuid: function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c==='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;
      }
    };

  });



}(window, window.angular));



