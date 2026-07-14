import React, { useEffect, useRef } from "react";
import styles from "./ustavam2026.module.css";
import type { HeroProps } from "./types";

export const Hero = ({
  eyebrow = "വാർഷിക ഉത്സവം · Annual Utsavam",
  titleMl,
  titleEn,
  dates = [],
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt = "",
}: HeroProps) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const node = imgRef.current;
      if (!node) return;
      const y = Math.min(window.scrollY, window.innerHeight);
      node.style.transform = `translateY(${y * 0.18}px) scale(1.04)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.hero} id="hero">
      <div
        ref={imgRef}
        className={styles.heroImg}
        role="img"
        aria-label={imageAlt}
        style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : undefined}
      />
      <div className={styles.heroInner}>
        <p className={`${styles.eyebrow} font-manjari text-utsavam-eyebrow`}>{eyebrow}</p>
        <h1 className={`${styles.heroTitle} font-marcellus text-utsavam-h1`}>
          {titleMl}
          <span className={`${styles.heroTitleEn} font-manjari text-utsavam-h1-sub`}>{titleEn}</span>
        </h1>
        {dates.length > 0 && (
          <div className={styles.dateband}>
            {dates.map((d) => (
              <div key={d.label} className={styles.dateItem}>
                <small className="font-manjari">{d.label}</small>
                <span className="font-marcellus">{d.value}</span>
              </div>
            ))}
          </div>
        )}
        {(primaryCta || secondaryCta) && (
          <div className={styles.ctaRow}>
            {primaryCta && (
              <a className={`${styles.cta} font-marcellus`} href={primaryCta.href}>
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a className={`${styles.cta} ${styles.ctaGhost} font-marcellus`} href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
