import Contacts from '../services/contacts';

export default {
  name: 'contacts',
  after: 'cordova',

  initialize: function(container, application) {
    container.register('cordova:contacts', Contacts);

    application.inject('route',      'contacts', 'cordova:contacts');
    application.inject('controller', 'contacts', 'cordova:contacts');
    application.inject('view',       'contacts', 'cordova:contacts');
  }
};
