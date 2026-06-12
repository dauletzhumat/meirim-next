"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Partner() {
    const t = useTranslations("partner");

    return (
        <section
            className='relative overflow-hidden py-[72px]'
            id='partners'
            style={{
                background: "#7150d3",
                backgroundImage: "url('/assets/Vector.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "300px",
            }}
        >
            {/* Decorative blobs */}
            <div className='absolute top-[-160px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/[0.07] pointer-events-none' />
            <div className='absolute bottom-[-100px] right-[260px] w-[200px] h-[200px] rounded-full bg-white/[0.07] pointer-events-none' />

            <div
                className='max-w-[1728px] mx-auto px-10 relative'
                style={{ paddingRight: "clamp(450px, 42vw, 680px)" }}
            >
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className='text-[clamp(26px,3vw,48px)] font-bold text-white mb-5'>
                        {t("title")}
                    </h2>
                    <p className='text-white/85 text-[clamp(16px,2vw,26px)] leading-[1.55] mb-9 whitespace-pre-line'>
                        {t("description")}
                    </p>
                    <Button asChild variant='white'>
                        <a href='#contacts'>{t("cta")}</a>
                    </Button>
                </motion.div>

                {/* Mascot */}
                <motion.div
                    className='absolute right-[30px] top-[-50px] hidden lg:block'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    <div className='relative w-[clamp(400px,38vw,600px)]'>
                        <Image
                            src='/assets/Arc.png'
                            alt=''
                            width={899}
                            height={481}
                            aria-hidden
                            className='absolute mt-[105px] left-[-48%] object-contain'
                        />
                        <Image
                            src='/assets/img-426e.png'
                            alt='Партнеры Meirim'
                            width={1309}
                            height={1202}
                            className='absolute left-[-48%] object-contain'
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
