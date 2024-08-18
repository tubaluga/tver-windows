import { useCallback, useEffect, useState } from "react";

export const useDotButton = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onDotButtonClick = useCallback(
        (index) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi],
    );

    const onInit = useCallback((emblaApi) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

export const DotButton = ({ active, onClick }) => {
    return (
        <button type="button" onClick={onClick} className={active ? "text-primary" : "text-secondary-600"}>
            {active ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
            ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="2" fill="currentColor" />
                </svg>
            )}
        </button>
    );
};
