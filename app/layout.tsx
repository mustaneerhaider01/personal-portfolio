import ClientProvider from "@/components/ClientProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mustaneer's Portfolio",
  description:
    "Explore the creative works of Mustaneer Haider, a talented web developer. This personal portfolio website showcases a diverse collection of stunning and innovative projects.",
};

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
