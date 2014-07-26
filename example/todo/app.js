;(function(window, angular) {
  'use strict';


  var app = angular.module('todoApp', []);

  app.controller('TodoCtrl', function($scope, Utils) {

    var todoCtrl = this;

    todoCtrl.collection = [];

    todoCtrl.model = null;

    $scope.remove = function(model) {

      var index = todoCtrl.collection.indexOf(model);

      if (index !== -1) {
        todoCtrl.collection.splice(index, 1);
      }

    };

    $scope.submit = function(text) {

      var model = {
        id: Utils.uuid(),
        text: text,
        created_at: new Date()
      };

      todoCtrl.collection.push(model);

      todoCtrl.model = null;

    };

    $scope.completed = function() {

      var count = 0;

      angular.forEach(todoCtrl.collection, function(model) {
        count += model.done ? 1 : 0;
      });

      return count;
    };

  });


  app.factory('Utils', function() {

    var service = {
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

    return service;

  });



}(window, window.angular));



