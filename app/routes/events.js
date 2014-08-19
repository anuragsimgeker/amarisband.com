import BaseRoute from 'amarisband/routes/base';

export
default BaseRoute.extend({
    model: function() {
        return [{
            "id": "737334359646333",
            "cover": {
                "cover_id": "923085417705651",
                "source": "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/t1.0-9/10298908_923085417705651_1033294467784119123_n.jpg",
                "offset_y": 26,
                "offset_x": 0
            },
            "description": "The Hotel Utah Saloon is a 100-plus-year-old San Francisco institution in the midst of a reinvented, reinvigorated SOMA neighborhood.",
            "start_time": "2014-08-26T21:00:00-0700",
            "is_date_only": false,
            "location": "Hotel Utah Saloon",
            "name": "Amaris - Tuesday August 26th - The Hotel Utah Saloon - 2014",
            "ticket_uri": "https://www.facebook.com/ajax/events/ticket.php?event_id=737334359646333&source=12&ext=1408389321&hash=ATXsMQzmNkm8-w4z",
            "timezone": "America/Los_Angeles",
            "updated_time": "2014-08-18T04:35:54+0000",
            "venue": {
                "latitude": 37.779529543876,
                "longitude": -122.39834199615,
                "city": "San Francisco",
                "state": "CA",
                "country": "United States",
                "id": "106004036708",
                "street": "500 4th St",
                "zip": "94107"
            }
        }, {
            "id": "1446107742332472",
            "cover": {
                "cover_id": "909340479080145",
                "source": "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/s720x720/10506851_909340479080145_5717856088434407360_o.jpg",
                "offset_y": 0,
                "offset_x": 0
            },
            "start_time": "2014-07-24T21:00:00-0700",
            "is_date_only": false,
            "location": "Winters Tavern",
            "name": "Amaris - Thursday July 24th - Winters Tavern",
            "timezone": "America/Los_Angeles",
            "updated_time": "2014-07-22T16:53:15+0000",
            "venue": {
                "latitude": 37.636553706055,
                "longitude": -122.49031849986,
                "city": "Pacifica",
                "state": "CA",
                "country": "United States",
                "id": "105549730731",
                "street": "1522 Francisco Blvd",
                "zip": "94044"
            }
        }, {
            "id": "591563700942193",
            "cover": {
                "cover_id": "880117168669143",
                "source": "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpa1/t1.0-9/s720x720/10345561_880117168669143_3565463942944868749_n.jpg",
                "offset_y": 59,
                "offset_x": 0
            },
            "description": "A Crye Wulf Production",
            "start_time": "2014-06-14T19:00:00-0700",
            "is_date_only": false,
            "location": "The Rock Shop",
            "name": "Amaris - Saturday June 14th - The Rock Shop San Jose",
            "timezone": "America/Los_Angeles",
            "updated_time": "2014-06-04T19:15:05+0000",
            "venue": {
                "latitude": 37.3265341174,
                "longitude": -121.888268833,
                "city": "San Jose",
                "state": "CA",
                "country": "United States",
                "id": "185507174923563",
                "street": "3rd St",
                "zip": "95112"
            }
        }];
        // window.FB.api(
        //     '/thebandamaris/events',
        //     function(response) {
        //         if (response && !response.error) {
        //             return response.data;
        //         }
        //     }
        // );
    }
});