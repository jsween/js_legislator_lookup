import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billsLookup() {
      // var params = {
      //   bill: this.get('bill')
      // };
      console.log('Hi from bills-lookup js');
      this.sendAction('billsLookup'/*, params*/);
    }
  }
});
