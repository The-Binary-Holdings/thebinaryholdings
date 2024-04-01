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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollPosition } = useDetectScroll();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={scrollPosition.top !== 0}
      className={clsx("px-8 py-4 fixed", isMenuOpen ? "bg-black" : "bg-transparent transition-colors delay-[220ms]")}
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
          <Button className="text-white bg-transparent border px-12 hover:bg-white hover:text-black h-full">
            START A PROJECT
          </Button>
          <NavbarMenuToggle
            className="border px-6 text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-black px-0">
        <NavbarMenuContent/>
      </NavbarMenu>
    </Navbar>
  );
}
