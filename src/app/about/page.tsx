import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/IMG_8139.jpg'

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

export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Dan Sanchez. I am located by the Lehi area in Utah where I\'m assisting business.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I'm Dan Sanchez, based near the Silicon Slopes area in Utah, delivering tailored
                        crafted solutions that ignite success.

                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            Inspired by a passion for creativity and crafting, my journey into the realm of programming
                            began with IT 101 in college. It was here that I discovered the profound ability to bring
                            ideas to life through code, fueling my love for creation.
                        </p>
                        <p>
                            The only thing I loved more than crafting things
                            The only thing I loved more than computers as a kid was space.
                            When I was 8, I climbed the 40-foot oak tree at the back of our
                            yard while wearing my older sister’s motorcycle helmet, counted
                            down from three, and jumped — hoping the tree was tall enough that
                            with just a bit of momentum I’d be able to get to orbit.
                        </p>
                        <p>
                            I spent the next few summers indoors working on a rocket design,
                            while I recovered from the multiple surgeries it took to fix my
                            badly broken legs. It took nine iterations, but when I was 15 I
                            sent my dad’s Blackberry into orbit and was able to transmit a
                            photo back down to our family computer from space.
                        </p>
                        <p>
                            Today, I’m the founder of Planetaria, where we’re working on
                            civilian space suits and manned shuttle kits you can assemble at
                            home so that the next generation of kids really <em>can</em> make
                            it to orbit — from the comfort of their own backyards.
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
    )
}
