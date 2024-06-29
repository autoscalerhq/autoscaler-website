import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import s from './PlanCard.module.scss';
import {getSignInRedirectPath} from "@/lib/futils";
import {FeatureList} from "@/components/pricing/FeatureList";

export interface PricingPlan {
    title: string;
    linkText: string;
    linkUrl: string;
    core: Record<string, boolean | string>;
    features: Record<string, boolean | string>;
    advancedFeatures: Record<string, boolean | string>;
    security: Record<string, boolean | string>;
    support: Record<string, boolean | string>;
}
interface PlanCardProps extends PricingPlan {
    activeTier: string;
    currentRow: string;
}

export const PlanCard = ({ title, linkText, linkUrl, core, features, advancedFeatures, security, support, activeTier, currentRow }: PlanCardProps) => {
    const isActive = activeTier.valueOf() === title.split(' ')[0].toLowerCase();

    return (
        <div className={clsx(s['plancard-container'], isActive)}>
            <div className={clsx(s['featurelistcard-container'], isActive)}>
                <div className={s['cardcontainer']}>
                    <h3 className={s['cardTitle']}>{title}</h3>
                    {title === 'Universities' ? (
                        <Button variant='gradient' className='inline-block rounded-full'>
                            <Link className='font-bold text-white' href={getSignInRedirectPath()}>
                                {linkText}
                            </Link>
                        </Button>
                    ) : (
                        <Button variant='transparent' className='mb-0 inline-block rounded-full bg-white'>
                            <Link className='font-bold text-black' href={getSignInRedirectPath()}>
                                {linkText}
                            </Link>
                        </Button>
                    )}
                </div>
                <FeatureList features={core as Record<string, boolean>} currentRow={currentRow} />
                <FeatureList features={features as Record<string, boolean>} currentRow={currentRow} />
                <FeatureList features={advancedFeatures as Record<string, boolean>} currentRow={currentRow} />
                <FeatureList features={security as Record<string, boolean>} currentRow={currentRow} />
                <FeatureList features={support as Record<string, boolean>} currentRow={currentRow} />
            </div>
        </div>
    );
};
