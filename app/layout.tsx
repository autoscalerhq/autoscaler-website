import "./globals.css";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon/icon";
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import PostHogPageView, {CSPostHogProvider} from "@/app/providers";
import Script from 'next/script'
import React from "react";

export default function RootLayout(props: Readonly<{
    children: React.ReactNode;
}>) {

    const gcode: string = "G-4HH4XBE2YZ"

    return (
        <>
            <html lang="en" className={`bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}>
                <Script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/45292712.js"></Script>

                <GoogleTagManager gtmId={gcode} />
                <CSPostHogProvider>
                    <body className={'mx-auto overflow-auto h-screen'}>
                        <PostHogPageView/>
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
                        <GoogleAnalytics gaId={gcode} />
                    </body>
                </CSPostHogProvider>

            </html>
        </>
);
}
