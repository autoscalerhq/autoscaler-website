import Link from 'next/link';
import React from 'react';

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