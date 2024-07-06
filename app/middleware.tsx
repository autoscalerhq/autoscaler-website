import { NextResponse, NextRequest } from 'next/server'
import { ScalableBloomFilter } from 'bloom-filters'
import GeneratedBloomFilter from './redirects/bloom-filter.json'


type RedirectEntry = {
    destination: string
    permanent: boolean
    analytics: boolean
    external: boolean
}

// Initialize bloom filter from a generated JSON file
const bloomFilter = ScalableBloomFilter.fromJSON(GeneratedBloomFilter as any)

export async function middleware(request: NextRequest) {
    // Get the path for the incoming request
    const pathname = request.nextUrl.pathname

    // Check if the path is in the bloom filter
    if (bloomFilter.has(pathname)) {
        // Forward the pathname to the Route Handler
        const api = new URL(
            `/api/redirects?pathname=${encodeURIComponent(request.nextUrl.pathname)}`,
            request.nextUrl.origin
        )

        try {
            // Fetch redirect data from the Route Handler
            const redirectData = await fetch(api)

            if (redirectData.ok) {
                const redirectEntry: RedirectEntry | undefined =
                    await redirectData.json()

                if (redirectEntry) {
                    // Determine the status code
                    const statusCode = redirectEntry.permanent ? 308 : 307

                    // Redirect to the destination
                    return NextResponse.redirect(redirectEntry.destination, statusCode)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    // No redirect found, continue the request without redirecting
    return NextResponse.next()
}