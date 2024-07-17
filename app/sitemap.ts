import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

    const url = 'https://autoscaler.dev';

    return [
        {
            url: url,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: url + '/terms',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
    ]
}