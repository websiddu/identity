import Ember from 'ember';

var LoginController = Ember.Controller.extend({
  user: [],
  actions: {
    reset: function() {
      this.setProperties({
        username: '',
        password: '',
        errorMessage: ''
      })
    },

    login: function() {
      var self = this,
        data = this.getProperties('username', 'password');
        Ember.$.ajax({
          url: 'http://localhost:2403/users/login',
          data: data,
          success: function(data) {
            self.set('token', data.uid);
            localStorage['token'] = data.uid;
            self.transitionToRoute('index')
          },
          error: function(error) {
            self.set('errorMessage', JSON.parse(error.responseText).message);
          },
          type: 'POST'
        })
    }
  }
});

export default LoginController;;
