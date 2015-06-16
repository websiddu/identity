import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', 'AwesomeApp');
    if(localStorage['token'] === '')
      this.transitionTo('login')
  },
  events: {
    error: function(reason, transition) {
      console.log(reason)
      this.transitionTo('login')
    }
  }
});

export default IndexRoute;
