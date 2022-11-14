module.exports = {
    siteMetadata: {
        siteUrl: "https://sol-soria.web.app",
        title: "Maria Sol Soria Moncayo - Personal Portfolio",
        description: "A brief trajectory description of María Sol Soria",
        author: "Maria Sol Soria",
        siteLanguage: "en",
        image: "home.jpg",
        titleTemplate: "inbio",
        twitterUsername: "@MARIASOLSORIA4",
        getform_url:
            "https://getform.io/f/be645ed5-3d7d-4e16-bf31-88f5c3f55941",
        socials: [
            {
                id: 1,
                title: "facebook",
                path: "https://facebook.com/mariasol.soria.7",
                icon: "Facebook",
            },
            {
                id: 2,
                title: "instagram",
                path: "https://instagram.com/mariasolsoria",
                icon: "Instagram",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://linkedin.com/in/maria-sol-soria/",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "0958755303",
            email: "masol.soria.1995@hotmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#0dbbc2",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
