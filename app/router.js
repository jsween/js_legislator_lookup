import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('bills-results');
  this.route('house');
  this.route('phrase');
  this.route('nutrition', {path: '/nutrition/:food'});
});

export default Router;
