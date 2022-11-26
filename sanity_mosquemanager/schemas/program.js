export default {
    name: 'program',
    title: 'Program',
    type: 'document', 
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
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
            name: 'startTime',
            title: 'StartTime',
            type: 'datetime'
        },
        {
            name: 'endTime',
            title: 'EndTime',
            type: 'datetime'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date'
        }, 
        {
            name: 'frequency',
            title: 'Frequency',
            type: 'string', 
            options: {
                list: [
                    'one-off',
                    'recurrent'
                ]
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        }
    ]
}