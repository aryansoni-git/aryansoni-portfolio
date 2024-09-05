'use client';

import Image from 'next/image';
import Button from './Button';
import LoadData from '@/data/LoadData';
import useScreenSize from './useScreenSize';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css';

function SwiperIcons({ isTop, isLeft }) {
    const isMediumScreen = useScreenSize(768);
    const { iconTopRow, iconBottomRow } = LoadData();
    const data = !isMediumScreen ? (isTop ? iconTopRow : iconBottomRow) : [...iconTopRow, ...iconBottomRow];

    return (
        <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            speed={2000}
            autoplay={
                {
                    delay: false,
                    disableOnInteraction: false,
                    reverseDirection: !isMediumScreen && isLeft
                }
            }
            modules={[Autoplay]}
            className='pt-20'
            style={{ paddingTop: '2rem', paddingBottom: '2rem', maxWidth: "100vw" }}
        >
            {data.map((icon, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={icon.src}
                        alt={icon.alt}
                        height={65}
                        width={65}
                        loading='lazy'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default function AboutSection() {
    const isMediumScreen = useScreenSize(768);

    return (
        <section className={`flex flex-col justify-center items-center gap-4 px-responsive-padding-x pb-responsive-padding-y 
        md:gap-8 md:px-5 md:py-0 md:col-start-2 md:h-screen lg:pl-0 lg:pr-responsive-padding-y`} id='about' >

            <div className='flex flex-col justify-center items-start gap-2 group'>
                <h3 className="text-lg font-bold md:group-hover:text-warm-orange">About</h3>
                <p>Back in January 2024, I left my job as an administrative assistant and started learning full stack development, despite coming from a non-CS background. Now I&apos;m doing what I truly wanted.</p>
            </div>

            <div className='max-w-full group'>
                {!isMediumScreen && (
                    <>
                        <h3 className='text-lg font-bold md:group-hover:text-warm-orange'>My Skills</h3>
                        <SwiperIcons isTop={true} />
                        <SwiperIcons isTop={false} isLeft={true} />
                    </>
                )}
                {isMediumScreen && <SwiperIcons />}
            </div>

            <Button
                text={`Download Resume`}
                href={`/aryansoni-resume.pdf`}
                aria-label="Download Aryan Soni's Resume"
            />
        </section>
    );
}