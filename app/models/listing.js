import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  category: belongsTo('category', { async: true }),
  title: attr(),
  detail: attr(),
  price: attr(),
  image: attr(),
  timeStamp: attr()
});
