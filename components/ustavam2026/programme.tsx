import React from "react";
import styles from "./ustavam2026.module.css";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { ProgrammeProps } from "./types";

export const Programme = ({ eyebrow, titleMl, titleEn, days }: ProgrammeProps) => {
  return (
    <section id="programme" className={`${styles.section} ${styles.programme}`}>
      <div className={styles.wrap}>
        <SectionHeading eyebrow={eyebrow} titleMl={titleMl} titleEn={titleEn} />
        <div className={styles.days}>
          {days.map((day) => (
            <Reveal as="div" className={styles.day} key={day.titleEn}>
              <h3 className={`${styles.dayTitle} font-marcellus text-utsavam-h3`}>
                {day.titleEn}
                <small className="font-manjari">{day.titleSub}</small>
              </h3>
              <ul className={`${styles.dayList} font-manjari text-utsavam-body`}>
                {day.events.map((event) => (
                  <li key={event.time}>
                    <time className="font-marcellus">{event.time}</time>
                    <span>{event.description}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
