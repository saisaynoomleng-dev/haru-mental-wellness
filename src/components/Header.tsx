'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/service' },
    { title: 'Treatments', url: '/treatment' },
    { title: 'Therapist', url: '/therapist' },
    { title: 'Blog', url: '/blog' },
    { title: 'Author', url: '/author' },
    { title: 'Reviews', url: '/review' },
    { title: 'Contact', url: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'flex justify-between items-center py-5 px-10 w-full fixed top-0 left-0 z-10 h-12 md:h-20 transition-colors duration-200',
        isScrolled ? 'bg-brand-light-green' : 'bg-transparent',
      )}
    >
      <Link href="/" className="font-serif text-fs-500">
        HARU
      </Link>

      <div className="flex items-center gap-5">
        <Link href="/appointment" className="hover:text-brand-orange">
          Make an Appointment
        </Link>

        <button
          onClick={() => setNavOpen((prevOpen) => !prevOpen)}
          aria-controls="#main-menu"
          aria-label="navigation menu button"
          className={clsx(
            "w-8 h-[2px] rounded-lg bg-brand-white cursor-pointer relative z-50 after:z-50 after:absolute after:content-[''] transition-all duration-100 ease-in ",
            navOpen
              ? 'rotate-45 after:rotate-90 after:w-8 after:top-0 after:right-0 after:h-[2px] after:bg-brand-white after:rounded-lg'
              : 'after:w-5 after:h-[2px] after:bg-brand-white after:right-0 after:top-2 after:rounded-lg after:block',
          )}
        >
          <span className="sr-only">Main Menu</span>
        </button>

        <nav
          className={clsx(
            'flex flex-col items-center justify-center gap-5',
            'fixed h-screen inset-0 bg-brand-dark-blue z-20 transition-transform duration-300 ease-in-out ',
            navOpen ? 'translate-y-0' : '-translate-y-full',
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
                isScrolled && pathname === link.url && 'text-brand-dark-gray',
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
