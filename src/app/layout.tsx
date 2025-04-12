import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Satyam\'s Edu Site',
  description: 'Your go-to resource for quality education materials.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-primary-blue py-4">
          <div className="container mx-auto">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-white text-lg font-bold">
                Satyam's Edu Site
              </Link>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/notes" className="text-white hover:text-gray-200">
                    Notes
                  </Link>
                </li>
                <li>
                  <Link href="/question-papers" className="text-white hover:text-gray-200">
                    Question Papers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-gray-200">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-12 text-center">
          <p>
            &copy; {new Date().getFullYear()} Satyam's Edu Site. All rights reserved. | By Satyam Vishwakarma
          </p>
        </footer>
      </body>
    </html>
  );
}
