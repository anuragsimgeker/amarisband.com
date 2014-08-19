import Ember from 'ember';

export
default Ember.Route.extend({

    listenForXhrErrors: function() {
        Ember.subscribe('xhr.error', {
            before: function(name, timestamp, jqXHR) {
                var statusCode = jqXHR.status;

                if (statusCode === 401) {
                    this.replaceWith('welcome');
                }
            }.bind(this),

            after: function() { /* intentionally left blank */ }
        });
    }.on('init')
});