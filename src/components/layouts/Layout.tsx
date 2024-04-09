"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Header";
import Footer from "./Footer";
import Provider from "../Provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default Layout;
