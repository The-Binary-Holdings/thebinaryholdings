"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./layouts/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500"
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
};

export default Layout;
