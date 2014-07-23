import Ember from 'ember';

var Promise = Ember.RSVP.Promise;

var hasContacts = function(){
  return typeof navigator.contacts !== 'undefined';
};

export default Ember.Object.extend({
  create: function(options) {
    if(!hasContacts()) {
      throw new Error('contacts not available from outside app');
    }

    return navigator.contacts.create(options);
  },

  find: function(fields, options){
    return new Promise(function(resolve, reject){
      if(hasContacts()) {
        navigator.contacts.find(fields, resolve, reject, options);
      } else {
        reject('contacts not available from outside app');
      }
    });
  },

  pickContact: function() {
    return new Promise(function(resolve, reject){
      if(hasContacts()) {
        navigator.contacts.pickContact(resolve, reject);
      } else {
        reject('contacts not available from outside app');
      }
    });
  }
});
