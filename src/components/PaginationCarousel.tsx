"use client";
import { useState, useEffect, useRef, ReactNode, useContext } from "react";
import clsx from "clsx";
import { ProviderContext } from "./Provider";
import { Button, Pagination } from "@nextui-org/react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const PaginationCarousel = ({
  children,
  className,
  numberChildren,
}: {
  children: ReactNode;
  className?: string;
  numberChildren: number;
}) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);
  const [isDisable, setIsDisable] = useState<boolean>();
  const { data } = useContext(ProviderContext);

  useEffect(() => {
    if (!carousel.current) return;

    const setDisable = () => {
      setIsDisable(true);
    };

    const setable = () => {
      setIsDisable(false);
    };

    carousel.current.addEventListener("scroll", setDisable);
    carousel.current.addEventListener("scrollend", setable);

    return () => {
      carousel.current?.removeEventListener("scroll", setDisable);
      carousel.current?.removeEventListener("scrollend", setable);
    };
  }, []);

  useEffect(() => {
    if (!carousel.current) return;
    if (currentPage === prevPage) return;

    const isNext = currentPage > prevPage;

    var itemWidth = 0;
    const greatThanValue = currentPage > prevPage ? currentPage : prevPage;
    const lessThanValue = currentPage < prevPage ? currentPage : prevPage;

    (carousel.current.childNodes as NodeListOf<HTMLElement>).forEach(
      (item, index) => {
        const realIndex = index + 1;

        if (isNext && realIndex === lessThanValue) return;
        if (!isNext && realIndex === greatThanValue) return;

        if (lessThanValue <= realIndex && realIndex <= greatThanValue) {
          itemWidth += item.clientWidth;
        }
      }
    );

    if (isNext) carousel.current.scrollLeft += itemWidth;

    if (!isNext) carousel.current.scrollLeft += -itemWidth;

    setPrevPage(currentPage);
  }, [currentPage, prevPage]);

  return (
    <div
      className={clsx(
        "wrapper transition-[height] ease-in-out md:px-0 w-full flex flex-col items-center h-full",
        className
      )}
    >
      <div
        className={clsx(
          " grid-flow-col grid overflow-x-hidden scroll-smooth no-scrollbar w-full grow"
        )}
        ref={carousel}
      >
        {children}
      </div>

      <div className="flex gap-2 items-center mt-8 grow-0">
        <div
          onClick={() => {
            if (isDisable) return;
            setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
          }}
        >
          <GoArrowLeft className="text-white cursor-pointer" />
        </div>
        <Pagination
          total={numberChildren}
          page={currentPage}
          onChange={setCurrentPage}
          classNames={{
            wrapper: "gap-0 overflow-visible h-8 border border-divider",
            item: "w-8 h-7 text-small bg-transparent text-[#838383]",
            cursor: "bg-white text-black rounded-md h-7",
          }}
        />
        <div
          onClick={() => {
            if (isDisable) return;
            setCurrentPage((prev) => (prev < numberChildren ? prev + 1 : prev));
          }}
        >
          <GoArrowRight className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PaginationCarousel;
