const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

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

            new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: ['/', '/about', '/some/deep/nested/route'],
        })
	]
}