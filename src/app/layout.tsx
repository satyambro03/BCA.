import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "BCA", // Updated title
  description: 'Your go-to resource for quality education materials.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="bg-primary-blue py-4">
            <div className="container mx-auto">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-white text-lg font-bold">
                  BCA {/* Updated site name */}
                </Link>
                <div className="flex items-center space-x-6"> {/* Container for nav items and toggle */}
                  <ul className="flex space-x-6">
                    <li>
                      <Link
                        href="https://www.bca-ycmou.com/notes.html"
                        className="text-white hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                       >
                        Notes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bca-ycmou.com/question_papers.html"
                        className="text-white hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Question Papers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bca-ycmou.com/practicals.html"
                        className="text-white hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Practicals
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-white hover:text-gray-200">
                        About
                      </Link>
                    </li>
                  </ul>
                  <ThemeToggle /> {/* Add the theme toggle button */}
                </div>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="mt-12 text-center py-4">
            <p>
              &copy; {new Date().getFullYear()} BCA. All rights reserved. | By Satyam Vishwakarma
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
