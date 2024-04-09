import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import clsx from "clsx";
import NavbarMenuContent from "./NavbarMenuContent";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollPosition } = useDetectScroll();
  const [isBannerOpen, setIsBannerOpen] = React.useState(true);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={scrollPosition.top !== 0}
        className={clsx(
          "md:px-8 py-4 fixed",
          isBannerOpen && "!pt-0 !px-0",
          isMenuOpen
            ? "bg-black"
            : "bg-transparent transition-colors delay-[220ms]"
        )}
        maxWidth="full"
        shouldHideOnScroll
        classNames={{
          wrapper: isBannerOpen ? "flex flex-col h-52 px-0" : "flex flex-col",
          content: "w-full",
        }}
      >
        {isBannerOpen && !isMenuOpen && (
          <NavbarContent>
            <a
              href="https://app.v2.fjordfoundry.com/pools/0x0747dDa359C8b3D9145695aE8271A6a0EB0d2217"
              className="w-full h-full bg-black text-white flex items-center justify-center md:px-16 py-10"
            >
              $BNRY Presale 1 is live!{" "}
              <LiaTimesSolid
                className="absolute right-16"
                onClick={(e) => {
                  e.preventDefault();
                  setIsBannerOpen(false);
                }}
              />
            </a>
          </NavbarContent>
        )}
        <NavbarContent className="md:px-16">
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/logos/tbh-logo.svg"
                alt="logo"
                width={100}
                height={20}
              />
            </Link>
          </NavbarBrand>
          <div className="flex h-3/4 space-x-4">
            {/* <Button className="text-white group bg-transparent border px-12 hover:bg-white hover:text-black h-full hidden md:block">
            <p className="h group-hover:-translate-x-4 transition-transform relative flex items-center">
              START A PROJECT
              <IoIosArrowRoundForward className="absolute top-[-2px] -right-6 bottom-0 text-2xl opacity-0 transition-opacity group-hover:opacity-100"/>
            </p>
          </Button> */}
            <NavbarMenuToggle
              className="border px-6 text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              id="menu-toggle"
            />
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-black px-0">
          <NavbarMenuContent />
        </NavbarMenu>
      </Navbar>
    </>
  );
}
