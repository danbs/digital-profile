import React from "react";
import Container from "./Container";

const Hero = () => {
    return (
        <Container className="mt-9">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Full-stack Developer @ Freelance | Ruby on Rails | Salesforce | Shopify | JavaScript | PHP | HTML |
                    CSS | Client Focused
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">

                    I&#39;m a highly skilled Full Stack Software Developer with 8+ years&#39; expertise in Javascript, Ruby,
                    SQL, PHP, and experience integrating platforms like Shopify, Salesforce, and more. Managed an IT
                    department for the last couple of years, ensuring 95% uptime and 88% adoption for cross-departmental
                    releases within 2 years.
                </p>
            </div>
        </Container>
    );
};

export default Hero;
