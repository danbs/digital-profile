import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Providers } from "./providers";
import {Layout} from "@/components/Layout";

// import '@/styles/tailwind.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dan Sanchez's Digital Profile",
  description: "Developed by Dan Sanchez",
};

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
