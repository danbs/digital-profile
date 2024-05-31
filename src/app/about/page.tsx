import {Container} from "@/components/Container";
import React from "react";
// import portraitImage from '@/img/IMG_8139.jpg'
import Image from "next/image";
import Link from 'next/link'
import clsx from 'clsx'

import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/img/IMG_8139.jpg'

function SocialLink({
                        className,
                        href,
                        children,
                        icon: Icon,
                    }: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

const AboutPage = () => {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt="image"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I am Dan Sanchez, based near the Silicon Slopes area in Utah, delivering tailored
                        crafted solutions that ignite success.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            Inspired by a passion for creativity and crafting, my journey into the realm of programming
                            began with IT 101 in college. It was here that I discovered the profound ability to bring
                            ideas to life through code, fueling my love for creation.
                        </p>
                        <p>
                            Beyond my professional endeavors, my life is enriched by the love and support of my wife and
                            daughter.
                            They have been my pillars of strength, encouraging me to pursue my dreams and cheering me on
                            through every challenge and triumph. Their unwavering belief in me fuels my determination to
                            excel in all aspects of life.
                        </p>
                        <p>
                            When I am not immersed in lines of code, you can often find me exploring the great outdoors.
                            Also, soccer is my passion and I follow almost all european and international greatest
                            leagues and competitions.
                        </p>
                        <p>
                            My curiosity knows no bounds, and I a constantly seeking new experiences and knowledge.
                            Whether it is delving into the latest technology trends, experimenting with a new recipe in
                            the kitchen, or losing myself in the pages of a captivating book, I thrive on the thrill of
                            discovery.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        {/*<SocialLink href="#" icon={XIcon}>*/}
                        {/*    Follow on X*/}
                        {/*</SocialLink>*/}
                        {/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}
                        {/*    Follow on Instagram*/}
                        {/*</SocialLink>*/}
                        <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                            Follow on GitHub
                        </SocialLink>
                        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                            Follow on LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:danb.sanchez@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            danb.sanchez@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default AboutPage;
