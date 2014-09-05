import DS from 'ember-data';

var attr = DS.attr;

export
default DS.Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    photoUrl: attr('string'),
    instrument: attr('string'),
    bio: attr('string'),
    pastMember: attr('boolean')
});

// id,cover,description,start_time,end_time,is_date_only,location,name,ticket_uri,timezone,updated_time,venue