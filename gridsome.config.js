module.exports = {
    siteName: 'Fractional Design',
    siteUrl: 'https://www.fractionaldesign.co.za',
    siteDescription: 'Personal Website for Gavin Hardaker - Front-end Developer and UX Specialist',
    titleTemplate: `%s - Gridsome`,

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
                path: 'pages/*.md',
                typeName: 'Pages',
                route: '/pages/:slug'
            }
		}
	]
}