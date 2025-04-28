
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Instagram, Mail, Phone, Menu } from 'lucide-react'; // Added Menu icon
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button'; // Import Button
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Import Sheet components, Added SheetHeader, SheetTitle

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
  // Updated description to match reference
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
    { href: "https://asm.ycmou.org.in/SiteContent/frmLanding", label: "Home Assignments", external: true },
    { href: "https://ycmou.digitaluniversity.ac/SearchDuplicateResult.aspx?ID=861", label: "Result", external: true }, // Added Result link
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
                {/* Adjusted left margin for desktop, removed ml-4 for mobile */}
                <Link href="/" className="text-primary-foreground text-lg font-bold transition duration-300 hover:opacity-80 md:ml-[10%]">
                  BCA YCMOU
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
                      {/* Added SheetHeader and SheetTitle */}
                      <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background text-foreground p-4 flex flex-col">
                         {/* Add DialogTitle for accessibility */}
                         <SheetHeader className="mb-4">
                            <SheetTitle className="text-left text-xl">Navigation</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 flex-grow">
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
                <Phone size={16} className="mr-1" /> {/* Fixed size */}
                +91 7039201803
              </a>
              <span className="hidden md:inline text-muted-foreground">|</span> {/* Hide separator on mobile */}
              <a
                  href="https://wa.me/917039201803" // WhatsApp link using international format
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center text-secondary-foreground hover:text-primary transition duration-300"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
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
