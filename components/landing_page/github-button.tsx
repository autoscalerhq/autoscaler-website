
import React from 'react';

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

interface ButtonGithubStarsProps {
    className?: string;
}

export default function ButtonGithubStars(props: ButtonGithubStarsProps) {

    let count = 0;
    let url = ""

    fetch('https://api.github.com/repos/novuhq/novu')
        .then(response => response.json())
        .then(data => {
            console.log("Total Stars: ", data.stargazers_count);
            count = data.stargazers_count;
            console.log("URL to Repo: ", data.html_url);
            url = data.html_url;
        });

    return (
        <Button className={cn('border border-white bg-black', props.className)} >
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={'flex flex-row text-center justify-center items-center'}
            >

                <Image src={'images/github.inline.svg'} alt={"github icon"} width={24} height={24} />

                <span className="hidden lg:flex pl-4 pr-2 ">Star us</span>

                <div className="w-px h-5 bg-gray-500 "></div>

                <span
                    className="hidden lg:flex items-center before:mx-1 before:h-[18px] before:w-px before:bg-gray-4 before:transition-colors before:duration-200 group-hover:before:bg-gray-5"
                    aria-label={`${count} stars on Github`}
                >
                    {`${(count ).toFixed(1)}k`}
                </span>
            </Link>
        </Button>);
};