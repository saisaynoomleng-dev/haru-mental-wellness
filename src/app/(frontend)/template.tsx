import Header from '@/components/Header';
import '../globals.css';
import Footer from '@/components/Footer';
import Curtain from '@/components/animations/Curtain';

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
    </main>
  );
}
