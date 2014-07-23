import Contacts from '../utils/contacts';

export default {
  name: 'contacts',

  initialize: function(container, application) {
    container.register('cordova:contacts', Contacts);

    application.inject('route',      'contacts', 'cordova:contacts');
    application.inject('controller', 'contacts', 'cordova:contacts');
    application.inject('view',       'contacts', 'cordova:contacts');
  }
};
