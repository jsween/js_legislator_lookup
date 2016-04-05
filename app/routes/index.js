import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    foodLookup(params) {
      console.log(params);
      this.transitionTo('nutrition', params);
    }
  }
});
