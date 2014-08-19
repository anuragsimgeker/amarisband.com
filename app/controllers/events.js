import Ember from 'ember';

export
default Ember.ArrayController.extend({
    sortProperties: ['start_time'],
    sortAscending: false,

    pastEvents: function() {
        var result = [];

        this.get('content').forEach(function(_event) {
            var start_time = new Date(_event.start_time),
                now = new Date();
            if (start_time <= now) {
                result.push(_event);
            }
        });

        return result;
    }.property('content.[]'),

    upcomingEvents: function() {
        var result = [];

        this.get('content').forEach(function(_event) {
            var start_time = new Date(_event.start_time),
                now = new Date();
            if (start_time > now) {
                result.push(_event);
            }
        });

        return result;
    }.property('content.[]')
});