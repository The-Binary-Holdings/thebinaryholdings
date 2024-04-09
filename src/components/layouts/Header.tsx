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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollPosition } = useDetectScroll();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={scrollPosition.top !== 0}
      className={clsx(
        "md:px-8 py-4 fixed",
        isMenuOpen
          ? "bg-black"
          : "bg-transparent transition-colors delay-[220ms]"
      )}
      maxWidth="full"
      shouldHideOnScroll
    >
      <NavbarContent>
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
        <NavbarMenuContent/>
      </NavbarMenu>
    </Navbar>
  );
}
