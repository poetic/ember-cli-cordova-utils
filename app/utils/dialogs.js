import Ember from 'ember';

var Promise = Ember.RSVP.Promise;

var hasNotificationType = function(type){
  return typeof navigator.notification !== 'undefined' && navigator.notification[type];
};

export default Ember.Object.extend({

  // The promise returned will never reject since the callback has to
  // success/failure scenario
  alert: function(msg, title){
    if(Ember.isBlank(title)) {
      title = 'Alert';
    }

    return new Promise(function(resolve){
      if (hasNotificationType('alert')) {
        navigator.notification.alert(msg, resolve, title);
      } else {
        alert(msg);
        resolve();
      }
    });
  },

  // Returns a promise that will be resolved when the first button is pressed.
  // It will reject when the alternate is
  confirm: function(msg, title, buttonLabels){
    if(Ember.isBlank(title)) {
      title = 'Confirm';
    }

    if(Ember.isBlank(buttonLabels)) {
      buttonLabels = ['Yes', 'No'];
    }

    return new Promise(function(resolve, reject){
      if (hasNotificationType('confirm')) {
        navigator.notification.confirm(msg, function(index) {
          // We're going to assume it's a 2 button confirm. If not, then just
          // use the navigator.notification.confirm directly
          if(index === 1 || index === true) {
            resolve(index);
          } else {
            reject(index);
          }
        }, title, buttonLabels);
      } else {
        if(confirm(msg)) {
          resolve();
        } else {
          reject();
        }
      }
    });
  },

  // Convenience destroy method to call destroyRecord on an ember-data model
  // after a deletion has been confirmed in a dialog.
  confirmDestroy: function(msg, title, model) {
    var confirmObject = this;
    if(Ember.isBlank(title)) {
      title = 'Delete';
    }

    this.confirm(msg, title).then(function() {
      return model.destroyRecord().catch(function(){
        confirmObject.alert('We are unable to remove this right now. Please try again later.');
      });
    });
  }
});
