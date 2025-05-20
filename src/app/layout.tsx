import type { Metadata } from 'next';
import './globals.css';
import { sans, serif } from '@/lib/fonts';
import { SanityLive } from '@/sanity/lib/live';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru Mental Wellness',
    default: 'Haru Mental Wellness',
  },
  description:
    'Haru Mental Wellness is a personal medical web app that provides different treatments online regarding of mental health.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />
        {children}
        <Footer />
        <SanityLive />
        <Toaster />
      </body>
    </html>
  );
}
