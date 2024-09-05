import Link from "next/link";
import Image from "next/image";
import { Icon } from "./SocialLinks";

function Icons() {
    const phoneNumber = '+918319313746';
    const message = encodeURIComponent('Hello, I would like to inquire about your services.');

    return (
        <div className="flex gap-5">
            <Icon
                src={`/icons/linkedin.svg`}
                alt={`Linkedin Icon`}
                href={`https://www.linkedin.com/in/aryansoni-work/`}
            />
            <Icon
                src={`/icons/whatsapp.svg`}
                alt={`Whatsapp Icon`}
                href={`https://wa.me/${phoneNumber}?text=${message}`}
            />
        </div>
    );
}

function Message() {
    return (
        <div className="w-full">
            <h5 className="font-semibold text-lg">I&apos;m always up for a chat.</h5>
            <p className="flex flex-row flex-wrap gap-1 pt-2 leading-7">
                <span className="font-semibold text-white underline decoration-dashed underline-offset-4" >pop me an email</span>
                at
                <Link
                    href="mailto:aryansoni.work@gmail.com"
                    className="flex gap-2 items-center group-hover:text-warm-orange"
                >
                    aryansoni.work@gmail.com
                </Link>
                or give me a DM on
                <span className="group-hover:text-warm-orange">Whatsapp.</span>
            </p>
        </div>
    );
}

export default function Footer({ footerRef }) {

    return (
        <footer
            id="footer"
            ref={footerRef}
            className={`h-screen flex flex-col justify-center items-center px-responsive-padding-x md:px-0 md:col-start-2 lg:pr-responsive-padding-y`}
        >
            <div className={`group grid gap-5 bg-custom-card px-responsive-padding-x py-responsive-padding-y border-black-border border-[0.5px] rounded-lg md:px-10 md:py-8`}>
                <h2 className="font-bold text-4xl order-1">Hey there!</h2>
                <Message />
                <Icons />
                <div className="bg-black border-black-border border-[0.5px] flex justify-center items-center rounded-lg lg:flex-grow">
                    <Image
                        src={`/images/my-Avatar.png`}
                        alt={`aryan soni`}
                        height={1000}
                        width={1000}
                        className="object-cover bg-transparent"
                    />
                </div>
            </div>
        </footer>
    );
}