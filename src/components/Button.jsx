import Link from 'next/link';

export default function Button({ href, text, addClassName }) {
    return (
        <Link
            href={href}
            target='_blank'
            rel='noopener'
            className={`${addClassName} bg-warm-orange rounded-md px-5 py-3 text-center content-center hover:bg-warm-orange hover:border-warm-orange transition-colors duration-300 ease-in-out
            md:border-light-white md:bg-transparent md:border-[0.5px]`}
        >
            {text}
        </Link>
    );
}