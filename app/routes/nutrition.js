import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // console.log(params);
    var url = "https://api.nutritionix.com/v1_1/search/" + params.food + "?results=0%3A50&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=2def66bd&appKey=3f092e1ba6df228f1d81ef8c1149446c";
    return Ember.$.getJSON(url).then(function(responseJSON)  {
      console.log(responseJSON.hits);
        return responseJSON.hits;
    });
  }
});
