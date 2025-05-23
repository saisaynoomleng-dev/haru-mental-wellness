// title
export type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
  size: 'lg' | 'md' | 'sm';
};

// Bounded
export type BoundedProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

// Cta
export type CtaProps = {
  href: string;
  className?: string;
};

// form state
export type PrevFormStateProps = {
  status: string;
  message: string;
  field?: string;
};

// blog card
export type BlogCardProps = {
  href: string | '';
  className?: string;
};

// therapist filter
export type TherapistFilterProps = {
  location?: string;
  session?: string;
  expertise?: string;
  insurance?: string;
  price?: string;
  therapy?: string;
  ageSpecific?: string;
  therapist?: string;
  search?: string;
};

// effects
export type CurtainEffectProps = {
  direction: 'top' | 'bottom';
  duration?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  offset?: number;
};

export type TypeWriterEffectProps = {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
};

export type SlideInEffectProps = {
  children: React.ReactNode;
  className?: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
  delay?: number;
  offset?: number;
};
