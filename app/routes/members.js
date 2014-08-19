import BaseRoute from 'amarisband/routes/base';

export
default BaseRoute.extend({
    model: function() {
        return [{
            id: 1,
            firstName: 'Anurag',
            lastName: 'Simgeker',
            photoUrl: 'assets/images/anurag.jpg',
            instrument: 'Bass',
            bio: ''
        }, {
            id: 2,
            firstName: 'Danielle',
            lastName: 'Day',
            photoUrl: 'assets/images/danielle.jpg',
            instrument: 'Violin',
            bio: ''
        }, {
            id: 3,
            firstName: 'Derek',
            lastName: 'Staniotes',
            photoUrl: 'assets/images/derek.jpg',
            instrument: 'Guitars',
            bio: ''
        }, {
            id: 4,
            firstName: 'Drew',
            lastName: 'Garymore',
            photoUrl: 'assets/images/drew.jpg',
            instrument: 'Keyboards',
            bio: ''
        }, {
            id: 5,
            firstName: 'Joseph',
            lastName: 'Pike',
            photoUrl: 'assets/images/joe.jpg',
            instrument: 'Drums',
            bio: ''
        }, {
            id: 6,
            firstName: 'Judy',
            lastName: 'Cruses',
            photoUrl: 'assets/images/judy.jpg',
            instrument: 'Violin',
            bio: ''
        }, {
            id: 7,
            firstName: 'Susan',
            lastName: 'Jiminez',
            photoUrl: 'assets/images/suzi.jpg',
            instrument: 'Vocals',
            bio: ''
        }, {
            id: 8,
            firstName: 'Shari',
            lastName: 'Derkson',
            photoUrl: 'assets/images/shari.jpg',
            instrument: 'Vocals',
            bio: ''
        }];
    }
});