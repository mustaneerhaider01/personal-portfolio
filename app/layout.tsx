import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import ClientProvider from "@/components/ClientProvider";
import { fetchPageInfo } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider />

        {children}
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const pageInfo = await fetchPageInfo();

  return {
    title: pageInfo.name,
    description: pageInfo.backgroundInformation,
  };
}
