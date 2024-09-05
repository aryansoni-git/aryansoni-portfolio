'use client'; // Ensure this is a client-side component

import { useEffect } from 'react';
import useScreenSize from './useScreenSize';

export default function TorchEffect() {
    const isMediumScreen = useScreenSize(768);

    useEffect(() => {
        const torch = document.getElementById('torch');

        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Update the background position based on the mouse position
            torch.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 72, 0, 0.12), transparent 80%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        !isMediumScreen && (
            <div className="w-full h-screen pointer-events-none fixed inset-0 -z-30 transition duration-300" id="torch"></div>
        )
    );
};
