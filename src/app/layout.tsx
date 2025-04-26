import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Instagram, Mail, Phone, Menu } from 'lucide-react'; // Added Menu icon
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button'; // Import Button
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Import Sheet components

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "BCA",
  description: 'resource for quality education materials.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "https://www.bca-ycmou.com/notes.html", label: "Notes", external: true },
    { href: "https://www.bca-ycmou.com/question_papers.html", label: "Question Papers", external: true },
    { href: "https://www.bca-ycmou.com/practicals.html", label: "Practicals", external: true },
    { href: "https://www.bca-ycmou.com/books.html", label: "E-Books", external: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="bg-primary text-primary-foreground py-4 shadow-md sticky top-0 z-50"> {/* Make header sticky */}
            <div className="container mx-auto px-4"> {/* Added horizontal padding */}
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-primary-foreground text-lg font-bold transition duration-300 hover:opacity-80 ml-4 md:ml-[10%]"> {/* Adjusted left margin for desktop */}
                  BCA
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                  <ul className="flex space-x-6">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-primary-foreground hover:opacity-80 transition duration-300 hover:scale-110 inline-block"
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ThemeToggle />
                </div>
                {/* Mobile Navigation Trigger */}
                <div className="md:hidden flex items-center">
                   <ThemeToggle /> {/* Move ThemeToggle inside for spacing */}
                   <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Toggle Menu</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background text-foreground p-4">
                        <nav className="flex flex-col space-y-4 mt-6">
                          {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                              <Link
                                href={link.href}
                                className="text-lg hover:text-primary transition duration-300"
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </nav>
                      </SheetContent>
                    </Sheet>
                </div>
              </nav>
            </div>
          </header>
          <main className="flex-grow container mx-auto py-8 px-4">{children}</main> {/* Added horizontal padding */}
          <footer className="mt-auto text-center py-6 bg-secondary text-secondary-foreground px-4"> {/* Added horizontal padding */}
            <p className="mb-4 text-sm md:text-base"> {/* Responsive text size */}
              &copy; 2025 BCA. All rights reserved. | By Satyam Vishwakarma ( S . R )
            </p>
            {/* Contact Information */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 text-xs md:text-sm"> {/* Responsive layout and text size */}
              <a href="mailto:satyambro333@gmail.com" className="flex items-center text-secondary-foreground hover:text-primary transition duration-300">
                <Mail size={16} className="mr-1" /> {/* Fixed icon size */}
                satyambro333@gmail.com
              </a>
              <span className="hidden md:inline text-muted-foreground">|</span> {/* Hide separator on mobile */}
              <a href="tel:+917039201803" className="flex items-center text-secondary-foreground hover:text-primary transition duration-300">
                <Phone size={16} className="mr-1" /> {/* Fixed icon size */}
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
                <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="currentColor">
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
              </a>
            </div>
          </footer>
           <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
