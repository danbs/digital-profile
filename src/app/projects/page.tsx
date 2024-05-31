import {SimpleLayout} from "@/components/SimpleLayout";
import React from "react";
import logoAnimaginary from "@/img/solar.png";
import logoCosmos from "@/img/hd-favi.png";
import logoHelioStream from "@/img/bscs.png";
import logoOpenShuttle from "@/img/rlogo.png";
import logoPlanetaria from "@/img/icon-fav.png";
import {type Metadata} from "next";
import {Card} from "@/components/Card";
import Image from "next/image";
import {GoLink} from "react-icons/go";

export const metadata: Metadata = {
    title: "Projects",
    description: "Each project featured here demonstrates not only my technical proficiency but also my adaptability " +
        "in navigating challenges and seizing opportunities in dynamic environments. From inception to execution, " +
        "\I have played a pivotal role in driving projects forward, leveraging my skills in [mention specific skills " +
        "such as project management, leadership, technical expertise, etc.] to deliver tangible outcomes.",
};

const ProjectPage = () => {
    const projects = [
        {
            name: "Data Income Pro",

            description:
                "CRM system customized for lead management and sales tracking",
            status: 'active',
            link: {href: "https://data.clickincomepro.cc/", label: "data.clickincomepro.cc"},
            logo: logoPlanetaria,
        },
        {
            name: "PWRStation",
            status: 'offline',
            description:
                "CRM system in charge of onboarding, sales KPI tracking, and solar proposals streamline",
            link: {href: "http://pwrstation.horizonpwr.com/", label: "pwrstation.horizonpwr.com"},
            logo: logoAnimaginary,
        },
        {
            name: "Bellingham Cold Storage",
            status: 'active',
            description:
                "Commercial website and business tools",
            link: {href: "https://www.bellcold.com/", label: "bellcold.com"},
            logo: logoHelioStream,
        },
        {
            name: "Hogg & Davies",
            status: 'active',
            description:
                "Commercial website, inventory management and communication capabilities",
            link: {href: "https://hoggdavis.com/", label: "hoggdavis.com"},
            logo: logoCosmos,
        },
        {
            name: "SwiftThis",
            status: 'archived',
            description:
                "CRM for leads management tool",
            link: {href: "https://admin.swiftthis.com/", label: "admin.swiftthis.com"},
            logo: logoOpenShuttle,
        },
    ];
    return (
        <SimpleLayout
            title="Things I’ve made trying to put my dent in the universe."
            intro="Each project featured here demonstrates not only my technical proficiency but also my adaptability in navigating challenges and seizing opportunities in dynamic environments. From inception to execution, I have played a pivotal role in driving projects forward, leveraging my skills in [mention specific skills such as project management, leadership, technical expertise, etc.] to deliver tangible outcomes."
        >
            {/*<h2 className="mt-16 text-2xl font-bold tracking-tight mb-5">Active Projects</h2>*/}

            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >

                {projects.map((project) => (
                    <Card as="li" key={project.name}>
                        <div
                            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt="logo"
                                className="h-8 w-8"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                            &nbsp;
                            &nbsp;
                            {project.status === 'active' ? <span
                                className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Online
                                        </span> : project.status === 'offline' ? <span
                                className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                        Offline
                                        </span> : project.status === 'archived' ? <span
                                className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                        Archived
                                        </span> : ''}


                        </h2>

                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-100">
                            <GoLink className="text-lg flex-none"/>
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    );
};

export default ProjectPage;
