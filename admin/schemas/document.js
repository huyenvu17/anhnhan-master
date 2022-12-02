export default {
    name: "doc",
    type: "document",
    title: "Document",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: "name",
                maxLength: 100
            }
        },
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: "block"}] 
        },
    ]
}