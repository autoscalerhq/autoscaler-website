import ICON from '/public/images/autoscaler_icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {cn} from "@/lib/utils";

interface CSGraderIconProps {
    withLink?: boolean;
    textClassName?: string;
    imageClassName?: string;
}

export default function IconWithWords(props: CSGraderIconProps) {

    const baseClass = cn('text-white text-center font-bold font-normal leading-none text-5xl', props.textClassName);

    return (
        <>
            {props.withLink ? (
                <Link href={'/'} className={'flex items-center justify-center p-2 no-underline'}>
                    <Image className={props.imageClassName} src={ICON} alt={'Autoscaler Icon'}/>
                    <p className={ baseClass}>Autoscaler</p>
                </Link>
            ) : (
                <>
                    <Image className={props.imageClassName} src={ICON} alt={'Autoscaler Icon'}/>
                    <p className={baseClass}>Autoscaler</p>
                </>
            )}
        </>
    );
}

