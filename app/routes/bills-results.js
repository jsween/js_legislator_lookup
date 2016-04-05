import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log('hi from bills-results js');
    var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?&apikey=db448894a62b44f780dd5119f1330b44&chamber=house&order=scheduled_at';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
