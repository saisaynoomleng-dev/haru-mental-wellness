'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/service' },
    { title: 'Treatments', url: '/treatment' },
    { title: 'Team', url: '/team' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <header className="flex justify-between items-center py-5 px-10">
      <Link href="/" className="font-serif text-fs-500">
        HARU
      </Link>

      <button
        onClick={() => setNavOpen((prevOpen) => !prevOpen)}
        aria-controls="#main-menu"
        aria-label="navigation menu button"
        className={clsx(
          "md:hidden block w-8 h-[2px] rounded-lg bg-brand-white cursor-pointer relative z-50 after:absolute after:content-[''] transition-all duration-100 ease-in",
          navOpen
            ? 'rotate-45 after:rotate-90 after:w-8 after:top-0 after:right-0 after:h-[2px] after:bg-brand-white after:rounded-lg'
            : 'after:w-5 after:h-[2px] after:bg-brand-white after:right-0 after:top-2 after:rounded-lg',
        )}
      >
        <span className="sr-only">Main Menu</span>
      </button>

      <nav
        className={clsx(
          'flex flex-col items-center justify-center md:flex-row gap-5',
          'max-md:fixed max-md:inset-0 max-md:bg-brand-dark-blue max-md:z-20 max-md:transition-transform duration-300 ease-in-out',
          navOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-full',
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            onClick={() => setNavOpen(false)}
            className={clsx(
              'font-semibold',
              pathname === link.url &&
                'text-brand-orange underline underline-offset-4 decoration-wavy',
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
