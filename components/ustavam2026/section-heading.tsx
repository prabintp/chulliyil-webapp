import React from "react";
import styles from "./ustavam2026.module.css";
import { Reveal } from "./reveal";
import type { SectionHeadingProps } from "./types";

export const SectionHeading = ({ eyebrow, titleMl, titleEn }: SectionHeadingProps) => {
  return (
    <Reveal className={styles.secHead}>
      <p className={`${styles.eyebrow} font-manjari text-utsavam-eyebrow`}>{eyebrow}</p>
      <h2 className="font-marcellus text-utsavam-h2">
        {titleMl}
        <span className={`${styles.secHeadTitleEn} font-manjari text-utsavam-h2-sub`}>{titleEn}</span>
      </h2>
    </Reveal>
  );
};
