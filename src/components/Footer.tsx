import Link from 'next/link';
import Title from './Title';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
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
    <footer className="grid grid-cols-2 md:grid-cols-4 px-10 md:px-14 bg-brand-dark-gray py-12 gap-5 md:gap-10 auto-rows-auto">
      <div className="col-start-1 col-span-full md:col-span-2 text-center md:text-left">
        <Link href="/" className="font-serif text-fs-500 md:text-fs-700">
          HARU
        </Link>
        <p className="text-fs-300 text-brand-white/30">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          nulla harum iusto deserunt facilis modi cumque vel quisquam sequi
          voluptate accusamus ut pariatur veritatis perferendis tenetur,
          adipisci esse nesciunt omnis.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 place-items-center col-start-1 col-span-full md:row-start-1 md:col-span-2 row-start-2 md:place-items-start md:col-start-3 ">
        <p className="font-bold col-span-full md:place-self-center">Explore</p>
        {navLinks.map((link) => (
          <Link key={link.title} href={link.url} className={''}>
            {link.title}
          </Link>
        ))}
      </div>

      <div className="row-start-3 col-span-full md:col-span-2 md:row-start-2 flex gap-3 md:gap-5 items-center justify-center md:justify-start">
        <Link href="https://www.facebook.com">
          <FaFacebook />
        </Link>

        <Link href="https://www.x.com">
          <FaTwitter />
        </Link>

        <Link href="https://www.youtube.com">
          <FaYoutube />
        </Link>

        <Link href="https://www.linkedin.com">
          <FaLinkedin />
        </Link>

        <Link href="https://www.instagram.com">
          <FaInstagram />
        </Link>

        <Link href="https://www.github.com">
          <FaGithub />
        </Link>

        <Link href="https://www.whatsapp.com">
          <FaWhatsapp />
        </Link>
      </div>

      <div className="col-start-1 row-start-4 md:col-start-3 md:row-start-2 text-fs-200 col-span-full place-self-end text-right">
        <p>
          Copyright&copy;Haru Mental Wellness&reg; {new Date().getFullYear()}
        </p>
        <p>Designed by Sai Say Noom Leng.</p>
      </div>
    </footer>
  );
};

export default Footer;
