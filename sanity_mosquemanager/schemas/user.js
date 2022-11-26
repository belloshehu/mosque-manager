export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: Rule => Rule.required().warning('Please enter email')
        },
        {
            name: 'phoneNumber',
            title: 'PhoneNumber',
            type: 'string',
            validation: Rule => Rule.required().length(11).warning('Enter 11 digits number')
        },
        {
            name: 'firstName',
            title: 'FirstName',
            type: 'string',
            validation: Rule => Rule.required().warning('Please enter first name')
        },
        {
            name: 'lastName',
            title: 'LastName',
            type: 'string',
            validation: Rule => Rule.required().warning('Please enter last name')
        },
        {
            name: 'isAdmin',
            title: 'IsAdmin',
            type: 'boolean'
        },
        {
            name: 'verified',
            title: 'Verified',
            type: 'boolean'
        },
        {
            name: 'token',
            title: 'Token',
            type: 'string',
            options: {
                hidden: true
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        }
    ]
}