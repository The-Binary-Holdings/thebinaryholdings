import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarMenuItem,
  Accordion,
  AccordionItem,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import clsx from "clsx";
import { headerItem } from "@/common/constants/header";
import { FiArrowDownRight } from "react-icons/fi";
import EmailFormModal from "../EmailFormModalWithoutTrigger";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollPosition } = useDetectScroll();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <EmailFormModal
        className="cursor-pointer"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={scrollPosition.top !== 0}
        className={clsx(
          "md:px-8 py-2 fixed z-50",
          isMenuOpen
            ? "bg-black"
            : "bg-transparent transition-colors delay-[220ms]"
        )}
        maxWidth="full"
        shouldHideOnScroll
      >
        <NavbarContent className="xl:px-16 w-full">
          <div className="flex w-full justify-between items-center border-b h-full border-white/30">
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
            <div
              className={clsx(
                "md:h-3/4 space-x-5 xl:space-x-10 items-center text-white h-full hidden lg:flex"
              )}
            >
              {headerItem.map((i, index) => {
                if (i.type === "button")
                  return (
                    <NavbarItem key={index} className="md:inline-block hidden">
                      <Link href={i.href ? i.href : ""} className="text-white">
                        {i.title}
                      </Link>
                    </NavbarItem>
                  );
                else
                  return (
                    <NavbarItem key={index} className="md:inline-block hidden">
                      <Dropdown className="bg-black/60 text-[#ADA0FF] backdrop-blur-md mt-3 rounded-t-none shadow-sm shadow-white/20">
                        <DropdownTrigger className=" ">
                          <button className="text-white flex space-x-3 items-center focus-visible:outline-none">
                            {i.title}
                            <FiArrowDownRight className="text-xl" />
                          </button>
                        </DropdownTrigger>
                        <DropdownMenu
                          aria-label="Dropdown Variants"
                          variant="light"
                        >
                          {i.subHeaderItems.map((si, index) => {
                            if (si.title.toLowerCase() == "get in touch")
                              return (
                                <DropdownItem
                                  key={index}
                                  className=" last:border-b-0 border-b border-white/30 rounded-none"
                                >
                                  <span onClick={onOpen}>{si.title}</span>
                                </DropdownItem>
                              );
                            else
                              return (
                                <DropdownItem
                                  key={index}
                                  className=" last:border-b-0 border-b border-white/30 rounded-none"
                                >
                                  <Link
                                    className="text-[#ADA0FF]"
                                    href={si.href}
                                    target={si.isBlank ? "_blank" : "_self"}
                                  >
                                    {si.title}
                                  </Link>
                                </DropdownItem>
                              );
                          })}
                        </DropdownMenu>
                      </Dropdown>
                    </NavbarItem>
                  );
              })}
            </div>
            <NavbarItem className="lg:hidden">
              <NavbarMenuToggle
                className="text-white !size-10"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </NavbarItem>
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-black px-8 sm:px-12   py-10">
          {headerItem.map((item, index) => {
            if (item.type === "button")
              return (
                <NavbarMenuItem key={`${item}-${index}`} className="py-4">
                  <Link
                    className="w-full px-2 text-white"
                    href={item.href ? item.href : ""}
                  >
                    {item.title}
                  </Link>
                </NavbarMenuItem>
              );
            else
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Accordion className="!text-white">
                    <AccordionItem
                      title={item.title}
                      className="flex flex-col !text-white py-0"
                      classNames={{ title: "!text-white" }}
                    >
                      <div className="w-full flex flex-col px-4">
                        {item.subHeaderItems.map((i, indx) => {
                          return (
                            <Link
                              className="w-full py-4 text-white"
                              href={i.href ? i.href : ""}
                              key={indx}
                              target={i.isBlank ? "_blank" : "_self"}
                            >
                              {i.title}
                            </Link>
                          );
                        })}
                      </div>
                    </AccordionItem>
                  </Accordion>
                </NavbarMenuItem>
              );
          })}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
