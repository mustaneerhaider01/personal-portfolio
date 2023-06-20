import ClientProvider from "@/components/ClientProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { fetchPageInfo } from "@/utils/fetchers";

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
