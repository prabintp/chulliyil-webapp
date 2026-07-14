import React from "react";
import styles from "./ustavam2026.module.css";
import { useReveal } from "./use-reveal";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const Reveal = ({ as: Tag = "div", className = "", ...props }: RevealProps) => {
  const { ref, isIn } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${isIn ? styles.in : ""} ${className}`}
      {...props}
    />
  );
};
