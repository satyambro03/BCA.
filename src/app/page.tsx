import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { BookOpen, FileText, FlaskConical, GraduationCap } from 'lucide-react'; // Added icons

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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* FYBCA Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                <GraduationCap size={32} />
             </div>
            <CardTitle className="text-center">FYBCA</CardTitle>
            <CardDescription className="text-center">Resources for First Year BCA students.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {/* Placeholder or link to relevant section */}
            <span className="text-muted-foreground italic">Coming Soon</span>
            {/* Example Link (if available):
            <Link href="/fybca" className="text-accent hover:underline font-medium">
              Explore FYBCA Resources
            </Link> */}
          </CardContent>
        </Card>

        {/* SYBCA Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                 <GraduationCap size={32} />
             </div>
            <CardTitle className="text-center">SYBCA</CardTitle>
            <CardDescription className="text-center">Resources for Second Year BCA students.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {/* Placeholder or link to relevant section */}
             <span className="text-muted-foreground italic">Coming Soon</span>
            {/* Example Link (if available):
            <Link href="/sybca" className="text-accent hover:underline font-medium">
              Explore SYBCA Resources
            </Link> */}
          </CardContent>
        </Card>

        {/* TYBCA Section Card */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-2 text-primary">
                 <GraduationCap size={32} />
             </div>
            <CardTitle className="text-center">TYBCA</CardTitle>
            <CardDescription className="text-center">Resources for Third Year BCA students.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {/* Placeholder or link to relevant section */}
             <span className="text-muted-foreground italic">Coming Soon</span>
            {/* Example Link (if available):
            <Link href="/tybca" className="text-accent hover:underline font-medium">
              Explore TYBCA Resources
            </Link> */}
          </CardContent>
        </Card>

        {/* About Section Card - Kept for completeness */}
        <Card className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent hover:shadow-accent/20 md:col-span-2 lg:col-span-3">
          <CardHeader>
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
