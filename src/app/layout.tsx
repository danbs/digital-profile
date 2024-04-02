import {type Metadata} from 'next'

import {Providers} from '@/app/providers'
import {Layout} from '@/components/Layout'

import '@/styles/tailwind.css'
export const metadata: Metadata = {
    title: {
        template: '%s - Dan Sanchez',
        default:
            'Dan Sanchez - Full-stack Developer @ Freelance | Ruby on Rails | JavaScript | PHP | HTML | CSS | Client Focused',
    },
    description:
        "I'm a highly skilled Full Stack Software Developer with 8+ years\' expertise in Javascript, Ruby, SQL, PHP, and experience integrating platforms like Shopify, Salesforce, and more. Managed an IT department for the last couple of years, ensuring 95% uptime and 88% adoption for cross-departmental releases within 2 years.",
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
            <div className="flex w-full">
                <Layout>{children}</Layout>
            </div>
        </Providers>
        </body>
        </html>
    )
}
