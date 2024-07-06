"use client"

import React from 'react';
import {Highlight} from "@/components/ui/hero-highlight";
import {motion} from "framer-motion";
import {GridBackground} from "@/components/ui/grid-background/grid-background";

export default function Hero() {

    const words = ["Smarter", "Faster", "Cheaper", "Better"];

    return (
        <section>
            <GridBackground >
                <div className="sm:h-[25rem] md:h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        <p> With Autoscaler, Right Sizing Your System Becomes Easy.</p>
                        <br/>
                        <Highlight className="text-white bg-gradient-to-r from-yellow-300 to-green-300 ">
                            Cut Your Spend as You Scale
                        </Highlight>

                    </motion.h1>
                </div>
            </GridBackground>
        </section>
    )
};


{/*<section className="flex items-center justify-between">*/
}
{/*    <div className="flex flex-row items-center justify-between">*/
}
{/*        <div className="h-[40rem] flex flex-col justify-center items-center px-4">*/
}
{/*            <h1 className="text-6xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">*/
}
{/*                Scale*/
}
{/*                <FlipWords words={words} className={'text-white'}/> <br/>*/
}
{/*                with Autoscaler*/
}
{/*            </h1>*/
}
{/*            <h2 className="text-2xl mx-auto font-normal pt-2 text-neutral-400 dark:text-neutral-400">*/
}
{/*                Reliable scaling for optimal*/
}
{/*                performance and cost savings*/
}
{/*            </h2>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</section>*/
}

