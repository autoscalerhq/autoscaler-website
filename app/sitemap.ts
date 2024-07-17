import { MetadataRoute } from 'next'
import {useRouter} from "next/router";

export default function sitemap(): MetadataRoute.Sitemap {
    const router = useRouter();
    const url = router.asPath;

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