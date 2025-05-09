import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input border-b focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-b-2  focus-visible:border-b-brand-light-green dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-none bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-brand-light-green',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
