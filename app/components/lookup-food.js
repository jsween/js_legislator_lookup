import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    foodLookup() {
      var params = {
        food: this.get('food')
      };
      // console.log(params);
      this.sendAction('foodLookup', params);
    }
  }
});
