import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// date formatter
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });
};

// toslug
export const toSlug = (string: string) => {
  return string
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s+]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const formatText = (text: string) => {
  return text.replace(/-/g, ' ');
};
