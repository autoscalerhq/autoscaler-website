
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'

const withMDX = nextMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react"
    },
    experimental: {
        mdxRs: true,
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);