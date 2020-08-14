module.exports = {
    siteName: 'Fractional Design',
    siteUrl: '',
    siteDescription: 'Personal Website for Gavin Hardaker - Front-end Developer and UX Specialist',
    titleTemplate: `%s - Gridsome`,
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                // ...global plugins
            ]
        }
    },
    plugins: [
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: 'UA-155217022-1'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'blog/*.md',
                typeName: 'BlogPost',
                route: '/blog/:slug'
            }
		},
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'sitePages/*.md',
                typeName: 'Pages',
                route: '/pages/:slug'
            }
		},
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'portfolioArchive/*.md',
                typeName: 'Portfolio',
                route: '/portfolio/:slug'
            }
		},
        {
            use: 'gridsome-plugin-flexsearch',
            options: {
                collections: [
                    {
                        typeName: 'BlogPost',
                        indexName: 'BlogPost',
                        fields: ['title', 'slug', 'date']
            }
                ],
                searchFields: ['title']
            }
                }
	],

}
