'use client';

import AnimatedCursor from "react-animated-cursor";
import TorchEffect from "./TorchEffect";
import useScreenSize from "./useScreenSize";

export default function MyAnimatedCursor() {
    const isSmallScreen = useScreenSize(640);

    if (isSmallScreen) { return null }

    return (
        <>
            <AnimatedCursor />
            <TorchEffect />
        </>
    );
}