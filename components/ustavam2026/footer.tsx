import React from "react";
import styles from "./ustavam2026.module.css";

export interface UstavamFooterProps {
  blessing: string;
  credit: string;
}

export const UstavamFooter = ({ blessing, credit }: UstavamFooterProps) => {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.footerDiya} font-marcellus`}>{blessing}</p>
      <p className="font-manjari">{credit}</p>
    </footer>
  );
};
