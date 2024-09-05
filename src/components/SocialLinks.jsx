import Link from "next/link";
import Image from "next/image";
import LoadData from "@/data/LoadData";


export function Icon({ src, alt, href }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="md:opacity-80 md:hover:opacity-100 md:hover:scale-105"
        >
            <Image
                src={src}
                alt={alt}
                width={25}
                height={25}
            />
        </Link>
    );
}

export default function SocialIcons() {
    const { socialIcons } = LoadData();
    return (
        <div className="flex flex-row justify-center items-center gap-8">
            {socialIcons.map((data, index) => (
                <Icon
                    key={index}
                    src={data.src}
                    alt={data.alt}
                    href={data.href}
                />
            ))}
        </div>
    );
}
