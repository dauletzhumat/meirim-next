"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ICONS = [
  "/assets/icon-bag.png",
  "/assets/icon-people.png",
  "/assets/icon-star.png",
  "/assets/icon-wallet.png",
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  const t = useTranslations("features");

  const items = [
    { title: t("item1_title"), desc: t("item1_desc"), icon: ICONS[0] },
    { title: t("item2_title"), desc: t("item2_desc"), icon: ICONS[1] },
    { title: t("item3_title"), desc: t("item3_desc"), icon: ICONS[2] },
    { title: t("item4_title"), desc: t("item4_desc"), icon: ICONS[3] },
  ];

  return (
    <section className="py-[100px]" id="about-features">
      <motion.div
        className="px-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-[92px] h-[92px] rounded-full bg-pbg flex items-center justify-center mb-[22px] shrink-0">
              <Image src={item.icon} alt="" width={92} height={92} className="object-contain" />
            </div>
            <h3 className="text-[16px] font-semibold text-primary mb-2.5">{item.title}</h3>
            <p className="text-[14px] font-medium text-gs leading-[1.55]">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
