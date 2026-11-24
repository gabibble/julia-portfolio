import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const retroScript = localFont({
  src: './fonts/retro-parade-script.otf',
  variable: '--font-retro-script',
});

const retroSans = localFont({
  src: './fonts/retro-parade-sans.otf',
  variable: '--font-retro-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.juliagiebultowicz.com'),
  title: 'Julia Giebultowicz',
  description:
    'Software engineer with an eye for design, based in Portland, OR.',
  openGraph: {
    title: 'Julia Giebultowicz',
    description:
      'Software engineer with an eye for design, based in Portland, OR.',
    url: '/',
    siteName: 'Julia Giebultowicz',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${poppins.variable} ${retroScript.variable} ${retroSans.variable} h-full antialiased`}
    >
      <body className='min-h-full'>{children}</body>
    </html>
  );
}
