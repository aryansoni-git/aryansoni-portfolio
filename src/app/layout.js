import MyAnimatedCursor from "@/components/MyAnimatedCursor";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Soni | Frontend Developer & UI/UX Developer | Web Development Solutions | Jabalpur",
  description: "Experienced Frontend & UI/UX Developer in Jabalpur. Specializing in responsive, dynamic web applications with expertise in HTML, CSS, JavaScript, React, Next.js and Tailwind CSS. Let's innovate together!",
  icons: {
    icon: '/icons/logo.svg',
  },
  metadataBase: new URL("https://aryansoni.vercel.app/"),
  openGraph: {
    title: "Aryan Soni | Frontend & UI/UX Developer | Web Development",
    description: "Experienced Frontend & UI/UX Developer in Jabalpur. Specializing in specializing in responsive web apps with expertise in HTML, CSS, JavaScript, React, Next.js and Tailwind CSS. Let's build digital solutions!",
    url: "https://aryansoni.vercel.app/",
    type: "website",
    images: [
      {
        url: "/projects/aryansoni.png",
        alt: "Aryan Soni | Frontend & UI/UX Developer | Web Development",
      },
    ],
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`h-full w-full text-white bg-black md:grid md:grid-cols-2 xl:px-48 ${inter.className}`} >
        <MyAnimatedCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
