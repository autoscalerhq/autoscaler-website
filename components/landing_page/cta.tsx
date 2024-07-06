"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import {Button} from "@/components/ui/button";
import React from "react";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import {useViewportSize} from "@mantine/hooks";
export function CTA() {

    const { height, width } = useViewportSize();

    const words = [
        {
            text: "Ready",
            className: "text-white",
        },
        {
            text: "to",
            className: "text-white",
        },
        {
            text: "Scale",
            className: "text-white",
        },
        {
            text: "with",
            className: "text-white",
        },
        {
            text: "Autoscaler?",
            wordClassName: 'bg-brand-gradient text-brand-gradient',
        }
    ];

    return (
        <section className="h-[25rem] md:h-[40rem] w-full bg-black bg-grid-white/[0.2]  relative flex items-center justify-center">
            <div className="hidden md:flex absolute pointer-events-none inset-0 items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col items-center justify-center h-[40rem] md:max-w-64 ">

                <p className="text-neutral-200 sm:text-base md:text-xl text-center  ">
                    The road to cost saving starts from here
                </p>

                { width >= 768 ?
                    <TypewriterEffectSmooth
                        words={words}
                        className={'text-white '}
                        containerClassName={'sm:max-w-1/2 md:max-w-3/4 text-nowrap'}
                    />
                     :  <h3 className={'text-white text-center font-bold text-nowrap text-xl py-4'}>
                            Ready to Scale With <span className={'bg-brand-gradient text-brand-gradient'} > Autoscaler? </span>
                        </h3>               }

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-1">
                    <button className="relative inline-flex sm:h-16 md:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#75C8A4_0%,#EAB34E_50%,#E35F2D_100%)]"/>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Join the Waitlist
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
