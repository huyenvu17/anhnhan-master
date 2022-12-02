export default {
    name: "userDocument",
    type: "document",
    title: "User Document",
    fields: [
        {
            name: "userReference",
            type: "reference",
            to: [{ type: "user" }],
        },
        {
            name: "documentReference",
            type: "reference",
            to: [{ type: "doc" }],
        },
        {
            title: 'data', 
            name: 'data',
            type: 'array', 
            of: [{type: "block"}]
        },   
    ]
}