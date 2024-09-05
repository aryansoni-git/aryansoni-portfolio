import AnimatedCursor from "react-animated-cursor";
import TorchEffect from "@/components/TorchEffect";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Soni | Frontend Developer & UI/UX Developer | Web Development Solutions",
  description: "Experienced Frontend & UI/UX Developer in Jabalpur. Specializing in responsive, dynamic web applications with expertise in HTML, CSS, JavaScript, React, Next.js and Tailwind CSS. Let's innovate together!",
  icons: {
    icon: '/icons/logo.svg',
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`h-full w-full text-white bg-black md:grid md:grid-cols-2 xl:px-48 ${inter.className}`} >
        <AnimatedCursor />
        <TorchEffect />
        {children}
      </body>
    </html>
  );
}