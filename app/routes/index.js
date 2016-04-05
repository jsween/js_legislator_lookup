import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    billsLookup() {
      console.log('Hi from Index');
      this.transitionTo('bills-results');
    }
  }
});
