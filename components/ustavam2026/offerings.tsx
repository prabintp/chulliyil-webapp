import React from "react";
import styles from "./ustavam2026.module.css";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { OfferingsProps } from "./types";

export const Offerings = ({ eyebrow, titleMl, titleEn, items, note }: OfferingsProps) => {
  return (
    <section id="offerings" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeading eyebrow={eyebrow} titleMl={titleMl} titleEn={titleEn} />
        <Reveal as="div" className={styles.cards}>
          {items.map((item) => (
            <div className={styles.card} key={item.title}>
              <h3 className={`${styles.cardTitle} font-marcellus`}>{item.title}</h3>
              <p className={`${styles.cardText} font-manjari`}>{item.description}</p>
              <p className={`${styles.cardPrice} font-marcellus`}>{item.price}</p>
            </div>
          ))}
        </Reveal>
        {note && (
          <Reveal
            as="p"
            className="font-manjari"
            style={{ marginTop: 22, color: "var(--ivory-dim)", fontSize: ".9rem" }}
          >
            {note}
          </Reveal>
        )}
      </div>
    </section>
  );
};
