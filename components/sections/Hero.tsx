"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="bg-white overflow-hidden" id="about">
      <div className="max-w-[1728px] mx-auto pl-10 grid grid-cols-1 md:grid-cols-2 items-center min-h-[calc(100vh-80px)]">
        {/* Copy */}
        <motion.div
          className="py-20 pr-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-[clamp(40px,4.6vw,72px)] font-bold leading-[1.06] text-[#111] mb-6">
            <span className="text-primary">Meirim</span>
            {" "}— {t("headline")}
          </h1>
          <p className="text-[clamp(16px,1.3vw,20px)] text-[#666] leading-[1.75] mb-12 whitespace-pre-line">
            {t("description")}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild variant="primary">
              <a href="#">{t("cta_order")}</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#partners">{t("cta_partner")}</a>
            </Button>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative flex items-center justify-end h-[calc(100vh-80px)]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/assets/Ellipse 30.svg"
            alt=""
            width={903}
            height={830}
            aria-hidden
            className="absolute bottom-[-60px] right-[-60px] w-[60%] pointer-events-none z-0"
          />
          <Image
            src="/assets/hero-mascot.png"
            alt="Meirim — сервис бытовых услуг"
            width={1023}
            height={900}
            priority
            className="relative z-10 w-full max-w-[1023px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
