import Ember from 'ember';

export
default Ember.Component.extend({
    classNames: 'time-ampm',
    layoutName: 'time-ampm',

    dateTimeObject: function() {
        return new Date(this.get('datetime') || new Date().getTime());
    }.property('datetime'),

    hours: function() {
        var hours = this.get('dateTimeObject').getHours(),
            hour = hours > 12 ? hours - 12 : hours;
        return hour < 10 ? '0' + hour : hour;
    }.property('dateTimeObject'),

    minutes: function() {
        var minutes = this.get('dateTimeObject').getMinutes();
        return minutes < 10 ? '0' + minutes : minutes;
    }.property('dateTimeObject'),

    seconds: function() {
        return this.get('dateTimeObject').getSeconds();
    }.property('dateTimeObject'),

    ampm: function() {
        var hours = this.get('dateTimeObject').getHours();
        return hours > 12 ? 'PM' : 'AM';
    }.property('dateTimeObject'),
});