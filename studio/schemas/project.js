// this builds the page on sanity studio that let's you create the content

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    //what we see when adding things 
    {
      name: "title",
      type: "string",
    },
    // {
    //   name: "date",
    //   type: "datetime",
    // },
    // {
    //   name: "description",
    //   type: "text"
    // },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" }, // personal projects
          { value: "client", title: "Client" }, // who the project was for
          { value: "school", title: "School" } // project for school
        ]
      },
    },
    {
      name: "link",
      type: "url" // url link to the project
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string"
        },
      ],
      options: {
        layout: "tags"
      },
    },
  ],
};