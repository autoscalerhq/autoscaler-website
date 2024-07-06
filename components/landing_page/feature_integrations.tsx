"use client"

import React from "react";
import { motion } from "framer-motion";
import {Cpu} from "lucide-react";


// Animation configs
const scrollLeftConfig = {
    animate: { x: [-1000, 0] },
    transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const }
};
const scrollRightConfig = {
    animate: { x: [1000, 0] },
    transition: { duration: 2, repeat: Infinity, repeatType: "loop" as const }
};

export default function FeatureIntegrations() {
    return (
        <section>
            <h2>Integrations with your Monitoring system </h2>

            <div className="flex space-x-4 overflow-x-scroll">
                <motion.div className="flex space-x-4" {...scrollRightConfig}>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                </motion.div>
                <motion.div className="flex space-x-4" {...scrollLeftConfig}>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                </motion.div>
                <motion.div className="flex space-x-4" {...scrollRightConfig}>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                    <Cpu/>
                </motion.div>
            </div>
        </section>
    );
}