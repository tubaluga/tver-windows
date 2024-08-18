import { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = ({ onClick, disabled }) => {
    return (
        <button type="button" className={disabled ? "text-secondary-600" : "text-primary"} onClick={onClick}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M14.5 18L8.5 12L14.5 6L15.9 7.4L11.3 12L15.9 16.6L14.5 18Z" fill={"currentColor"} />
            </svg>
        </button>
    );
};

export const NextButton = ({ onClick, disabled }) => {
    return (
        <button type="button" className={disabled ? "text-secondary-600" : "text-primary"} onClick={onClick}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1 12L8.5 7.4L9.9 6L15.9 12L9.9 18L8.5 16.6L13.1 12Z" fill="currentColor" />
            </svg>
        </button>
    );
};
