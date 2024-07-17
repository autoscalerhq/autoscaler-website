import { MetadataRoute } from 'next'
import {useRouter} from "next/router";

export default function robots(): MetadataRoute.Robots {

    const router = useRouter();
    const url = router.asPath;

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
        },
        sitemap: url + '/sitemap.xml',
    }
}