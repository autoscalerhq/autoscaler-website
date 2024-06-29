import "./globals.css";
import {cn} from "@/lib/utils";
import {LandingPageLink} from "@/lib/futils";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon/icon";

export default function RootLayout(props: Readonly<{
    children: React.ReactNode; seoTitle?: string; seoDescription?: string; withContainer?: boolean;
}>) {
    const withContainer = props.withContainer ?? true;
    return (
        <>
            <html className={'bg-black text-white'}>
            <body className={cn(withContainer && 'container', 'mx-auto overflow-auto')}>
            <Header/>
            <main>{props.children}</main>
            <footer className='mb-8 flex flex-col pt-20'>
                <div className='flex flex-row justify-center'>
                    <div className='inline-flex flex-col justify-start'>
                        <LandingPageLink href={'https://discord.gg/rjmWHmxNkS'} className='text-white'>
                            Contact Us
                        </LandingPageLink>
                        <LandingPageLink href={'/blog'} className='text-white'>
                            Blog
                        </LandingPageLink>
                        <LandingPageLink href={'/pricing'} className='text-white'>
                            Pricing
                        </LandingPageLink>
                        <LandingPageLink href={'/privacy'} className='text-white'>
                            Privacy Policy
                        </LandingPageLink>
                    </div>
                    <div className='inline-flex flex-col justify-start pl-14 md:pl-24 lg:pl-24'>
                        <LandingPageLink href={'https://discord.gg/FNkb9qWNXt'} className='text-white'>
                            Discord
                        </LandingPageLink>
                        <LandingPageLink href={'https://csgrader.productlane.com/roadmap'}
                                         className='text-white'>
                            Roadmap
                        </LandingPageLink>
                        <LandingPageLink href={'https://csgrader.productlane.com/changelog'}
                                         className='text-white'>
                            Changelog
                        </LandingPageLink>
                        <LandingPageLink href={'/terms'} className='text-white'>
                            Terms of Service
                        </LandingPageLink>
                    </div>
                </div>
                <div className='mb-3 mt-16 flex justify-center'>
                    <Icon/>
                </div>
                <p className='flex justify-center text-sm/[15px] font-semibold text-white'>@2023 Bear Binary
                    Development, LLC</p>
            </footer>
            </body>
            </html>
        </>);
}
