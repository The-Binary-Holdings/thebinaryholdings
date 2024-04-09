"use client";
import { useState, useEffect, useRef, ReactNode, useContext } from "react";
import clsx from "clsx";
import { ProviderContext } from "./Provider";
import {BUSINESSES} from "@/common/constants";

const Carousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const { data } = useContext(ProviderContext);

  useEffect(() => {
    let index = BUSINESSES.findIndex((business) => business.name === data.name);
    carousel.current!.scrollLeft = itemWidth * index;
  }, [data, itemWidth])

  const dragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // Records the initial cursor and scroll position of the carousel
    setStartX(e.pageX);
    setStartScrollLeft(carousel.current!.scrollLeft);
  };

  const dragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.current!.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    setItemWidth(
      (carousel.current?.childNodes[0] as HTMLElement)?.offsetWidth ?? 0
    );
    window.addEventListener("mouseup", dragStop);

    return () => {
      window.removeEventListener("mouseup", dragStop);
    };
  }, [itemWidth]);

  return (
    <div className={clsx("relative wrapper transition-[height] ease-in-out md:px-0 w-full", className)}>
      <div
        className={clsx(
          "grid grid-flow-col overflow-x-auto scroll-smooth no-scrollbar gap-x-4 md:gap-x-10 py-14 md:py-20 px-4 lg:px-16 w-full cursor-grab overflow-y-hidden",
          isDragging && "cursor-grabbing"
        )}
        ref={carousel}
        onMouseDown={dragStart}
        onMouseMove={dragging}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
