import React from "react";
import { useMediaQuery } from "react-responsive";
import Carousel from "./Carousel";
import CarouselMobile from "./CarouselMobile";

const CarouselIntegrate = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <Carousel />}
      {isTabletOrMobile && <CarouselMobile />}
    </div>
  );
};

export default CarouselIntegrate;
