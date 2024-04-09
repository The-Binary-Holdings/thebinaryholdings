import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title:
    "The Binary Holdings (TBH) - The Web3 Infrastructure Provider For Telcos",
  description:
    "The Binary Holdings empowers developing and emerging economies by providing a web3 infrastructure that offers scalable, low-cost, and efficient web3 infrastructure services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <body>
        {children}
        <Analytics />
      </body>
    </Layout>
  );
}
