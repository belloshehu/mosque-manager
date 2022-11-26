export default {
    name: 'mosque',
    title: 'Mosque',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name', 
            type: 'string'
        },
        {
            name: 'latitute',
            title: 'Latitude', 
            type: 'number'
        },
        {
            name: 'longitude',
            title: 'Longitude', 
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image', 
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'address',
            title: 'Address', 
            type: 'string'
        },
        {
            name: 'city',
            title: 'City', 
            type: 'string'
        },
        {
            name: 'country',
            title: 'Country', 
            type: 'string'
        }
    ]
}