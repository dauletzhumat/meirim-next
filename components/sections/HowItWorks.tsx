"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BUBBLES = [
    {
        size: 72,
        style: { top: "8%", left: "4%" },
        anim: "bubbleRise",
        dur: "3.8s",
        delay: "0.0s",
    },
    {
        size: 36,
        style: { top: "13%", left: "11%" },
        anim: "bubbleRiseSm",
        dur: "2.9s",
        delay: "1.2s",
    },
    {
        size: 52,
        style: { top: "10%", right: "22%" },
        anim: "bubbleRise",
        dur: "4.4s",
        delay: "0.5s",
    },
    {
        size: 28,
        style: { top: "22%", right: "14%" },
        anim: "bubbleRiseSm",
        dur: "2.6s",
        delay: "2.1s",
    },
    {
        size: 44,
        style: { bottom: "20%", right: "6%" },
        anim: "bubbleRise",
        dur: "3.3s",
        delay: "0.8s",
    },
    {
        size: 20,
        style: { bottom: "30%", right: "16%" },
        anim: "bubbleRiseSm",
        dur: "2.2s",
        delay: "1.7s",
    },
    {
        size: 60,
        style: { bottom: "12%", left: "6%" },
        anim: "bubbleRise",
        dur: "5.0s",
        delay: "0.3s",
    },
    {
        size: 48,
        style: { top: "5%", left: "28%" },
        anim: "bubbleRise",
        dur: "4.1s",
        delay: "1.5s",
    },
    {
        size: 22,
        style: { top: "20%", left: "42%" },
        anim: "bubbleRiseSm",
        dur: "2.5s",
        delay: "0.9s",
    },
    {
        size: 38,
        style: { bottom: "22%", right: "35%" },
        anim: "bubbleRise",
        dur: "3.6s",
        delay: "2.4s",
    },
    {
        size: 16,
        style: { top: "38%", left: "55%" },
        anim: "bubbleRiseSm",
        dur: "1.9s",
        delay: "1.1s",
    },
    {
        size: 30,
        style: { bottom: "8%", left: "20%" },
        anim: "bubbleRise",
        dur: "3.0s",
        delay: "0.4s",
    },
];

const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

export function HowItWorks() {
    const t = useTranslations("how");
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.1 });
    const [scrolling, setScrolling] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        const onScroll = () => {
            if (!isInView) return;
            setScrolling(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setScrolling(false), 180);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            clearTimeout(timerRef.current);
        };
    }, [isInView]);

    const steps = [
        { num: "01", title: t("step1_title"), desc: t("step1_desc") },
        { num: "02", title: t("step2_title"), desc: t("step2_desc") },
        { num: "03", title: t("step3_title"), desc: t("step3_desc") },
        { num: "04", title: t("step4_title"), desc: t("step4_desc") },
    ];

    return (
        <section ref={sectionRef} className='relative py-[70px]' id='how'>
            <div className='relative w-full'>
                {/* Wave SVG */}
                <svg
                    viewBox='0 0 1740 826'
                    fill='none'
                    preserveAspectRatio='xMidYMid slice'
                    xmlns='http://www.w3.org/2000/svg'
                    className='block w-full h-auto'
                    style={{ minHeight: 500 }}
                >
                    <path
                        d='M834.036 121.062C592.488 -2.74467 207.342 -26.6225 0 26.87V697.187C150.673 597.512 504.692 572.612 804.034 726.589C1146.05 902.516 1545.99 807.492 1737.5 726.589C1741.83 532.887 1737.5 146.766 1737.5 75C1560.49 137.131 1043.5 228.424 834.036 121.062Z'
                        fill='#7150D3'
                    />
                </svg>

                {/* Content overlay */}
                <div
                    className='absolute inset-0 flex items-center justify-center'
                    data-bubbles={isInView && scrolling ? "on" : "off"}
                >
                    {/* Bubbles */}
                    {BUBBLES.map((b, i) => (
                        <div
                            key={i}
                            className='bubble-item'
                            style={
                                {
                                    width: b.size,
                                    height: b.size,
                                    "--b-anim": b.anim,
                                    "--b-dur": b.dur,
                                    "--b-delay": b.delay,
                                    ...b.style,
                                } as unknown as React.CSSProperties
                            }
                        />
                    ))}

                    {/* Grid */}
                    <div className='max-w-[1728px] w-full px-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-[-155px] md:mt-[-155px]'>
                        {/* Left: steps */}
                        <div className='pl-0 md:pl-10'>
                            <motion.h2
                                className='text-[clamp(28px,3vw,48px)] font-bold text-white mb-10'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {t("title")}
                            </motion.h2>

                            <motion.div
                                className='flex flex-col gap-6'
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true, amount: 0.2 }}
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.12 },
                                    },
                                }}
                            >
                                {steps.map((step) => (
                                    <motion.div
                                        key={step.num}
                                        variants={stepVariants}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                        className='flex gap-5 items-start'
                                    >
                                        <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0'>
                                            <span className='text-primary font-semibold text-[18px]'>
                                                {step.num}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className='text-white font-semibold text-[17px] mb-1'>
                                                {step.title}
                                            </h4>
                                            <p className='text-white/80 text-[14px] leading-[1.6]'>
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right: phone image */}
                        <motion.div
                            className='hidden md:flex justify-center'
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Image
                                src='/assets/img-49be.png'
                                alt='App preview'
                                width={600}
                                height={600}
                                className='object-contain drop-shadow-2xl'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
