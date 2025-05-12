import Header from '@/components/Header';
import '../globals.css';
import Footer from '@/components/Footer';
import { SanityLive } from '@/sanity/lib/live';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* <Curtain /> */}
      <Header />
      {children}
      <Footer />
      <SanityLive />
    </main>
  );
}
