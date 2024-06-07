import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../style/globals.css";
import {Providers} from "./providers";
import {Layout} from "@/components/Layout";

// import '@/styles/tailwind.css'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: '%s - Dan Sanchez',
        default:
            'Dan Sanchez - Full stack software developer',
    },
    description:
        'I’m Dan, a highly skilled Full Stack Software Developer with 8+ years\' expertise',
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className={`${inter.className} bg-zinc-50 dark:bg-black`}>
        <Providers>
            <div className="flex w-full  overflow-hidden">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    );
}
