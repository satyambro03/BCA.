
import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { BookOpen, FileText, FlaskConical, Info, Book, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 fade-in-up px-4"> {/* Added horizontal padding */}
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-16"> {/* Adjusted margin */}
        {/* Updated heading to remove YCMOU */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Welcome to BCA</h1> {/* Responsive heading size */}
        {/* Updated description to match reference */}
        <p className="text-base md:text-lg text-muted-foreground">Explore comprehensive study notes, previous year's question papers, practical guides, and a collection of e-books tailored for BCA students, especially those at YCMOU.</p> {/* Responsive text size */}
      </section>

      {/* Features Section - Ensure responsive grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Adjusted gaps and breakpoints */}
        {/* Notes Section Card - Wrapped in Link */}
        <Link
          href="https://www.bca-ycmou.com/notes.html"
          className="block group" // Added block and group for styling consistency
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent group-hover:shadow-accent/20"> {/* Added h-full and group-hover styles */}
            <CardHeader>
              <div className="flex items-center justify-center mb-2 text-primary">
                  <BookOpen size={32} />
              </div>
              <CardTitle className="text-center text-xl md:text-2xl">Notes</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Access study notes for various subjects.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
              {/* Removed inner link */}
            </CardContent>
          </Card>
        </Link>

        {/* Question Papers Archive Card - Wrapped in Link */}
        <Link
          href="https://www.bca-ycmou.com/question_papers.html"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent group-hover:shadow-accent/20"> {/* Added h-full and group-hover styles */}
            <CardHeader>
               <div className="flex items-center justify-center mb-2 text-primary">
                  <FileText size={32} />
               </div>
              <CardTitle className="text-center text-xl md:text-2xl">Question Papers</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Download previous exam papers for practice.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
               {/* Removed inner link */}
            </CardContent>
          </Card>
        </Link>

        {/* Practicals Section Card - Wrapped in Link */}
         <Link
          href="https://www.bca-ycmou.com/practicals.html"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent group-hover:shadow-accent/20"> {/* Added h-full and group-hover styles */}
            <CardHeader>
               <div className="flex items-center justify-center mb-2 text-primary">
                  <FlaskConical size={32} />
               </div>
              <CardTitle className="text-center text-xl md:text-2xl">Practicals</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Find practical session materials and guides.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
               {/* Removed inner link */}
            </CardContent>
          </Card>
        </Link>

        {/* E-Books Section Card - Wrapped in Link */}
         <Link
          href="https://www.bca-ycmou.com/books.html"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="h-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent group-hover:shadow-accent/20"> {/* Added h-full and group-hover styles */}
            <CardHeader>
              <div className="flex items-center justify-center mb-2 text-primary">
                <Book size={32} />
              </div>
              <CardTitle className="text-center text-xl md:text-2xl">E-Books</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Find digital textbooks and reference materials.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
               {/* Removed inner link */}
            </CardContent>
          </Card>
        </Link>

         {/* Contact Section Card - Wrapped in Link */}
         <Link href="/contact" className="block group">
           <Card className="h-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent group-hover:shadow-accent/20"> {/* Added h-full and group-hover styles */}
            <CardHeader>
              <div className="flex items-center justify-center mb-2 text-primary">
                <Mail size={32} />
              </div>
              <CardTitle className="text-center text-xl md:text-2xl">Contact</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Get in touch with us for queries or feedback.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
              {/* Removed inner link */}
            </CardContent>
           </Card>
         </Link>


        {/* About Section Card - Wrapped in Link */}
        <Link href="/about" className="block group">
          <Card className="h-full transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent group-hover:shadow-accent/20 col-span-1"> {/* Added h-full and group-hover styles */}
             <CardHeader>
               <div className="flex items-center justify-center mb-2 text-primary">
                  <Info size={32} />
               </div>
              <CardTitle className="text-center text-xl md:text-2xl">About</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Learn more about this resource hub.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
               {/* Removed inner link */}
            </CardContent>
          </Card>
        </Link>

      </section>
    </div>
  );
};

export default HomePage;
