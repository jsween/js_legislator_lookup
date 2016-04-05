import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url =
    'http://capitolwords.org/api/1/dates.json?phrase=united+states&apikey=db448894a62b44f780dd5119f1330b44';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
