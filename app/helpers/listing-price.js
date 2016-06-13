import Ember from 'ember';

export function listingPrice(params) {
  var listingCost = params;

  if (listingCost >= 5000) {
    return '$$$$';
  } else if (listingCost >= 3500) {
    return '$$$';
  } else if (listingCost >= 2000) {
    return '$$';
  } else if (listingCost <= 1000) {
    return '$';
  }
}

export default Ember.Helper.helper(listingPrice);
