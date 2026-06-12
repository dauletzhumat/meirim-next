"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export function CityStats() {
    const t = useTranslations("cityStats");

    const stats = [
        { num: t("stat1_num"), label: t("stat1_label") },
        { num: t("stat2_num"), label: t("stat2_label") },
        { num: t("stat3_num"), label: t("stat3_label") },
        { num: t("stat4_num"), label: t("stat4_label") },
    ];

    return (
        <section className='py-[120px] bg-white' id='pricing'>
            <div className='max-w-[1728px] mx-auto px-10'>
                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-8'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {/* Card 1 — City */}
                    <motion.div
                        variants={cardVariants}
                        className='bg-white rounded-[28px] px-[48px] py-[44px] flex flex-col overflow-hidden relative min-h-[500px] shadow-[0px_4px_10px_0px_rgba(113,80,211,0.25)] border border-[rgba(113,80,211,0.1)] self-start'
                    >
                        <h2 className='text-[clamp(22px,2.4vw,38px)] font-bold text-primary mb-2.5 shrink-0'>
                            {t("city_title")}
                        </h2>
                        <p className='text-[22px] font-medium text-gs mb-6 shrink-0'>
                            {t("city_desc")}
                        </p>
                        <div className='relative w-full mt-[145px]'>
                            <Image
                                src='/assets/img-6827.png'
                                alt='Карта Казахстана'
                                width={570}
                                height={400}
                                className='absolute object-contain'
                                style={{
                                    left: 0,
                                    top: "28%",
                                    transform: "translateY(-50%)",
                                    width: "75%",
                                    height: "auto",
                                }}
                            />
                            <Image
                                src='/assets/img-5651.png'
                                alt='Meirim mascot'
                                width={684}
                                height={500}
                                className='absolute object-contain'
                                style={{
                                    left: "40%",
                                    top: "30%",
                                    transform: "translateY(-50%)",
                                    width: "90%",
                                    height: "auto",
                                }}
                            />
                            <p
                                className='absolute text-[30px] font-medium mt-[130px]'
                                style={{ color: "#5e5d5d" }}
                            >
                                <span className='text-primary font-semibold'>
                                    Астана
                                </span>
                                , Алматы, Шымкент
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 — Stats */}
                    <motion.div
                        variants={cardVariants}
                        className='bg-white rounded-[28px] px-[48px] py-[44px] flex flex-col gap-6 mt-[50px] shadow-[0px_4px_10px_0px_rgba(113,80,211,0.25)] border border-[rgba(113,80,211,0.1)]'
                    >
                        <h2 className='text-[clamp(22px,2.4vw,38px)] font-bold text-primary'>
                            {t("trust_title")}
                        </h2>
                        <p className='text-[22px] font-medium text-gs'>
                            {t("trust_desc")}
                        </p>
                        <div className='grid grid-cols-2 gap-4 flex-1 mt-4'>
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className='bg-pbg2 rounded-[20px] px-6 py-7 flex flex-col justify-center text-center'
                                >
                                    <span className='text-[clamp(28px,2.4vw,40px)] font-extrabold text-primary leading-none mb-2'>
                                        {s.num}
                                    </span>
                                    <span className='text-[22px] font-medium text-gs'>
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
