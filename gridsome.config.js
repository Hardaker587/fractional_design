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
		}
	],

    configureWebpack: () => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
        new PrerenderSPAPlugin(
                    // Absolute path to compiled SPA
                    path.resolve(__dirname, 'dist'),
                    // List of routes to prerender
          ['/'], {
                        // options
                    }
                ),
      ]
        }
    }
}