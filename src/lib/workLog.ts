import glob from "fast-glob";

interface WorkLog {
    title: string;
    description: string;
    author: string;
    date: string;
}

export interface WorkLogWithSlug extends WorkLog {
    slug: string;
}

export async function importWorkLog(
    workLogFilename: string
): Promise<WorkLogWithSlug> {
    let {workLog} = (await import(`../app/workLogs/${workLogFilename}`)) as {
        default: React.ComponentType;
        workLog: WorkLog;
    };
    return {
        slug: workLogFilename.replace(/(\/page)?\.mdx$/, ""),
        ...workLog,
    };
}

export async function getAllWorkLogs() {
    let workLogFilenames = await glob("*/page.mdx", {
        cwd: "./src/app/workLogs",
    });
    let workLogs = await Promise.all(workLogFilenames.map(importWorkLog));
    return workLogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
