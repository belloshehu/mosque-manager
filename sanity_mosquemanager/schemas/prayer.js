export default {
    name: 'prayer',
    title: 'Prayer',
    type: 'document',
    fields: [
        {
            name: 'name', 
            title: 'Name', 
            type: 'string',
            options:{
                list: [
                    'subhi',
                    'zuhri',
                    'asri',
                    'magrib',
                    'ishaa',
                    'jumat'
                ]
            }
        },
        {
            name: 'adhanTime', 
            title: 'AdhanTime', 
            type: 'datetime',
            options: {
                timeStep: 5
            }
        },
        {
            name: 'iqamaTime', 
            title: 'IqamaTime', 
            type: 'datetime',
            options: {
                timeStep: 5,
            }
        },
        {
            name: 'position', 
            title: 'Position', 
            type: 'number',
            options: {
                list: [1, 2, 3, 4, 5,]
            }
        },
    ]
}