"use client"
import {ReactNode} from "react";
import {useViewportSize} from "@mantine/hooks";
import {TracingBeam} from "@/components/ui/tracing-beam";

export default function BeamWrapper({children}: {children : ReactNode}) {
    const { height, width } = useViewportSize();
    return (
        <>
            {width >= 768 ?
                <TracingBeam>
                    {children}
                </TracingBeam>:
                <>
                    {children}
                </>
            }
        </>
    )
}