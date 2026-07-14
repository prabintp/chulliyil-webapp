import React from "react";
import styles from "./ustavam2026.module.css";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { AboutProps } from "./types";

export const About = ({ eyebrow, titleMl, titleEn, paragraphs, imageUrl, imageAlt = "" }: AboutProps) => {
  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.wrap} ${styles.aboutGrid}`}>
        <div>
          <SectionHeading eyebrow={eyebrow} titleMl={titleMl} titleEn={titleEn} />
          <Reveal as="div" className="font-manjari text-utsavam-body">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
        <Reveal
          as="div"
          className={styles.plate}
          role="img"
          aria-label={imageAlt}
          style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : undefined}
        />
      </div>
    </section>
  );
};
