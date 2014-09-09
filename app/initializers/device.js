import Device from '../services/device';

export default {
  name: 'device',
  after: 'cordova',

  initialize: function(container, application) {
    container.register('cordova:device', Device);

    application.inject('route',      'device', 'cordova:device');
    application.inject('controller', 'device', 'cordova:device');
    application.inject('component',  'device', 'cordova:device');
    application.inject('view',       'device', 'cordova:device');
  }
};
