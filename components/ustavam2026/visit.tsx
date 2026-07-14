import React from "react";
import styles from "./ustavam2026.module.css";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { VisitProps } from "./types";

export const Visit = ({ eyebrow, titleMl, titleEn, columns }: VisitProps) => {
  return (
    <section id="visit" className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeading eyebrow={eyebrow} titleMl={titleMl} titleEn={titleEn} />
        <Reveal as="div" className={`${styles.visitGrid} font-manjari text-utsavam-body`}>
          {columns.map((entries, i) => (
            <dl key={i}>
              {entries.map((entry) => (
                <React.Fragment key={entry.term}>
                  <dt>{entry.term}</dt>
                  <dd>{entry.description}</dd>
                </React.Fragment>
              ))}
            </dl>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
