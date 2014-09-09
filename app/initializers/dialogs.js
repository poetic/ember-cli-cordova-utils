import Dialogs from '../services/dialogs';

export default {
  name: 'dialogs',
  after: 'cordova',

  initialize: function(container, application) {
    container.register('cordova:dialogs', Dialogs);

    application.inject('route',      'dialogs', 'cordova:dialogs');
    application.inject('controller', 'dialogs', 'cordova:dialogs');
    application.inject('view',       'dialogs', 'cordova:dialogs');
  }
};
