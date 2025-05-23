import Opener from '@/components/animations/Opener';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Opener />
      {children}
    </main>
  );
}
