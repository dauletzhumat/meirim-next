"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const LOCALES = ["RU", "KZ", "EN"] as const;

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function switchLocale(lang: string) {
    const newLocale = lang.toLowerCase();
    const withoutLocale = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
    router.push(`/${newLocale}${withoutLocale}`);
    setOpen(false);
  }

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#how", label: t("how") },
    { href: "#partners", label: t("partners") },
    { href: "#contacts", label: t("contacts") },
  ];

  return (
    <header className="sticky top-0 z-[200] bg-white/[0.97] backdrop-blur-xl border-b border-black/[0.06]">
      <nav className="max-w-[1728px] mx-auto px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center shrink-0">
          <MeirimLogo fill="#7150D3" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-9 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[15px] font-medium text-gt hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex bg-primary rounded-full p-1 gap-0.5">
            {LOCALES.map((lang) => (
              <button
                key={lang}
                onClick={() => switchLocale(lang)}
                className={`px-3.5 py-1.5 text-[13px] font-bold rounded-[20px] cursor-pointer font-sans transition-all ${
                  locale.toUpperCase() === lang
                    ? "bg-white text-primary"
                    : "text-white/65 hover:text-white bg-transparent border-0"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden bg-white border-t border-black/[0.06] md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-7 py-[14px] text-[15px] font-medium text-gt border-b border-black/[0.04]"
              >
                {item.label}
              </a>
            ))}
            <div className="px-7 py-4 flex gap-2">
              {LOCALES.map((lang) => (
                <button
                  key={lang}
                  onClick={() => switchLocale(lang)}
                  className={`px-4 py-1.5 rounded-lg text-[13px] font-bold border-2 border-primary cursor-pointer font-sans transition-all ${
                    locale.toUpperCase() === lang
                      ? "bg-primary text-white"
                      : "bg-transparent text-primary"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function MeirimLogo({ fill }: { fill: string }) {
  return (
    <svg width="132" height="20" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.35443 0.32678C0.151899 0.466829 0 7.09581 0 15.0319V29.4103H2.78481H5.56961V18.6732C5.56961 12.7445 5.77214 7.93611 5.97467 7.93611C6.17721 7.93611 8.60758 10.7838 11.3418 14.2383C14.6329 18.4398 16.6076 20.5405 17.1645 20.4471C17.5696 20.3538 19.7468 18.113 21.924 15.4054C24.0506 12.6978 26.3797 9.85011 27.0886 9.10318L28.3038 7.70269V18.5331L28.3544 29.4103H31.1392H33.924V14.7985V0.233416L30.9367 0.140049C27.443 0 27.5949-0.0933666 21.2658 7.84274C19.1898 10.457 17.3164 12.6044 17.1645 12.6044C16.962 12.6044 14.5316 9.75674 11.6962 6.3022L6.58227 0H3.64556C2.02531 0 0.506328 0.140049 0.35443 0.32678Z" fill={fill} />
      <path d="M48.9112 0.32678C48.7593 0.513514 48.6074 7.09581 48.6074 15.0319V29.4103L60.4049 29.3169L72.1517 29.1769L72.3036 26.7027L72.4555 24.2751H63.3416H54.177V20.7739V17.2727H63.0378H71.8985V14.9386V12.6044L63.1897 12.511L54.4302 12.371V8.86976V5.36854L63.4428 5.22849L72.4049 5.13513V2.56756V0L60.8099 0.0466824C54.4302 0.0466824 49.0631 0.186731 48.9112 0.32678Z" fill={fill} />
      <path d="M86.0752 14.7051V29.4103H88.86H91.6448V14.7051V0H88.86H86.0752V14.7051Z" fill={fill} />
      <path d="M106.327 14.7518V29.4103H109.112H111.846L111.998 24.4619L112.15 19.5135L114.884 19.4201L117.568 19.3734L122.479 24.3685L127.34 29.4103H130.833H134.276L131.087 26.0958C129.314 24.2751 127.087 21.9877 126.226 21.0073L124.555 19.2334L127.239 18.0196C128.707 17.3661 130.378 16.1523 130.985 15.312C134.226 10.8305 132.15 3.59459 126.884 1.07371C125.618 0.466829 123.441 0.280098 115.846 0.186731L106.327 0.0933666V14.7518ZM124.808 5.88206C127.644 7.60933 127.542 12.0442 124.555 13.8648C123.087 14.7985 122.276 14.9386 117.416 14.9386H111.897V10.0368V5.13513H117.72C122.226 5.13513 123.846 5.32186 124.808 5.88206Z" fill={fill} />
      <path d="M145.822 14.7051V29.4103H148.607H151.392V14.7051V0H148.607H145.822V14.7051Z" fill={fill} />
      <path d="M166.076 14.7051V29.4103H168.861H171.646V18.6732C171.646 12.7445 171.848 7.93611 172.051 7.93611C172.304 7.93611 174.836 10.8771 177.671 14.4717C180.507 18.0663 183.089 20.914 183.291 20.7739C183.545 20.6339 186.076 17.6462 188.962 14.1449L194.177 7.79606L194.329 18.6265L194.431 29.4103H197.215H200V14.7985V0.186731L196.658 0.280098L193.317 0.420147L188.507 6.39557C185.924 9.66338 183.595 12.4177 183.393 12.511C183.19 12.5577 180.76 9.80342 177.975 6.3022L172.912 0.0466824L169.519 0H166.076V14.7051Z" fill={fill} />
    </svg>
  );
}
