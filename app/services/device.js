import Ember from 'ember';

var hasDevice = function() {
  return typeof device !== 'undefined';
};

var verifyDevice = function() {
  if(!hasDevice()) {
    window.device = {
      platform: 'browser'
    };
  }
};

export default Ember.Object.extend({
  isAndroid: function() {
    verifyDevice();
    return device.platform === 'Android';
  }.property(),

  isiOS: function() {
    verifyDevice();
    return device.platform === 'iOS';
  }.property()
});
