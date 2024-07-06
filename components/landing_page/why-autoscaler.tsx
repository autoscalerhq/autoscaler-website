import React from "react";
import {Activity, ChevronsDown, Cpu, Gem, HeartHandshake, Network} from "lucide-react";

export function WhyAutoscaler() {

    return (
        <section className={'pt-20 md:pt-2'}>

            <h2 className={'px-3 text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 flex items-center justify-center'}>
                Why Choose Autoscaler?
            </h2>

            <h3 className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto flex justify-center items-center text-center">
                Our features are designed to enhance your productivity and streamline your workflow.
            </h3>

            <div className="flex flex-row flex-wrap justify-around pt-14">
                {items.map((item, index) => (
                    <div key={item.title} className="max-w-2/3 p-2">
                        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                            <div className="p-2 bg-black bg-opacity-50 rounded-full">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white text-center">{item.title}</h4>
                            <p className="text-zinc-200 dark:text-zinc-100 text-center">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );

}

const items = [
    {
        title: "Dynamic Scaling",
        description: "Automatically adjust resources based on real-time metrics.",
        // header: <Skeleton />,
        icon: <Cpu className="h-6 w-6 text-neutral-500"/>,
    },
    {
        title: "Alternative Data Sources",
        description: "Leverage reliable application metrics for more precise scaling.",
        // header: <Skeleton />,
        icon: <Network className="h-6 w-6 text-neutral-500"/>,
    },
    {
        title: "Team Collaboration",
        description: "Provide clear insights for better decision-making and collaboration.",
        // header: <Skeleton />,
        icon: <HeartHandshake className="h-6 w-6 text-neutral-500"/>,
    },
    {
        title: "Performance Monitoring",
        description: "Track application performance metrics to ensure optimal operation.",
        // header: <Skeleton />,
        icon: <Activity className="h-6 w-6 text-neutral-500"/>,
    },
    {
        title: "Cost Efficiency",
        description: "Optimize resource usage to reduce operational costs.",
        // header: <Skeleton />,
        icon: <ChevronsDown className="h-6 w-6 text-neutral-500"/>,
    },
    {
        title: "Flexible Customization",
        description: "Fit your unique needs with customizable scaling rules ",
        // header: <Skeleton />,
        icon: <Gem className="h-6 w-6 text-neutral-500"/>,
    },
];
