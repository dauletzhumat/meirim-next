"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
    const t = useTranslations("footer");
    const tNav = useTranslations("nav");

    return (
        <footer className='bg-white overflow-hidden' id='contacts'>
            {/* Main grid */}
            <div className='relative max-w-[1728px] mx-auto px-10 pt-[40px] grid grid-cols-1 lg:[grid-template-columns:1fr_503px_1fr] gap-0 items-center border-b border-black/[0.07]'>
                {/* Decorative vectors */}
                <Image
                    src='/assets/Vector 20.svg'
                    alt=''
                    width={340}
                    height={340}
                    aria-hidden
                    className='absolute top-0 left-0 w-[clamp(180px,22vw,340px)] pointer-events-none -z-10'
                />
                <Image
                    src='/assets/Vector 21.png'
                    alt=''
                    width={340}
                    height={340}
                    aria-hidden
                    className='absolute bottom-0 right-0 w-[clamp(180px,22vw,340px)] pointer-events-none -z-10'
                />

                {/* Contact card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col gap-5 rounded-[20px] p-8 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)]'
                >
                    <h3 className='text-[22px] font-bold text-[#111] mb-1'>
                        {t("contact_title")}
                    </h3>
                    <div className='flex flex-col gap-4'>
                        <a
                            href='mailto:meirimapp@yandex.kz'
                            className='flex items-center gap-3 text-[15px] text-gt hover:text-primary transition-colors'
                        >
                            <Image
                                src='/assets/icon-mail.png'
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6 object-contain shrink-0'
                            />
                            meirimapp@yandex.kz
                        </a>
                        <a
                            href='https://instagram.com/meirim.app'
                            className='flex items-center gap-3 text-[15px] text-gt hover:text-primary transition-colors'
                        >
                            <Image
                                src='/assets/icon-instagram.png'
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6 object-contain shrink-0'
                            />
                            @meirim.app
                        </a>
                        <a
                            href='tel:+7747'
                            className='flex items-center gap-3 text-[15px] text-gt hover:text-primary transition-colors'
                        >
                            <Image
                                src='/assets/icon-phone.png'
                                alt=''
                                width={24}
                                height={24}
                                className='w-6 h-6 object-contain shrink-0'
                            />
                            +7 747 *** ****
                        </a>
                    </div>
                </motion.div>

                {/* Center phones */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className='hidden lg:flex justify-center items-center w-[503px] h-[407px] overflow-hidden mx-auto'
                >
                    <div className='relative w-[503px] h-[407px]'>
                        <Image
                            src='/assets/Blob 2.png'
                            alt=''
                            width={500}
                            height={500}
                            aria-hidden
                            className='absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] pointer-events-none z-0'
                        />
                        <Image
                            src='/assets/img-3ef3.png'
                            alt='Приложение Meirim'
                            width={600}
                            height={600}
                            className='absolute z-10 object-contain bottom-[-170px] left-1/2 -translate-x-1/2'
                        />
                    </div>
                </motion.div>

                {/* App download */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='flex flex-col gap-6 rounded-[20px] p-8 shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)]'
                >
                    <h3 className='text-[22px] font-bold text-[#111]'>
                        {t("app_title")}
                    </h3>
                    <div className='flex items-start gap-5 mt-2'>
                        <div className='w-40 h-40 shrink-0 rounded-[16px] border border-black/10 grid place-items-center bg-white'>
                            <Image
                                src='/assets/img-3f33.png'
                                alt='QR-код для скачивания приложения'
                                width={140}
                                height={140}
                                className='w-[140px] h-[140px] object-contain'
                            />
                        </div>
                        <p className='text-[20px] font-medium text-gs leading-[1.55]'>
                            {t("qr_text")}
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <a href='#' className='block'>
                            <Image
                                src='/assets/apple.png'
                                alt='App Store'
                                width={140}
                                height={46}
                                className='h-[46px] w-auto object-contain'
                            />
                        </a>
                        <a href='#' className='block'>
                            <Image
                                src='/assets/google.png'
                                alt='Google Play'
                                width={140}
                                height={46}
                                className='h-[46px] w-auto object-contain'
                            />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Footer bar */}
            <div className='bg-primary'>
                <div className='max-w-[1728px] mx-auto px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <a href='#' className='flex items-center'>
                        <MeirimLogoWhite />
                    </a>
                    <nav className='flex flex-wrap gap-6 justify-center'>
                        {(
                            ["about", "how", "partners", "contacts"] as const
                        ).map((key) => (
                            <a
                                key={key}
                                href={`#${key === "about" ? "about" : key === "how" ? "how" : key === "partners" ? "partners" : "contacts"}`}
                                className='text-white/80 hover:text-white text-sm transition-colors'
                            >
                                {tNav(key)}
                            </a>
                        ))}
                    </nav>
                    <p className='text-white/60 text-sm'>{t("copyright")}</p>
                </div>
            </div>
        </footer>
    );
}

function MeirimLogoWhite() {
    return (
        <svg
            width='110'
            height='16'
            viewBox='0 0 200 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M0.35443 0.32678C0.151899 0.466829 0 7.09581 0 15.0319V29.4103H2.78481H5.56961V18.6732C5.56961 12.7445 5.77214 7.93611 5.97467 7.93611C6.17721 7.93611 8.60758 10.7838 11.3418 14.2383C14.6329 18.4398 16.6076 20.5405 17.1645 20.4471C17.5696 20.3538 19.7468 18.113 21.924 15.4054C24.0506 12.6978 26.3797 9.85011 27.0886 9.10318L28.3038 7.70269V18.5331L28.3544 29.4103H31.1392H33.924V14.7985V0.233416L30.9367 0.140049C27.443 0 27.5949-0.0933666 21.2658 7.84274C19.1898 10.457 17.3164 12.6044 17.1645 12.6044C16.962 12.6044 14.5316 9.75674 11.6962 6.3022L6.58227 0H3.64556C2.02531 0 0.506328 0.140049 0.35443 0.32678Z'
                fill='white'
            />
            <path
                d='M48.9112 0.32678C48.7593 0.513514 48.6074 7.09581 48.6074 15.0319V29.4103L60.4049 29.3169L72.1517 29.1769L72.3036 26.7027L72.4555 24.2751H63.3416H54.177V20.7739V17.2727H63.0378H71.8985V14.9386V12.6044L63.1897 12.511L54.4302 12.371V8.86976V5.36854L63.4428 5.22849L72.4049 5.13513V2.56756V0L60.8099 0.0466824C54.4302 0.0466824 49.0631 0.186731 48.9112 0.32678Z'
                fill='white'
            />
            <path
                d='M86.0752 14.7051V29.4103H88.86H91.6448V14.7051V0H88.86H86.0752V14.7051Z'
                fill='white'
            />
            <path
                d='M106.327 14.7518V29.4103H109.112H111.846L111.998 24.4619L112.15 19.5135L114.884 19.4201L117.568 19.3734L122.479 24.3685L127.34 29.4103H130.833H134.276L131.087 26.0958C129.314 24.2751 127.087 21.9877 126.226 21.0073L124.555 19.2334L127.239 18.0196C128.707 17.3661 130.378 16.1523 130.985 15.312C134.226 10.8305 132.15 3.59459 126.884 1.07371C125.618 0.466829 123.441 0.280098 115.846 0.186731L106.327 0.0933666V14.7518ZM124.808 5.88206C127.644 7.60933 127.542 12.0442 124.555 13.8648C123.087 14.7985 122.276 14.9386 117.416 14.9386H111.897V10.0368V5.13513H117.72C122.226 5.13513 123.846 5.32186 124.808 5.88206Z'
                fill='white'
            />
            <path
                d='M145.822 14.7051V29.4103H148.607H151.392V14.7051V0H148.607H145.822V14.7051Z'
                fill='white'
            />
            <path
                d='M166.076 14.7051V29.4103H168.861H171.646V18.6732C171.646 12.7445 171.848 7.93611 172.051 7.93611C172.304 7.93611 174.836 10.8771 177.671 14.4717C180.507 18.0663 183.089 20.914 183.291 20.7739C183.545 20.6339 186.076 17.6462 188.962 14.1449L194.177 7.79606L194.329 18.6265L194.431 29.4103H197.215H200V14.7985V0.186731L196.658 0.280098L193.317 0.420147L188.507 6.39557C185.924 9.66338 183.595 12.4177 183.393 12.511C183.19 12.5577 180.76 9.80342 177.975 6.3022L172.912 0.0466824L169.519 0H166.076V14.7051Z'
                fill='white'
            />
        </svg>
    );
}
