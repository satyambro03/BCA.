import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle
import { Instagram, Mail, Phone } from 'lucide-react'; // Removed Linkedin and Twitter import
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

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
                {/* Added ml-4 to move the link slightly to the right */}
                <Link href="/" className="text-primary-foreground text-lg font-bold transition duration-300 hover:opacity-80 ml-4"> {/* Use primary-foreground */}
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
                    <li>
                      <Link href="/contact" className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block"> {/* Added Contact link */}
                        Contact
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
          <footer className="mt-auto text-center py-6 bg-secondary text-secondary-foreground"> {/* Added mt-auto for sticky footer, increased padding */}
            <p className="mb-4"> {/* Added margin-bottom to copyright */}
              &copy; 2025 BCA. All rights reserved. | By Satyam Vishwakarma ( S . R )
            </p>
            {/* Contact Information */}
            <div className="flex justify-center items-center space-x-4 mb-4 text-sm">
              <a href="mailto:satyambro333@gmail.com" className="flex items-center text-secondary-foreground hover:text-primary transition duration-300">
                <Mail size={18} className="mr-1" />
                satyambro333@gmail.com
              </a>
              <span className="text-muted-foreground">|</span> {/* Separator */}
              <a href="tel:+917039201803" className="flex items-center text-secondary-foreground hover:text-primary transition duration-300">
                <Phone size={18} className="mr-1" />
                +91 7039201803
              </a>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/satyam-vishwakarma-991438300/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-secondary-foreground hover:text-primary transition duration-300"
              >
                {/* Replaced lucide icon with inline SVG for latest LinkedIn logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/satyam_vishwakarma_18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-secondary-foreground hover:text-primary transition duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/satyambro333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter) Profile"
                className="text-secondary-foreground hover:text-primary transition duration-300"
              >
                {/* Replaced lucide icon with inline SVG for X logo */}
                <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="currentColor">
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
              </a>
            </div>
          </footer>
           {/* Add Toaster component here */}
           <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
