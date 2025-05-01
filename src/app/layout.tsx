
import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
// Removed: import { GeistMono } from 'geist/font/mono';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose, // Added SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail, Instagram } from 'lucide-react'; // Import Phone and Mail icons
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';

// Define Metadata
export const metadata: Metadata = {
  title: 'BCA',
  description: 'resource for quality education materials.',
};

// Define Viewport
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

// Define Navigation Links
const navLinks = [
  { href: '/', label: 'Home' },
  { href: 'https://www.bca-ycmou.com/notes.html', label: 'Notes', external: true },
  { href: 'https://www.bca-ycmou.com/question_papers.html', label: 'Question Papers', external: true },
  { href: 'https://www.bca-ycmou.com/practicals.html', label: 'Practicals', external: true },
  { href: 'https://www.bca-ycmou.com/books.html', label: 'E-Books', external: true },
  { href: 'https://asm.ycmou.org.in/SiteContent/frmLanding', label: 'Home Assignments', external: true },
  { href: 'https://ycmou.digitaluniversity.ac/PreExamV2_DownloadHallTicket_New.aspx?ID=28070', label: 'Hall Ticket', external: true },
  { href: 'https://ycmou.digitaluniversity.ac/SearchDuplicateResult.aspx?ID=861', label: 'Result', external: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Define Footer Links
const footerLinks = {
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: 'https://www.bca-ycmou.com/notes.html', label: 'Notes', external: true },
    { href: 'https://www.bca-ycmou.com/question_papers.html', label: 'Question Papers', external: true },
    { href: 'https://www.bca-ycmou.com/practicals.html', label: 'Practicals', external: true },
    { href: 'https://www.bca-ycmou.com/books.html', label: 'E-Books', external: true },
  ],
  universityLinks: [
    { href: 'https://ycmou.digitaluniversity.ac/', label: 'YCMOU Digital University', external: true },
    { href: 'https://asm.ycmou.org.in/SiteContent/frmLanding', label: 'Home Assignments', external: true },
    { href: 'https://ycmou.digitaluniversity.ac/PreExamV2_DownloadHallTicket_New.aspx?ID=28070', label: 'Hall Ticket', external: true },
    { href: 'https://ycmou.digitaluniversity.ac/SearchDuplicateResult.aspx?ID=861', label: 'Result', external: true },
  ],
  aboutUsLinks: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  collegeLinks: [ // Added College Us section
     // Add college-related links here if available
     // Example: { href: '/college-info', label: 'College Information' },
  ]
};

// Define social media links
const socialLinks = [
  { href: 'https://www.linkedin.com/in/satyam-vishwakarma-991438300/',
    label: 'LinkedIn',
    icon: () => ( // Use inline SVG for the LinkedIn logo
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    )
  },
  { href: 'https://www.instagram.com/satyam_vishwakarma_18', label: 'Instagram', icon: Instagram },
  {
    href: 'https://x.com/satyambro333',
    label: 'X (formerly Twitter)',
    icon: () => ( // Use inline SVG for the X logo
      <svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="currentColor">
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
    )
  },
  // WhatsApp link moved to contact section
];

// WhatsApp SVG component (can be defined here or imported)
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          // Removed: GeistMono.variable,
          'antialiased flex flex-col min-h-screen' // Ensure footer sticks to bottom
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="bg-primary text-primary-foreground py-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4"> {/* Added horizontal padding */}
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-primary-foreground text-2xl font-bold transition duration-300 hover:opacity-80 md:ml-[10%]"> {/* Increased font size */}
                  BCA YCMOU
                </Link>

                 {/* Desktop Navigation (Hidden on Mobile) */}
                 {/* Removed desktop nav links as requested */}

                <div className="hidden md:flex items-center space-x-4"> {/* Keep ThemeToggle visible on desktop */}
                   <ThemeToggle />
                </div>


                {/* Mobile Navigation (Hamburger Menu) */}
                <div className="md:hidden flex items-center">
                  <ThemeToggle />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background text-foreground p-4 flex flex-col">
                      {/* Added explicit DialogTitle */}
                      <SheetHeader className="mb-4">
                        <SheetTitle className="text-left text-xl">Navigation</SheetTitle>
                      </SheetHeader>
                      <nav className="flex flex-col space-y-4 flex-grow">
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link
                              href={link.href}
                              className="text-lg hover:text-primary transition duration-300"
                              target={link.external ? '_blank' : undefined}
                              rel={link.external ? 'noopener noreferrer' : undefined}
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
          <main className="flex-grow container mx-auto py-8 px-4 content-area">{children}</main> {/* Added horizontal padding and content-area */}
          <footer className="mt-auto py-8 bg-secondary text-secondary-foreground px-4"> {/* Adjusted padding */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm"> {/* Grid layout */}
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-3 text-base text-primary">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="hover:text-primary transition duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* University Links */}
              <div>
                <h3 className="font-semibold mb-3 text-base text-primary">University Links</h3>
                <ul className="space-y-2">
                   {/* Moved YCMOU link here */}
                   <li>
                     <Link
                       href="https://ycmou.digitaluniversity.ac/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:text-primary transition duration-300"
                     >
                       YCMOU Digital University
                     </Link>
                   </li>
                  {footerLinks.universityLinks
                   .filter(link => link.label !== 'YCMOU Digital University') // Filter out the duplicate if it exists
                   .map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="hover:text-primary transition duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Us */}
              <div>
                <h3 className="font-semibold mb-3 text-base text-primary">About Us</h3>
                <ul className="space-y-2">
                  {footerLinks.aboutUsLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                         className="hover:text-primary transition duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                 {/* Added College Us Links */}
                 <h3 className="font-semibold mt-4 mb-3 text-base text-primary">College Us</h3>
                 <ul className="space-y-2">
                   {footerLinks.collegeLinks.map((link) => (
                     <li key={link.href}>
                       <Link
                         href={link.href}
                         target={link.external ? '_blank' : undefined}
                         rel={link.external ? 'noopener noreferrer' : undefined}
                         className="hover:text-primary transition duration-300"
                       >
                         {link.label}
                       </Link>
                     </li>
                   ))}
                   {/* Add a placeholder if no links */}
                   {footerLinks.collegeLinks.length === 0 && (
                     <li><span className="text-muted-foreground">More links coming soon</span></li>
                   )}
                 </ul>
              </div>

              {/* Contact & Socials */}
              <div>
                <h3 className="font-semibold mb-3 text-base text-primary">Contact</h3>
                <ul className="space-y-2 mb-4">
                  <li>
                     {/* Added hover transition effect */}
                     <a href="mailto:satyambro333@gmail.com" className="flex items-center hover:text-primary transition duration-300">
                       {/* Replace SVG with Image component using the provided URL */}
                       <Image
                         src="https://www.svgrepo.com/show/361773/email.svg"
                         alt="Email Icon"
                         width={16} // Set appropriate width
                         height={16} // Set appropriate height
                         className="mr-2"
                       />
                       satyambro333@gmail.com
                     </a>
                  </li>
                  <li>
                    <a href="tel:+917039201803" className="flex items-center hover:text-primary transition duration-300">
                      <Phone size={16} className="mr-2" />
                      +91 7039201803
                    </a>
                  </li>
                  {/* Added WhatsApp contact link */}
                  <li>
                     <a
                       href="https://wa.me/917039201803"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center hover:text-primary transition duration-300"
                     >
                       <WhatsAppIcon />
                       <span className="ml-1">+91 7039201803</span>
                     </a>
                   </li>
                </ul>
                 <h3 className="font-semibold mb-3 text-base text-primary">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-secondary-foreground hover:text-primary transition duration-300"
                    >
                      <link.icon />
                      {/* Removed text display from social icons */}
                    </a>
                  ))}
                </div>
              </div>
            </div>

             {/* Copyright */}
            <div className="text-center mt-8 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                 &copy; {new Date().getFullYear()} BCA. All rights reserved.
              </p>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

