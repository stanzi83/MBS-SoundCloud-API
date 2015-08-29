var app = angular.module('sounder');

app.service('soundService', function($http) {
  var CLIENT_ID = "bda4ada8694db06efcac9cf97b872b3e";
  var HOST = "http://api.soundcloud.com/users/"
  this.getUser = function(username) {
	  return $http.get(HOST + username + '/tracks.json?client_id=' + CLIENT_ID).then(function(resp){
		  return resp.data
	  })
  }
});