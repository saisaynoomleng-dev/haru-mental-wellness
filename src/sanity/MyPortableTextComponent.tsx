import { PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from './lib/image';

export const MyPortableTextComponent: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(600)
            .quality(80)
            .auto('format')
            .format('webp')
            .url()}
          width={600}
          height={600}
          alt={props?.value?.alt || ''}
          priority
        />
      ) : null,
  },
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : '_self';
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-brand-orange underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-brand-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-brand-light-green">{children}</em>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-brand-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-brand-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mt-5 mb-2 text-brand-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed text-brand-white mb-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-brand-white/80 text-base leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-brand-white/80 text-base leading-relaxed">
        {children}
      </li>
    ),
  },
};
