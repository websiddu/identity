export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', 'AwesomeApp');
    if(localStorage['token'] === '') {
      this.transitionTo('login');
    }
  }
});
