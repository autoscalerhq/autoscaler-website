"use client"
import Link from 'next/link';
import React from 'react';

import { sendGTMEvent } from '@next/third-parties/google';
import { track } from '@vercel/analytics';
import posthog from "posthog-js";

type LandingPageLinkProps = React.ComponentProps<typeof Link>;

export function LandingPageLink(props: LandingPageLinkProps) {
    const { children, ...linkProps } = props;
    return (
        <Link {...linkProps} className={linkProps.className}>
            {children}
        </Link>
    );
}

export function getSignInRedirectPath(callbackUrl?: string): string {
    if (callbackUrl) {
        return `/app/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    }

    return '/app/auth/signin';
}

export function getWaitlistURL(utm?: string): string {

    if (utm) {
        return `https://getwaitlist.com/waitlist/18230?utm_campagin=${utm}`
    }

    return `https://getwaitlist.com/waitlist/18230`
}

export function emitAnalytic(action: {
    name: string;
    value: string;
    data?: Record<string, any>;
}) {

    sendGTMEvent({ event: action.name, value: action.value, gtm: action.data });

    track(action.name, action.data);

    posthog.capture(action.name, {
        value: action.value,
        ...action.data,
    }  )


}