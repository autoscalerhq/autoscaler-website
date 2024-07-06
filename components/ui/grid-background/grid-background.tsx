import {cn} from "@/lib/utils";
import React, { type PropsWithChildren } from 'react';
import s from "./gridbackground.module.scss";

export function GridBackground(props: PropsWithChildren & { className?: string; innerClassName?: string; gridClassName?: string }) {
    return (
        <div className={cn('relative flex w-full  items-center justify-center bg-black bg-grid-white/[0.2]', props.className)}>
            <div className={cn('pointer-events-none absolute inset-0 flex items-center justify-center bg-black', s['fade-grid'], props.gridClassName)}></div>
            <div className={cn('relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl', props.innerClassName)}>
                {props.children}
            </div>
        </div>
    );
}