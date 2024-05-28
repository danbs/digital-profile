import {Card} from "@/components/Card";
import Section from "@/components/Section";
import SimpleLayout from "@/components/SimpleLayout";
import React from "react";

const ToolsSection = ({
                          children,
                          ...props
                      }: React.ComponentPropsWithoutRef<typeof Section>) => {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    );
};

const Tool = ({
                  title,
                  href,
                  children,
              }: {
    title: string;
    href?: string;
    children: React.ReactNode;
}) => {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    );
};

const UsesPage = () => {
    return (
        <SimpleLayout
            title="Software I use, gadgets I love, and other things I recommend."
            intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
        >
            <div className="space-y-20">
                <ToolsSection title="WorkStation">
                    <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
                        I am using an Apple M1 Max 16” MacBook Pro. I’ve never heard the fans turn on a
                        single time, even under the incredibly heavy loads I put it through
                        with our various launch simulations.
                    </Tool>
                    <Tool
                        title="Ultimate Multi-Screen Workstation: Dual 35&rsquo;&rsquo; Portrait Monitors, Ultrawide Display, and Laptop Hub">
                        My workstation setup: two 35&ldquo; Dell monitors in portrait on the sides, a 16&ldquo; laptop screen in the
                        center, and a Dell ultrawide monitor above the laptop.
                    </Tool>
                    <Tool title="Keycrhorn K3 Version 2">
                        The Keycrhon K3 Version 2 offers a nostalgic nod to the past with its IBM Model M SSK Industrial
                        Keyboard design. Built to last, it boasts unmatched durability and tactile feedback, making it a
                        prized possession for keyboard enthusiasts seeking reliability in an age of disposable
                        peripherals
                    </Tool>
                    <Tool title="Apple Magic Mouse and Trackpad">
                        Leveraging both a Magic Mouse and a trackpad on your workstation provides versatility and
                        efficiency in navigation and interaction. Seamlessly switch between the precision of the Magic
                        Mouse for detailed tasks like graphic design or photo editing, and the fluidity of the trackpad
                        for swift gestures and multitasking.
                    </Tool>
                    <Tool title="Herman Miller Aeron Chair">
                        If I’m going to slouch in the worst ergonomic position imaginable
                        all day, I might as well do it in an expensive chair.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="Development tools">
                    <Tool title="IntelliJ Apps">
                        The intelligent code completion and refactoring tools enhance my productivity, while the
                        built-in version control integration simplifies collaboration with team members. With its
                        extensive plugin ecosystem and support for multiple programming languages, IntelliJ adapts
                        seamlessly to my diverse projects and coding needs.
                    </Tool>
                    <Tool title="iTerm2">
                        I’m honestly not even sure what features I get with this that aren’t
                        just part of the macOS Terminal but it’s what I use.
                    </Tool>
                    <Tool title="Postico or DBeaver">
                        Great software for working with databases. Has saved me from
                        building about a thousand admin interfaces for my various projects
                        over the years.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="Design">
                    <Tool title="Figma">
                        We started using Figma as just a design tool but now it’s become our
                        virtual whiteboard for the entire company. Never would have expected
                        the collaboration features to be the real hook.
                    </Tool>
                </ToolsSection>
                <ToolsSection title="Productivity">
                    <Tool title="Alfred">
                        It’s not the newest kid on the block but it’s still the fastest. The
                        Sublime Text of the application launcher world.
                    </Tool>
                    <Tool title="Notion">
                        Using a daily notes system instead of trying to keep things
                        organized by topics has been super powerful for me. And with
                        Reflect, it’s still easy for me to keep all of that stuff
                        discoverable by topic even though all of my writing happens in the
                        daily note.
                    </Tool>
                    <Tool title="SavvyCal">
                        Great tool for scheduling meetings while protecting my calendar and
                        making sure I still have lots of time for deep work during the week.
                    </Tool>
                    <Tool title="Focus">
                        Simple tool for blocking distracting websites when I need to just do
                        the work and get some momentum going.
                    </Tool>
                </ToolsSection>
            </div>
        </SimpleLayout>
    );
};

export default UsesPage;
