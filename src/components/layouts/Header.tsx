import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="px-8 py-4 bg-transparent fixed"
      maxWidth="full"
      isBlurred={false}
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

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="">
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
