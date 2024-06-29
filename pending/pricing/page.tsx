"use client"

import {useRouter} from 'next/router';
import React, {useState} from 'react';


import {Button} from '@/components/ui/button';
import {cn} from "@/lib/utils";
import ComparePlansCards from "@/components/pricing/ComparePlan";


Pricing.requireSession = false;

type BillingInterval = 'year' | 'month';

const products = [
    {
        price: {
            month: 10000,
            year: 100000
        },
        title: 'ScaleUp',
        description: 'For businesses starting to see growth and wanting to save cost',
        buttonInfo: 'Join the Waitlist', //'Get Started',
        gradient: true,
        currency: 'USD'
    },
    {
        price: {
            month: 200000,
            year: 2000000
        },
        title: 'Business',
        description: 'Those who do not want to move to kubernetes or are wanting to automate scaling your system.',
        buttonInfo: 'Join the Waitlist', //'Get Started',
        gradient: true,
        currency: 'USD'
    },
    {
        price: {
            month: -1,
            year: -1
        },
        title: 'Enterprise',
        description: 'On-premise support and growth ',
        contact: 'Contact Us',
        buttonInfo: 'Contact Sales',
        gradient: false,
        currency: 'USD'
    }
];

export default function Pricing() {
    const router = useRouter();

    const [billingInterval, setBillingInterval] = useState<BillingInterval>('month');

    return (
        <>
            <div className={'flex flex-col mt-10 items-center justify-center text-center md:flex-col'}>
                <h1 className={'my-10 pt-5 text-center leading-normal text-white'}>
                    <b>
                        <span className='bg-clip-text sm:text-2xl md:text-4xl lg:text-8xl '> Simple Pricing</span>
                        <p className={'pt-6 px-4 sm:text-3xl md:text-5xl '}> per service</p>
                    </b>
                </h1>
            </div>
            <div
                className='mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-4 lg:px-8'>
                <div
                    className='relative flex flex-row sm:max-w-full md:max-w-[40%] self-center rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 '>
                    <button
                        onClick={() => setBillingInterval('month')}
                        type='button'
                        className={`${
                            billingInterval === 'month'
                                ? 'relative w-full sm:w-1/2 border-zinc-800 bg-zinc-700 text-white shadow-sm'
                                : 'relative ml-0.5 w-full sm:w-1/2 border border-transparent text-zinc-400'
                        } m-2 sm:m-1 whitespace-nowrap rounded-md py-4 sm:py-2 text-base sm:text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 px-8`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingInterval('year')}
                        type='button'
                        className={`${
                            billingInterval === 'year'
                                ? 'relative w-full sm:w-1/2 border-zinc-800 bg-zinc-700 text-white shadow-sm'
                                : 'relative ml-0.5 w-full sm:w-1/2 border border-transparent text-zinc-400'
                        } m-2 sm:m-1 whitespace-nowrap rounded-md py-4 sm:py-2 text-base sm:text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 px-8`}
                    >
                        Yearly
                    </button>
                </div>
            </div>
            <p className={'flex flex-row justify-center items-center text-center md:flex-col opacity-60'}>* 16% off with
                yearly</p>
            <div
                className='mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 space-y-4 sm:mt-16 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none'>
                {products.map(product => {
                    const price = product.price[billingInterval];

                    const priceString =
                        price === -1
                            ? 'Custom'
                            : new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: product.currency,
                                minimumFractionDigits: 0
                            }).format((price || 0) / 100);

                    return (
                        <div
                            key={product.title}
                            className={cn(
                                'flex flex-col divide-y divide-zinc-600 rounded-lg bg-zinc-900 shadow-sm',
                                'flex-1', // This makes the flex item grow to fill the space
                                'basis-1/3', // Assuming you want each card to take up roughly a third of the container's width
                                'min-w-xs max-w-sm' // Sets a maximum width to the cards to prevent them from getting too large
                                // product.gradient ? 'border border-primary' : ''
                            )}
                        >
                            <div className='p-6'>
                                <h2 className='text-4xl font-semibold leading-6 text-white'>{product.title}</h2>
                                <p className='mt-4 text-zinc-300'>{product.description}</p>
                                <p className={`mt-8 ${price === -1 ? 'flex flex-col items-center justify-center' : ''}`}>
                                    <span className='white text-5xl font-extrabold'>{priceString}</span>
                                    {price === -1 ? <></> :
                                        <span className='text-base font-medium text-zinc-100'>/{billingInterval}</span>}
                                </p>
                                <Button
                                    variant='ghost'
                                    type='button'
                                    onClick={() => {
                                        // getSignInRedirectPath()
                                        void router.push(price === -1 ? '/app/waitlist' : 'https://meetings.hubspot.com/zclifton/csgrader-demo');
                                    }}
                                    className={
                                        'relative mt-8 inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] text-center font-semibold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                                    }
                                >
                                    {product.title !== 'Educator' ? (
                                        product.buttonInfo
                                    ) : (
                                        <>
                                            <span
                                                className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,_#054AE0_44%,_#00B27F_69%,_#74FF93)]'/>
                                            <span
                                                className='text-semibold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl'>
                          <b>{product.buttonInfo}</b>
                        </span>
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={'mt-10'}>
                <ComparePlansCards activeTier={''}/>
            </div>
        </>
    );
}
