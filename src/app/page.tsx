
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { BookOpen, FileText, FlaskConical, Info, Book, Mail, ClipboardCheck, Award, ClipboardList } from 'lucide-react'; // Added ClipboardList icon

const HomePage: React.FC = () => {
  return (
    // Added content-area class for background styling
    <div className="container mx-auto py-12 fade-in-up px-4 content-area">

      {/* Features Section - Ensure responsive grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Adjusted gaps and breakpoints */}
        {/* Notes Section Card - Wrapped in Link */}
        <Link
          href="https://www.bca-ycmou.com/notes.html"
          className="block group" // Added block and group for styling consistency
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Standard hover effect: increased scale, smoother transition, border color change */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
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
          {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
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
          {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
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
           {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
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

        {/* Home Assignments Section Card - Wrapped in Link */}
        <Link
          href="https://asm.ycmou.org.in/SiteContent/frmLanding"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
           {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
            <CardHeader>
              <div className="flex items-center justify-center mb-2 text-primary">
                <ClipboardCheck size={32} />
              </div>
              <CardTitle className="text-center text-xl md:text-2xl">Home Assignments</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Access and submit your home assignments.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
              {/* Content can be added here if needed */}
            </CardContent>
          </Card>
        </Link>

        {/* Hall Ticket Section Card - Wrapped in Link */}
        <Link
          href="https://ycmou.digitaluniversity.ac/PreExamV2_DownloadHallTicket_New.aspx?ID=28070"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
           {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
            <CardHeader>
              <div className="flex items-center justify-center mb-2 text-primary">
                <ClipboardList size={32} /> {/* Using ClipboardList icon for Hall Ticket */}
              </div>
              <CardTitle className="text-center text-xl md:text-2xl">Hall Ticket</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Download your examination hall ticket.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
              {/* Content can be added here if needed */}
            </CardContent>
          </Card>
        </Link>

        {/* Result Section Card - Wrapped in Link */}
        <Link
          href="https://ycmou.digitaluniversity.ac/SearchDuplicateResult.aspx?ID=861"
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
           {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
            <CardHeader>
              <div className="flex items-center justify-center mb-2 text-primary">
                <Award size={32} /> {/* Using Award icon for Result */}
              </div>
              <CardTitle className="text-center text-xl md:text-2xl">Result</CardTitle> {/* Responsive title */}
              <CardDescription className="text-center text-sm md:text-base">Check your exam results online.</CardDescription> {/* Responsive description */}
            </CardHeader>
            <CardContent className="text-center">
              {/* Content can be added here if needed */}
            </CardContent>
          </Card>
        </Link>

         {/* Contact Section Card - Wrapped in Link */}
         <Link href="/contact" className="block group">
            {/* Standard hover effect */}
           <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border">
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
           {/* Standard hover effect */}
          <Card className="h-full transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary group-hover:shadow-primary/20 border col-span-1">
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
