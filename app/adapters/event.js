import ApplicationAdapter from 'amarisband/adapters/application';

export
default ApplicationAdapter.extend({

    host: 'http://162.243.144.142',

    ajax: function(url, type, hash) {
        url = url.replace('/events', '/amarisband/facebook.php');
        return this._super(url, type, hash);
    }
});