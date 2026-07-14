export interface DateItem {
  label: string;
  value: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  titleMl: string;
  titleEn: string;
  dates?: DateItem[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  imageUrl?: string;
  imageAlt?: string;
}

export interface SectionHeadingProps {
  eyebrow: string;
  titleMl: string;
  titleEn: string;
}

export interface AboutProps extends SectionHeadingProps {
  paragraphs: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface ProgrammeEvent {
  time: string;
  description: string;
}

export interface ProgrammeDay {
  titleEn: string;
  titleSub: string;
  events: ProgrammeEvent[];
}

export interface ProgrammeProps extends SectionHeadingProps {
  days: ProgrammeDay[];
}

export interface RitualItem {
  title: string;
  description: string;
}

export interface RitualsQuote {
  text: string;
  citation: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface RitualsProps extends SectionHeadingProps {
  paragraph: string;
  items: RitualItem[];
  imageUrl?: string;
  imageAlt?: string;
  quote?: RitualsQuote;
}

export interface OfferingItem {
  title: string;
  description: string;
  price: string;
}

export interface OfferingsProps extends SectionHeadingProps {
  items: OfferingItem[];
  note?: string;
}

export interface VisitEntry {
  term: string;
  description: string;
}

export interface VisitProps extends SectionHeadingProps {
  columns: VisitEntry[][];
}
