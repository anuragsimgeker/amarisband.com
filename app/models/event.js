import DS from 'ember-data';

var attr = DS.attr;

export
default DS.Model.extend({
    name: attr('string'),
    location: attr('string'),
    timezone: attr('string'),
    start_time: attr('string'),
    end_time: attr('string'),
    cover: attr('string'),
    description: attr('string'),
    is_date_only: attr('string'),
    ticket_uri: attr('string'),
    updated_time: attr('string'),
    venue: attr('string'),
    attending_count: attr('string'),
    declined_count: attr('string'),
    maybe_count: attr('string'),
    noreply_count: attr('string'),
    invited_count: attr('string')
});

// id,cover,description,start_time,end_time,is_date_only,location,name,ticket_uri,timezone,updated_time,venue