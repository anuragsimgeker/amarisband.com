import Ember from 'ember';

var Router = Ember.Router.extend({
    location: AmarisbandENV.locationType
});

Router.map(function() {
    this.route('events');
    this.route('members');
    this.route('photos');
    this.route('videos');
    this.route('music');
});

export
default Router;