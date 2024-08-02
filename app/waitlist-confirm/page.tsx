import React from 'react';
import {WobbleCard} from "@/components/ui/wobble-card";

export default function SignupSuccess() {
    return (
        <div className="flex items-center justify-center pt-48">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                className="text-center text-white"
            >
                <h1 className="text-3xl font-bold mb-2">Thank You for Signing Up!</h1>
                <p className="text-xl">We appreciate you signing up. You will be receiving an email soon about your
                    signup.</p>
            </WobbleCard>
        </div>
    );
};
