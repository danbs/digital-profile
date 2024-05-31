import React from "react";
import {Container} from "./Container";
import Link from 'next/link'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'

function SocialLink({
                        icon: Icon,
                        ...props
                    }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
        </Link>
    )
}

const Hero = () => {
    return (
        <Container className="mt-9 pt-4">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Full-stack Developer @ Freelance | Ruby on Rails | Salesforce | Shopify | JavaScript | PHP | HTML |
                    CSS | Client Focused
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">

                    I&#39;m a highly skilled Full Stack Software Developer with 8+ years&#39; expertise in Javascript,
                    Ruby,
                    SQL, PHP, and experience integrating platforms like Shopify, Salesforce, and more. Managed an IT
                    department for the last couple of years, ensuring 95% uptime and 88% adoption for cross-departmental
                    releases within 2 years.
                </p>
                <div className="mt-6 flex gap-6">
                    <SocialLink
                        href="https://github.com/danbs"
                        aria-label="Follow on GitHub"
                        icon={GitHubIcon}
                    />
                    <SocialLink
                        href="https://www.linkedin.com/in/dan-sanchez-4389b3b2/"
                        aria-label="Follow on LinkedIn"
                        icon={LinkedInIcon}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Hero;
