import Ember from 'ember';

export
default Ember.Component.extend({
    classNames: 'cal-month-date',
    layoutName: 'cal-month-date',

    monthsHash: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayHash: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    dateTimeObject: function() {
        return new Date(this.get('datetime') || new Date().getTime());
    }.property('datetime'),

    month: function() {
        return this.get('monthsHash')[this.get('dateTimeObject').getMonth()];
    }.property('monthsHash', 'dateTimeObject'),

    date: function() {
        return this.get('dateTimeObject').getDate();
    }.property('dateTimeObject'),

    weekday: function() {
        return this.get('dateTimeObject').getDay();
    }.property('dateTimeObject')
});