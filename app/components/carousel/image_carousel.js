"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./dot_button";
import { NextButton, PrevButton, usePrevNextButtons } from "./arrow_button";

const ImageSlide = ({ image }) => {
    return (
        <div className="flex-none basis-[100%] md:basis-1/2 lg:basis-1/2 xl:basis-1/3 min-w-0 md:pl-10">
            <div className="flex justify-center h-[399px] relative ">
                {<Image src={image} alt="Slide image" fill style={{ objectFit: "contain" }} sizes="100hv" />}
            </div>
        </div>
    );
};

const ImageSlide1 = ({ image }) => {
    return <Image src={image} alt="Slide image" width={399} height={399} />;
};

const ImageCarousel = ({ images }) => {
    const [emlaRef, emblaApi] = useEmblaCarousel({ align: "start" });
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <div>
            <div className="overflow-hidden w-full md:-ml-10" ref={emlaRef}>
                <div className="flex">
                    {images.map((image, index) => (
                        <ImageSlide key={index} image={image} />
                    ))}
                </div>
            </div>
            <div className="flex lg:py-12 py-6 gap-8 justify-center">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <div className="flex gap-6">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            active={index === selectedIndex}
                            onClick={() => onDotButtonClick(index)}
                        />
                    ))}
                </div>
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    );
};

export default ImageCarousel;
