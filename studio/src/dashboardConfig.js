export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d20c0c0d9f12cded9f8b34",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ge7m83fm",
                  apiId: "21a75535-bd72-4a15-bed2-9aa1b20fcae9",
                },
                {
                  buildHookId: "60d20c0b1007018e514c9d45",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uok7m4g3",
                  apiId: "47fa46d3-2fd4-4236-85a4-5a429efcd778",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Baymax-3100/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uok7m4g3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
