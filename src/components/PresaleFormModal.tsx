import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";

const PresaleInfoModal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <span onClick={onOpen} className={className}>
        {children}
      </span>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="dark bg-[#060011] text-white p-5 md:p-14"
        radius="none"
        size="lg"
        classNames={{
          closeButton: "md:top-8 md:right-8 text-lg",
        }}
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-[40px] font-normal w-full items-center">
            $BNRY Early Bird Presale
          </ModalHeader>
          <ModalBody>
            <div className="text-lg space-y-4">
              <p>
                Join us in the Early Bird $BNRY presale, designed for our early supporters and cherished TBH community members. 
                As a token of appreciation for your steadfast support, we've curated a special discount of 25% for this presale along 
                with a bonus token structure for this presale event.
              </p>
              <p>
                Presale Starts at $0.15 with the bonus structure as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transfers Up to 99 USDT: Receive 10% Bonus $BNRY Tokens</li>
                <li>Transfers Between 100-499 USDT: 15% Bonus $BNRY Tokens</li>
                <li>Transfers Between 500-999 USDT: 25% Bonus $BNRY Tokens</li>
                <li>Transfers of 1000 USDT Onwards: 50% Bonus $BNRY Tokens</li>
              </ul>
              <p>
                To participate, transfer your funds (USDT) to the following EVM Wallet Address on the Optimism Chain (Gas Fees on Us):
              </p>
              <p className="font-bold">0xfB1dA2bA2B6c1e73e4Ace7aF2A38Fea4C289508e</p>
              <p>
                50% of BNRY Tokens will be transferred within 48 hours, and the remaining 50% on May 31st, 2024.
              </p>
              <p>
                Don't miss this opportunity to secure your $BNRY tokens at exclusive rates while contributing to the growth of The Binary Holdings community. 
                Join us as we pave the way for a brighter future together.
              </p>
              <p className="font-bold">Optimism Chain ID: <span className="text-normal">Your Chain ID Here</span></p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PresaleInfoModal;
