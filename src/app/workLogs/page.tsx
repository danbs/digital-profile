import {Card} from "@/components/Card";
import {SimpleLayout} from "@/components/SimpleLayout";
import {WorkLogWithSlug, getAllWorkLogs} from "@/lib/workLog";
import {formatDate} from "@/lib/formateDate";
import React from "react";

const WorkLog = ({workLog}: { workLog: WorkLogWithSlug }) => {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/workLogs/${workLog.slug}`}>
                    {workLog.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={workLog.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(workLog.date)}
                </Card.Eyebrow>
                <Card.Description>{workLog.description}</Card.Description>
                <Card.Cta>Read Log</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={workLog.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(workLog.date)}
            </Card.Eyebrow>
        </article>
    );
};

const WorkLogPage = async () => {
    const workLogs = await getAllWorkLogs();
    return (
        <SimpleLayout
            title="Writing on software design, company building, and the aerospace industry."
            intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        >
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {workLogs.map((workLog) => (
                        <WorkLog key={workLog.slug} workLog={workLog}/>
                    ))}
                </div>
            </div>
        </SimpleLayout>
    );
};

export default WorkLogPage;
