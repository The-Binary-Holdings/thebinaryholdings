"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

const dm_Sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={dm_Sans.className}>
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
