import Ember from 'ember';
import DS from 'ember-data';

export
default DS.RESTAdapter.extend({

    ajaxError: function(jqXHR, surpressError) {

        if (!surpressError) {
            Ember.Instrumentation.instrument('xhr.error', jqXHR);
        }

        return this._super(jqXHR);
    }
});