import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

    const url = 'https://autoscaler.dev';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
        },
        sitemap: url + '/sitemap.xml',
    }
}