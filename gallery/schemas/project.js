export default {
    name: "project", 
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal"},
                    { value: "school", title: "School"},
                ]
            },
        },
        {
            name: "link",
            type: "url",
        },
       
    ],
};