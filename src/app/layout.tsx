import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/providers/Providers';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bitech Company',
  description: 'Bitech Management Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={roboto.className}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
