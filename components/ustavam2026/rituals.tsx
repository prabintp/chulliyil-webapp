import React from "react";
import styles from "./ustavam2026.module.css";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { RitualsProps } from "./types";

export const Rituals = ({
  eyebrow,
  titleMl,
  titleEn,
  paragraph,
  items,
  imageUrl,
  imageAlt = "",
  quote,
}: RitualsProps) => {
  return (
    <>
      <section id="rituals" className={styles.section}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <Reveal
            as="div"
            className={styles.plate}
            role="img"
            aria-label={imageAlt}
            style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : undefined}
          />
          <div>
            <SectionHeading eyebrow={eyebrow} titleMl={titleMl} titleEn={titleEn} />
            <p className="font-manjari text-utsavam-body">{paragraph}</p>
            <ul className={`${styles.ritualList} font-manjari text-utsavam-body`}>
              {items.map((item) => (
                <li key={item.title}>
                  <b className="font-marcellus">{item.title}</b>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {quote && (
        <div
          className={styles.band}
          role={quote.imageUrl ? "img" : undefined}
          aria-label={quote.imageUrl ? quote.imageAlt : undefined}
          style={quote.imageUrl ? { backgroundImage: `url('${quote.imageUrl}')` } : undefined}
        >
          <Reveal as="blockquote" className={`${styles.bandQuote} font-marcellus text-utsavam-quote`}>
            {quote.text}
            <cite className={`${styles.bandCite} font-manjari`}>{quote.citation}</cite>
          </Reveal>
        </div>
      )}
    </>
  );
};
