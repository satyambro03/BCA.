
import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { BookOpen, FileText, FlaskConical, Info, Book, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 fade-in-up px-4"> {/* Added horizontal padding */}
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-16"> {/* Adjusted margin */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">BCA</h1> {/* Responsive heading size */}
        <p className="text-base md:text-lg text-muted-foreground">resource for quality education materials.</p> {/* Responsive text size */}
      </section>

      {/* Features Section - Ensure responsive grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Adjusted gaps and breakpoints */}
        {/* Notes Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex items-center justify-center mb-2 text-primary">
                <BookOpen size={32} />
            </div>
            <CardTitle className="text-center text-xl md:text-2xl">Notes</CardTitle> {/* Responsive title */}
            <CardDescription className="text-center text-sm md:text-base">Access study notes for various subjects.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="https://www.bca-ycmou.com/notes.html"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Notes
            </Link>
          </CardContent>
        </Card>

        {/* Question Papers Archive Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <FileText size={32} />
             </div>
            <CardTitle className="text-center text-xl md:text-2xl">Question Papers</CardTitle> {/* Responsive title */}
            <CardDescription className="text-center text-sm md:text-base">Download previous exam papers for practice.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="https://www.bca-ycmou.com/question_papers.html"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Question Papers
            </Link>
          </CardContent>
        </Card>

        {/* Practicals Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <FlaskConical size={32} />
             </div>
            <CardTitle className="text-center text-xl md:text-2xl">Practicals</CardTitle> {/* Responsive title */}
            <CardDescription className="text-center text-sm md:text-base">Find practical session materials and guides.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="https://www.bca-ycmou.com/practicals.html"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Practicals
            </Link>
          </CardContent>
        </Card>

        {/* E-Books Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex items-center justify-center mb-2 text-primary">
              <Book size={32} />
            </div>
            <CardTitle className="text-center text-xl md:text-2xl">E-Books</CardTitle> {/* Responsive title */}
            <CardDescription className="text-center text-sm md:text-base">Find digital textbooks and reference materials.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="https://www.bca-ycmou.com/books.html"
              className="text-accent hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View E-Books
            </Link>
          </CardContent>
        </Card>

         {/* Contact Section Card */}
         <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex items-center justify-center mb-2 text-primary">
              <Mail size={32} />
            </div>
            <CardTitle className="text-center text-xl md:text-2xl">Contact</CardTitle> {/* Responsive title */}
            <CardDescription className="text-center text-sm md:text-base">Get in touch with us for queries or feedback.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/contact" className="text-accent hover:underline font-medium">
              Contact Us
            </Link>
          </CardContent>
        </Card>


        {/* About Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20 col-span-1">
           <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <Info size={32} />
             </div>
            <CardTitle className="text-center text-xl md:text-2xl">About</CardTitle> {/* Responsive title */}
            <CardDescription className="text-center text-sm md:text-base">Learn more about this resource hub.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/about" className="text-accent hover:underline font-medium">
              About Us
            </Link>
          </CardContent>
        </Card>

      </section>
    </div>
  );
};

export default HomePage;
