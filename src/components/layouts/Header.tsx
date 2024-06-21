import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  NavbarItem,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import Image from "next/image";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import clsx from "clsx";
import NavbarMenuContent from "./NavbarMenuContent";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import Link from "next/link";
import NavbarMenuContentMobile from "./NavbarMenuContentMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollPosition } = useDetectScroll();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [copied, setCopied] = useState(false);
  const address = "0xfB1dA2bA2B6c1e73e4Ace7aF2A38Fea4C289508e";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2s
    });
  };
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={scrollPosition.top !== 0}
        className={clsx(
          "md:px-8 py-2 fixed",
          isMenuOpen
            ? "bg-black"
            : "bg-transparent transition-colors delay-[220ms]"
        )}
        maxWidth="full"
        shouldHideOnScroll
      >
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
          <div
            className={clsx(
              "flex md:h-3/4 space-x-10 items-center text-white h-full"
            )}
          >
            {/* <Button className="text-white group bg-transparent border px-12 hover:bg-white hover:text-black h-full hidden md:block">
            <p className="h group-hover:-translate-x-4 transition-transform relative flex items-center">
              START A PROJECT
              <IoIosArrowRoundForward className="absolute top-[-2px] -right-6 bottom-0 text-2xl opacity-0 transition-opacity group-hover:opacity-100"/>
            </p>
          </Button> */}
            <NavbarItem>
              {/* <Button className="text-white bg-black" href="https://www.bnrytoken.com/presale" as={Link} target="_blank">
                Presale is live!
              </Button> */}
            </NavbarItem>
            {/* <NavbarItem>
              <Link
                href="https://docs.thebinaryholdings.com/"
                className="text-white"
              >
                Documentation
              </Link>
            </NavbarItem> */}
            <NavbarItem className="md:inline-block hidden">
              <Link href="/team" className="text-white">
                Team
              </Link>
            </NavbarItem>
            <NavbarItem className="md:inline-block hidden">
              <Link href="/blogs" className="text-white">
                Blog
              </Link>
            </NavbarItem>
            <NavbarMenuToggle
              className="border px-6 text-white h-3/4"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              id="menu-toggle"
            />
          </div>
        </NavbarContent>

        <NavbarMenu className="bg-black px-0">
          <NavbarMenuContent />
          <NavbarMenuContentMobile />
        </NavbarMenu>
      </Navbar>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="dark text-white bg-[#0E0E10] p-5 md:p-10 md:top-8 md:right-8 text-lg max-w-6xl mx-auto h-full overflow-y-auto" // Adjusted padding for consistent spacing
        radius="none"
        size="lg"
        backdrop="blur"
        classNames={{
          wrapper: "items-start",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 h-full text-[40px] font-normal items-center justify-center">
            $BNRY Early Bird Presale
          </ModalHeader>
          <ModalBody>
            <div className="text-lg space-y-4">
              <p>
                Join us in the Early Bird $BNRY presale, designed for our early
                supporters and cherished TBH community members. As a token of
                appreciation for your steadfast support, we&apos;ve curated a
                special discount for this presale along with a bonus token
                structure for this presale event.
              </p>
              <p>
                Presale price is at $0.15 with the bonus structure as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p>Transfers Up to 99 USDT: Receive 10% Bonus $BNRY Tokens</p>
                  <ul className="list-inside space-y-2">
                    <li className="text-sm">
                      For example, if you transfer 60 USDT, You Get Total 440
                      $BNRY Tokens (400 $BNRY Tokens at $0.15 and 40 $BNRY
                      Tokens as a Bonus)
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Transfers Between 100-499 USDT: 15% Bonus $BNRY Tokens</p>
                  <ul className="list-inside space-y-2">
                    <li className="text-sm">
                      For example, if you transfer 450 USDT, You Get Total 3450
                      $BNRY Tokens (3000 $BNRY Tokens at $0.15 and 450 $BNRY
                      Tokens as a Bonus)
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Transfers Between 500-999 USDT: 25% Bonus $BNRY Tokens</p>
                  <ul className="list-inside space-y-2">
                    <li className="text-sm">
                      For example, if you transfer 900 USDT, You Get Total 7500
                      $BNRY Tokens (6000 $BNRY Tokens at $0.15 and 1500 $BNRY
                      Tokens as a Bonus)
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Transfers of 1000 USDT Onwards: 50% Bonus $BNRY Tokens</p>
                  <ul className="list-inside space-y-2">
                    <li className="text-sm">
                      For example, if you transfer 1200 USDT, You Get Total
                      12,000 $BNRY Tokens (8000 $BNRY Tokens at $0.15 and 4000
                      $BNRY Tokens as a Bonus)
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Transfers of 5000 USDT Onwards: 75% Bonus $BNRY Tokens</p>
                  <ul className="list-inside space-y-2">
                    <li className="text-sm">
                      For example, if you transfer 6000 USDT, You Get Total
                      70,000 $BNRY Tokens (40,000 $BNRY Tokens at $0.15 and
                      30,000 $BNRY Tokens as a Bonus)
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Transfers of 10000 USDT Onwards: 100% Bonus $BNRY Tokens
                  </p>
                  <ul className="list-inside space-y-2">
                    <li className="text-sm">
                      For example, if you transfer 12,000 USDT, You Get Total
                      160,000 $BNRY Tokens (80,000 $BNRY Tokens at $0.15 and
                      80,000 $BNRY Tokens as a Bonus)
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-100 text-black break-words">
                <p className="font-bold text-red-800">
                  Important: Ensure You Are on the Optimism Mainnet and
                  transferring USDT.
                </p>

                <ul className="list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Network Name: </span>
                    Optimism
                  </li>
                  <li>
                    <span className="font-semibold">Chain ID: </span>10
                  </li>
                  <li>
                    <span className="font-semibold">Public RPC Endpoint: </span>
                    <Link href={"https://mainnet.optimism.io/"}>
                      https://mainnet.optimism.io/
                    </Link>
                  </li>
                  <li>
                    <span className="font-semibold">Block Explorer: </span>
                    <Link href={"https://explorer.optimism.io"}>
                      https://explorer.optimism.io
                    </Link>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Adding network to EVM-Wallet (Guide):{" "}
                    </span>
                    <Link
                      href={
                        "https://www.coingecko.com/learn/add-optimism-op-to-metamask"
                      }
                    >
                      https://www.coingecko.com/learn/add-optimism-op-to-metamask
                    </Link>
                  </li>
                  <li>
                    <span className="font-semibold">
                      Swapping USDT (Guide):{" "}
                    </span>
                    <Link href={"https://app.uniswap.org/swap?chain=optimism"}>
                      https://app.uniswap.org/swap?chain=optimism
                    </Link>
                  </li>
                </ul>
              </div>
              <p>
                To participate, transfer your funds (USDT) to the following EVM
                Wallet Address on the Optimism Chain (Gas Fees on Us):
              </p>
              <div className="mt-4 p-4 border-l-4 border-green-600 bg-green-200 relative">
                <p className="font-bold text-lg md:text-2xl text-black text-center break-words">
                  {address}
                  <button
                    onClick={() => copyToClipboard(address)}
                    className="pl-4 right-4 top-4 text-lg md:text-2xl"
                    aria-label="Copy address"
                  >
                    <FiCopy />
                  </button>
                </p>
                {copied && (
                  <span className="text-black text-center">Copied!</span>
                )}
              </div>
              <p>
                50% of BNRY Tokens will be transferred within 48 hours, and the
                remaining 50% on May 31st, 2024.
              </p>
              <p>
                Don&apos;t miss this opportunity to secure your $BNRY tokens at
                exclusive rates while contributing to the growth of The Binary
                Holdings community. Join us as we pave the way for a brighter
                future together.
              </p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
