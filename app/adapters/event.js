import ApplicationAdapter from 'amarisband/adapters/application';

export
default ApplicationAdapter.extend({

    host: 'http://boxplot.co',

    ajax: function(url, type, hash) {
        url = url.replace('/events', '/amarisband/facebook.php');
        return this._super(url, type, hash);
    }
});