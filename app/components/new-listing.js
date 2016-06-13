import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveListing() {
      var params = {
        title: this.get('title'),
        detail: this.get('detail'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        category: this.get('category'),
        timeStamp: moment().unix(),
      };
      this.sendAction('saveListing', params);
      this.set('title', "");
      this.set('detail', "");
      this.set('price', "");
      this.set('image', "");
    },
  }
});
