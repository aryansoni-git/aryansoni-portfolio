'use client';

import { useEffect, useState } from "react";

export default function useScreenSize(isWidth) {
    const [isScreenSize, setIsScreenSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSize(window.innerWidth < isWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isWidth]);

    return isScreenSize;
}