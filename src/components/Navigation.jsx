import { useState, useEffect } from "react";
import useScreenSize from "./useScreenSize";
import Link from "next/link";

// NavItem Component
function NavItem({ text, href, isActive, onClick }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex justify-start items-center gap-2 text-base transition-all duration-300 ease-in-out group`}>
            <span
                className={`h-[1px] transition-all duration-300 ease-in-out group-hover:bg-warm-orange group-hover:w-16 
                ${isActive ? 'bg-warm-orange w-16' : 'bg-light-white w-8'}`}>
            </span>
            <span
                className={`transition-colors duration-300 ease-in-out group-hover:text-warm-orange group-hover:font-semibold
                ${isActive ? 'text-warm-orange font-bold' : 'text-light-white'}`}>
                {text}
            </span>
        </Link>
    );
}

// Navigation Component
export default function Navigation() {
    const [isActive, setIsActive] = useState(`/#about`);
    const isMediumScreen = useScreenSize(768);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('footer');

            const scrollPosition = window.scrollY;

            let newActiveSection = isActive;

            if (aboutSection.offsetTop <= scrollPosition + 100 && scrollPosition < projectsSection.offsetTop - 100) {
                newActiveSection = "/#about";
            } else if (projectsSection.offsetTop <= scrollPosition + 100 && scrollPosition < contactSection.offsetTop - 100) {
                newActiveSection = "/#projects";
            } else if (contactSection.offsetTop <= scrollPosition + 100) {
                newActiveSection = "/#footer";
            }

            if (newActiveSection !== isActive) {
                setIsActive(newActiveSection);
                window.history.pushState(null, '', newActiveSection); // Update the URL without reloading
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive]);

    const handleNavItemClick = (href) => {
        setIsActive(href);
        window.history.pushState(null, '', href); // Update the URL when clicking on a nav item
    };

    return (
        !isMediumScreen && (
            <nav className="flex flex-col gap-4">
                <NavItem
                    text="About"
                    href="/#about"
                    isActive={isActive === "/#about"}
                    onClick={() => handleNavItemClick("/#about")}
                />
                <NavItem
                    text="Projects"
                    href="/#projects"
                    isActive={isActive === "/#projects"}
                    onClick={() => handleNavItemClick("/#projects")}
                />
                <NavItem
                    text="Contact"
                    href="/#footer"
                    isActive={isActive === "/#footer"}
                    onClick={() => handleNavItemClick("/#footer")}
                />
            </nav>
        )
    );
}
