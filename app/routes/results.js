import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=[db448894a62b44f780dd5119f1330b44]&zip='
  }
});
