import "./globals.css";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon/icon";
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout(props: Readonly<{
    children: React.ReactNode; seoTitle?: string; seoDescription?: string; withContainer?: boolean;
}>) {
    return (
        <>
            <html className={`bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}>
                <body className={'mx-auto overflow-auto h-screen'}>
                    <Header/>
                    <main className=" w-full bg-black flex h-screen flex-col items-center justify-between p-24">
                        {props.children}

                        <footer className='flex flex-col pt-5 sm:pb-4 md:pb-32 '>
                            <div className='mb-3 mt-16 flex justify-center'>
                                <Icon/>
                            </div>
                            <p className='flex justify-center text-sm/[15px] font-semibold text-white text-center'>@2023 Bear Binary
                                Development, LLC</p>
                        </footer>
                    </main>
                    <Analytics />
                </body>
            </html>
        </>
);
}
