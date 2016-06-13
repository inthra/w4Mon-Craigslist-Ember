import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveListing(listing, params) {
      this.sendAction('saveListing', listing, params);
    },
  }
});
