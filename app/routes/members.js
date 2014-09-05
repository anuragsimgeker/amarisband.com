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
            bio: 'A guitarist who is expanding his musical realm by playing in this new challenging genre. He has many influences of rock, blues and metal that have fueled him throughout the years. Such guitar players as Wylde, Vaughan, and Satriani are just a few to name that have inspired him to play in past hard rock and metal bands in the Bay Area. Having the opportunity to perform pieces from the US and Europe\'s most well known Symphonic Metal acts, the honor and excitement has been prodigious. He is looking forward to the band\'s future and to get to share his creative energy towards their music.'
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
            bio: 'In 2012, relocated to the San Francisco Bay area, with a new middle school teaching position, while bringing to the Bay a love for a new genre of music, symphonic metal. The passion and love for the dichotomy of beautiful orchestral sounds with metal backing, led him to form a band that would reflect his passion, while introducing this little – known genre of music to the San Francisco Bay region and beyond.'
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
            bio: 'By day - a music director & voice teacher, and by night - Rockin\' out with her Amaris bandmates!  Nothing is more thrilling for Susie Jimenez than performing, whether it be with professional opera companies, touring nationally with her pop/opera ensemble Bella Sorella, or this new path of singing with Amaris.  Susie joined Amaris in Spring of 2013, and is looking forward to the opportunity to work on original music with the band, and to utilize all of her vocal range & vocal abilities for this exciting genre of Symphonic Metal.'
        }, {
            id: 8,
            firstName: 'Shari',
            lastName: 'Derkson',
            photoUrl: 'assets/images/shari.jpg',
            instrument: 'Vocals',
            pastMember: true,
            bio: ''
        }];
    }
});