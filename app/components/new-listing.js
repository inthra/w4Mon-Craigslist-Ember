import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveListing() {
      var params = {
        title: this.get('title'),
        detail: this.get('detail'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.sendAction('saveListing', params);
      this.set('title', "");
      this.set('detail', "");
      this.set('price', "");
      this.set('image', "");
    },
  }
});
