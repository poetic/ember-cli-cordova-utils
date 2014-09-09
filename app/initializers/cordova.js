import Contacts from '../services/contacts';

// Defers readiness of applicatoin until plugins are ready.
export default {
  name: 'cordova',

  initialize: function(container, application) {
    if(typeof cordova !== 'undefined') {
      application.deferReadiness();
      document.addEventListener('deviceready', function() {
        application.advanceReadiness();
      }, false);
    }
  }
};
