import Ember from 'ember';

export default Ember.Component.extend({

  titleAndCost: Ember.computed('listing.title', 'listing.price', function() {
    return this.get('listing.title') + ': $' + this.get('listing.price');
  }),
});
