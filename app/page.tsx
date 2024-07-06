import Hero from "@/components/landing_page/hero";
import {WhyAutoscaler} from "@/components/landing_page/why-autoscaler";
import {CTA} from "@/components/landing_page/cta";
import {FeatureInfrastructure} from "@/components/landing_page/feature_infrastructure";
import FeatureIntegrations from "@/components/landing_page/feature_integrations";
import BeamWrapper from "@/components/landing_page/beam-wrapper";
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
