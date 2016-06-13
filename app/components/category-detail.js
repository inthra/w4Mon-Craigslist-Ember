import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['price:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),

  actions: {
    saveListing(listing, params) {
      this.sendAction('saveListing', listing, params);
    },
  }
});
