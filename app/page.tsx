import Hero from "@/components/landing_page/hero";
import {WhyAutoscaler} from "@/components/landing_page/why-autoscaler";
import {CTA} from "@/components/landing_page/cta";
import {FeatureInfrastructure} from "@/components/landing_page/feature_infrastructure";
import FeatureIntegrations from "@/components/landing_page/feature_integrations";
import BeamWrapper from "@/components/landing_page/beam-wrapper";
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Autoscaler | Efficiently Scale & Right-Size Your Services',
    description: 'Autoscaler helps you efficiently scale and right-size your services to optimize performance and reduce costs. Learn more about our advanced scaling solutions.',
    keywords: 'autoscaler, scale services, right-size services, optimize performance, reduce costs, scaling solutions',
    openGraph: {
        type: 'website',
        description: 'test',
        url: 'https://autoscaler.dev',
        images: 'https://autoscaler.dev/images/autoscaler_icon.svg'
    },
};

export default function Home() {
    return (

            <div className="z-10 w-full max-w-5xl flex-col items-center justify-between text-sm lg:flex">
                <Hero/>
                <br/>
                <BeamWrapper>
                    <WhyAutoscaler/>
                    <br/>
                    {/*<FeatureIntegrations/>*/}
                    {/*<br/>*/}
                    <FeatureInfrastructure/>
                    <br/>
                    <CTA/>
                </BeamWrapper>
            </div>
    );
}
