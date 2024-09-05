'use client';

import { TypeAnimation } from "react-type-animation";
import Navigation from "./Navigation";
import SocialIcons from "./SocialLinks";

function AnimatedTitle() {
    return (
        <TypeAnimation
            sequence={[
                'Frontend Developer',
                1000,
                'UI/UX Developer',
                1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg font-medium whitespace-nowrap md:text-xl"
        />
    );
}

export default function Header() {
    return (
        <header
            id="header"
            className={`flex flex-col justify-center items-start px-responsive-padding-x py-responsive-padding-y gap-5 md:justify-around md:py-0 md:h-screen md:fixed lg:pr-0 lg:py-responsive-padding-y xl:pl-0 xl:py-0`}
        >
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-4xl font-black md:text-5xl">Aryan Soni</h1>
                <AnimatedTitle />
                <p className="mt-2 max-w-60 md:max-w-64">I help individuals and businesses stand out in this digital world.</p>
            </div>
            <Navigation />
            <SocialIcons />
        </header>
    );
}