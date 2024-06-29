
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import {ChevronRightIcon} from "lucide-react";
import {ReactNode} from "react";


interface faqProps {
    data: {
      title: string;
      content: string
    }[]
}

export default function faq(props: faqProps): ReactNode {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-3xl space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-4">
                        {
                            props.data.map(val => (
                                <Collapsible key={val.title}>   {/* add unique key for each map iteration */}
                                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted p-4 text-left font-medium transition-colors hover:bg-muted-foreground/10 [&[data-state=open]>svg]:rotate-90">
                                        {val.title}
                                        <ChevronRightIcon className="h-5 w-5 transition-transform" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="space-y-4 p-4 text-muted-foreground">
                                        <p>
                                            {val.content}
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

