import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { BookOpen, FileText, FlaskConical, Info, Book } from 'lucide-react'; // Added Book icon for E-Books

const HomePage: React.FC = () => {
  return (
    // Add fade-in animation to the main container
    <div className="container mx-auto py-12 fade-in-up">
      {/* Hero Section */}
      <section className="text-center mb-16">
        {/* Apply primary color to heading */}
        <h1 className="text-4xl font-bold mb-4 text-primary">BCA</h1>
        <p className="text-lg text-muted-foreground">resource for quality education materials.</p> {/* Updated description */}
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Updated grid columns to 4 for E-Books */}
        {/* Notes Section Card - Added transition and hover effects with accent border/shadow */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex items-center justify-center mb-2 text-primary">
                <BookOpen size={32} />
            </div>
            <CardTitle className="text-center">Notes</CardTitle>
            <CardDescription className="text-center">Access study notes for various subjects.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {/* Updated Link: Pointing to external site and opening in new tab */}
            <Link
              href="https://www.bca-ycmou.com/notes.html"
              className="text-accent hover:underline font-medium" // Use theme accent color
              target="_blank"
              rel="noopener noreferrer"
            >
              View Notes
            </Link>
          </CardContent>
        </Card>

        {/* Question Papers Archive Card - Added transition and hover effects with accent border/shadow */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <FileText size={32} />
             </div>
            <CardTitle className="text-center">Question Papers</CardTitle>
            <CardDescription className="text-center">Download previous exam papers for practice.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
             {/* Updated Link: Pointing to external site and opening in new tab */}
            <Link
              href="https://www.bca-ycmou.com/question_papers.html"
              className="text-accent hover:underline font-medium" // Use theme accent color
              target="_blank"
              rel="noopener noreferrer"
            >
              View Question Papers
            </Link>
          </CardContent>
        </Card>

        {/* Practicals Section Card - Added transition and hover effects with accent border/shadow */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <FlaskConical size={32} />
             </div>
            <CardTitle className="text-center">Practicals</CardTitle>
            <CardDescription className="text-center">Find practical session materials and guides.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="https://www.bca-ycmou.com/practicals.html"
              className="text-accent hover:underline font-medium" // Use theme accent color
              target="_blank"
              rel="noopener noreferrer"
            >
              View Practicals
            </Link>
          </CardContent>
        </Card>

        {/* E-Books Section Card - Added transition and hover effects */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex items-center justify-center mb-2 text-primary">
              <Book size={32} /> {/* E-Books Icon */}
            </div>
            <CardTitle className="text-center">E-Books</CardTitle>
            <CardDescription className="text-center">Find digital textbooks and reference materials.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link
              href="https://www.bca-ycmou.com/books.html" // Updated E-Books link
              className="text-accent hover:underline font-medium" // Use theme accent color
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security measure for new tabs
            >
              View E-Books
            </Link>
          </CardContent>
        </Card>

        {/* About Section Card - Spans across columns */}
        {/* Adjusted col-span to span all 4 columns */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20 col-span-1 md:col-span-2 lg:col-span-4">
           <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <Info size={32} /> {/* Changed icon */}
             </div>
            <CardTitle className="text-center">About</CardTitle>
            <CardDescription className="text-center">Learn more about this resource hub.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/about" className="text-accent hover:underline font-medium"> {/* Use theme accent color */}
              About Us
            </Link>
          </CardContent>
        </Card>

      </section>

      {/* Attribution moved to layout */}
    </div>
  );
};

export default HomePage;
