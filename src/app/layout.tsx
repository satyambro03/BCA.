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
  description: 'resource for quality education materials.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}> {/* Added flex layout for footer */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header uses primary background and foreground theme variables */}
          <header className="bg-primary text-primary-foreground py-4 shadow-md">
            <div className="container mx-auto">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-primary-foreground text-lg font-bold transition duration-300 hover:opacity-80"> {/* Use primary-foreground */}
                  BCA {/* Updated site name */}
                </Link>
                <div className="flex items-center space-x-6"> {/* Container for nav items and toggle */}
                  <ul className="flex space-x-6">
                    <li>
                      <Link href="/" className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block"> {/* Use primary-foreground, adjusted hover */}
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bca-ycmou.com/notes.html"
                        className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block" // Use primary-foreground, adjusted hover
                        target="_blank"
                        rel="noopener noreferrer"
                       >
                        Notes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bca-ycmou.com/question_papers.html"
                        className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block" // Use primary-foreground, adjusted hover
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Question Papers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.bca-ycmou.com/practicals.html"
                        className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block" // Use primary-foreground, adjusted hover
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Practicals
                      </Link>
                    </li>
                     <li>
                      <Link
                        href="https://www.bca-ycmou.com/books.html" // Updated E-Books link
                        className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block" // Use primary-foreground, adjusted hover
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security measure for new tabs
                      >
                        E-Books
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block"> {/* Use primary-foreground, adjusted hover */}
                        About
                      </Link>
                    </li>
                  </ul>
                   {/* Adjusted ThemeToggle button style */}
                   <ThemeToggle />
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto py-8">{children}</main> {/* Added container and padding */}
          {/* Footer uses secondary background and foreground */}
          <footer className="mt-auto text-center py-4 bg-secondary text-secondary-foreground"> {/* Added mt-auto for sticky footer */}
            <p>
              &copy; 2025 BCA. All rights reserved. | By Satyam Vishwakarma ( S . R )
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
