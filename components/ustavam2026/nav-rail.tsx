import React, { useEffect, useRef, useState } from "react";
import styles from "./ustavam2026.module.css";

export interface NavRailSection {
  id: string;
  label: string;
}

export const NavRail = ({ sections }: { sections: NavRailSection[] }) => {
  const [litIndex, setLitIndex] = useState(0);
  const targetsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    targetsRef.current = sections.map((s) => document.getElementById(s.id));
    const targets = targetsRef.current.filter((t): t is HTMLElement => !!t);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = targetsRef.current.indexOf(entry.target as HTMLElement);
          if (idx !== -1) setLitIndex(idx);
        });
      },
      { threshold: 0.35 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.rail} aria-label="Sections">
      {sections.map((section, i) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          className={`${styles.railLink} ${i <= litIndex ? styles.lit : ""}`}
        />
      ))}
    </nav>
  );
};
