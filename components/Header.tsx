"use client"
import Link from 'next/link';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

import {cn} from "@/lib/utils";
import {Menu, X} from "lucide-react";
import {getSignInRedirectPath} from "@/lib/futils";
import Icon from "@/components/ui/icon/icon";

export default function Header() {
    const roadmapURL = 'https://csgrader.productlane.com/roadmap';
    const changelogURL = 'https://csgrader.productlane.com/changelog';

    const product: { title: string; href: string; description: string }[] = [
        {
            title: 'Universities',
            href: '/universities',
            description: "For universities with cutting-edge AI to elevate coding education, ensuring 1000's graded in minutes."
        },
        {
            title: 'Bootcamps',
            href: '/bootcamps',
            description: 'For bootcamps with AI-driven coding assessment, accelerating learners towards tech mastery with real-world programming skills.'
        },
        {
            title: 'Assignment Generation',
            href: '/generation',
            description: 'Enhance instructors ability to create meaningful assignments for there students.'
        }
    ];

    const resources: { title: string; href: string; description: string }[] = [
        {
            title: 'Blog',
            href: '/blog',
            description: 'Check out our latest articles'
        },
        // {
        //     title: 'Roadmap',
        //     href: roadmapURL,
        //     description: 'See what is coming up for the product'
        // },
        // {
        //     title: 'Changelog',
        //     href: changelogURL,
        //     description: 'Look at the lasted features and updates'
        // }
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        // 'safe-paddings sticky top-0 z-50 mx-auto w-full bg-black'
        // 'top-0 left-0 right-0 flex justify-center bg-[#0B0C14]/80 fixed before:absolute before:z-40 before:inset-0 before:backdrop-blur-2xl'
        <header id={'navbar'} className={'top-0 left-0 right-0 flex justify-center fixed bg-black py-2 z-50'}>
            {/*className='flex justify-between px-10 py-3 sm:px-4 sm:py-3.5 md:flex-row md:px-7 md:py-4 lg:flex-row'*/}
            <nav className={'grow flex  justify-between border-b border-[#727DA1]/15 mx-5 max-w-[1110px] h-[52px] text-[13px] leading-[100%] text-[#C9D3EE]'}>
                <div className='flex items-center '>
                    <Icon ClassName={'hidden md:block z-50 '} withLink={true} />
                    <div className='hidden pl-10 gap-4 lg:flex '>
                        <NavigationMenu>
                            <NavigationMenuList className={'space-x-4'}>
                                {/*<NavigationMenuItem>*/}
                                {/*    <NavigationMenuTrigger className={'bg-transparent'}>Product</NavigationMenuTrigger>*/}
                                {/*    <NavigationMenuContent>*/}
                                {/*        <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>*/}
                                {/*            <li className='row-span-3'>*/}
                                {/*                <NavigationMenuLink asChild>*/}
                                {/*                    <Link*/}
                                {/*                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'*/}
                                {/*                        href='/'*/}
                                {/*                    >*/}
                                {/*                        <Icon withLink={true} />*/}
                                {/*                        <div className='mb-2 mt-4 text-lg font-medium'>CSGrader</div>*/}
                                {/*                        <p className='text-sm leading-tight text-muted-foreground'>Best way to grade assignments for Universities, Bootcamps, and Course creators.</p>*/}
                                {/*                    </Link>*/}
                                {/*                </NavigationMenuLink>*/}
                                {/*            </li>*/}
                                {/*            /!*{product.map(component => (*!/*/}
                                {/*            /!*  <ListItem key={component.title} title={component.title} href={component.href}>*!/*/}
                                {/*            /!*    {component.description}*!/*/}
                                {/*            /!*  </ListItem>*!/*/}
                                {/*            /!*))}*!/*/}
                                {/*        </ul>*/}
                                {/*    </NavigationMenuContent>*/}
                                {/*</NavigationMenuItem>*/}

                                {/*<NavigationMenuItem>*/}
                                {/*    <NavigationMenuTrigger className={'bg-transparent'}>Resources</NavigationMenuTrigger>*/}
                                {/*    <NavigationMenuContent>*/}
                                {/*        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>*/}
                                {/*            {resources.map(component => (*/}
                                {/*                <ListItem key={component.title} title={component.title} href={component.href}>*/}
                                {/*                    {component.description}*/}
                                {/*                </ListItem>*/}
                                {/*            ))}*/}
                                {/*        </ul>*/}
                                {/*    </NavigationMenuContent>*/}
                                {/*</NavigationMenuItem>*/}

                                {/*<NavigationMenuItem>*/}
                                {/*    <NavigationMenuLink className={navigationMenuTriggerStyle() + ' bg-transparent'} href='/pricing'>*/}
                                {/*        Pricing*/}
                                {/*    </NavigationMenuLink>*/}
                                {/*</NavigationMenuItem>*/}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className={'flex items-end sm:gap-2 whitespace-nowrap -mr-3 md:mr-0'}>
                    <div className='pl-auto hidden items-center justify-end lg:flex'>
                        <NavigationMenu>
                            <NavigationMenuList className={'space-x-4'}>
                                <NavigationMenuItem className='flex md:flex lg:flex'>
                                    <Button variant='ghost' className='rounded-3xl border-none font-sans text-lg'>
                                        <Link className='font-semibold text-white' href={getSignInRedirectPath()}>
                                            Sign In
                                        </Link>
                                    </Button>
                                </NavigationMenuItem>

                                <NavigationMenuItem className='hidden md:flex lg:flex'>
                                    <Button variant='secondary' className='rounded-3xl border-none font-sans text-lg'>
                                        {/*getSignInRedirectPath()*/}
                                        <Link className='font-semibold text-black' href={'/app/waitlist'}>
                                            Join the Waitlist
                                        </Link>
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className='flex items-center justify-between lg:hidden pr-2 z-50'>
                        <Button
                            variant={'ghost'}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            {isOpen ? <X className={'block lg:hidden w-6 h-6 '} /> : <Menu className={'block lg:hidden w-6 h-6 '} />}
                        </Button>
                    </div>
                </div>

                {isOpen ? (
                    <div className='lg:hidden flex flex-col items-center sm:text-xl md:text-2xl mt-2 p-5 fixed z-40 left-0 right-0 backdrop-blur-2xl top-[52px] bg-[#181926]/80 text-[#C9D3EE]'>
                        <Link className='p-3 py-5 w-full flex flex-row items-center justify-center' href='/pricing'>
                            Pricing
                        </Link>
                        <Link className='p-3 py-5 w-full flex flex-row items-center justify-center' href='/blog'>
                            Blog
                        </Link>
                        <Link className='p-3 py-5 w-full flex flex-row items-center justify-center' href={changelogURL}>
                            Changelog
                        </Link>
                        <Link className='p-3 py-5 w-full flex flex-row items-center justify-center' href={roadmapURL}>
                            Roadmap
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
            </nav>
        </header>
    );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className='text-sm font-medium leading-none'>{title}</div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
