
import ICON from '/public/images/autoscaler_icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {cn} from "@/lib/utils";

interface IconProps {
    withLink?: boolean;
    ClassName?: string;
}

export default function Icon(props: IconProps) {

    const baseClass = cn('h-16', props.ClassName);

    return (
        <>
            {props.withLink ? (
                <Link href={'/'} className={'flex items-center justify-center p-2 no-underline'}>
                    <Image className={baseClass} src={ICON} alt={'Autoscaler Icon'} />
                </Link>
            ) : (
                <Image className={baseClass} src={ICON} alt={'Autoscaler Icon'} />
            )}
        </>
    );
}

