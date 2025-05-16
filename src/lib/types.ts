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
