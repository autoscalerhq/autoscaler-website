"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import {ArrowUpDown, Cable, HardDrive} from "lucide-react";

export function FeatureInfrastructure() {
    return (
        <section className={'pt-10'}>

            <h2 className={'px-6 text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 flex items-center justify-center'}>
                How it works
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pt-10">

                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Integrate with your system in minutes
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Autoscaler offers a straightforward setup process, allowing you to integrate it with your application seamlessly within minutes.
                        </p>
                    </div>
                    {/*<Cable  className="w-3/4 h-full absolute text-gray-300 -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />*/}
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-transparent">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Ensure optimal performance and cost efficiency
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Autoscaler optimizes your application’s performance and ensures cost efficiency by dynamically adjusting resources.
                    </p>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Scale efficiently by analyzing various data points.
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                           You can continuously monitor and predict your application’s needs through request queue, queue length, processing limits and more.
                        </p>
                    </div>
                    <Image
                        src="/images/autoscaler_icon.svg"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </section>
    );
}
