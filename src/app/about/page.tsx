import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenText, FileText, Lightbulb, Book } from 'lucide-react'; // Import relevant icons, added Book

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 fade-in-up"> {/* Keep animation */}
      {/* Use primary theme color for heading */}
      <h1 className="text-3xl font-bold mb-8 text-primary text-center">About BCA Resource Hub</h1>

      <section className="mb-12">
         {/* Use muted foreground theme color for paragraph */}
        <p className="text-lg text-center text-muted-foreground mb-8">
          Welcome to the BCA Resource Hub, your dedicated platform for accessing essential materials for the Bachelor of Computer Applications (BCA) program, particularly focusing on resources relevant to YCMOU (Yashwantrao Chavan Maharashtra Open University) students.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20"> {/* Added hover effects */}
          <CardHeader>
            {/* Use primary theme color for icon */}
            <div className="flex justify-center mb-4 text-primary">
              <BookOpenText className="h-12 w-12" />
            </div>
            <CardTitle>Comprehensive Notes</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Use muted foreground theme color for paragraph */}
            <p className="text-muted-foreground">
              Dive into detailed study notes covering a wide range of BCA subjects. Our notes are curated to help you understand core concepts and excel in your coursework.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20"> {/* Added hover effects */}
          <CardHeader>
            {/* Use primary theme color for icon */}
            <div className="flex justify-center mb-4 text-primary">
              <FileText className="h-12 w-12" />
            </div>
            <CardTitle>Question Paper Archive</CardTitle>
          </CardHeader>
          <CardContent>
             {/* Use muted foreground theme color for paragraph */}
            <p className="text-muted-foreground">
              Practice makes perfect! Access a collection of previous year's question papers to familiarize yourself with exam patterns and important topics.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20"> {/* Added hover effects */}
          <CardHeader>
            {/* Use primary theme color for icon */}
            <div className="flex justify-center mb-4 text-primary">
              <Lightbulb className="h-12 w-12" />
            </div>
            <CardTitle>Practical Guides</CardTitle>
          </CardHeader>
          <CardContent>
             {/* Use muted foreground theme color for paragraph */}
            <p className="text-muted-foreground">
              Strengthen your practical skills with our guides and materials designed for lab sessions and practical examinations relevant to the BCA curriculum.
            </p>
          </CardContent>
        </Card>
        {/* E-Books Card */}
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20"> {/* Added hover effects */}
          <CardHeader>
            {/* Use primary theme color for icon */}
            <div className="flex justify-center mb-4 text-primary">
              <Book className="h-12 w-12" /> {/* E-Books Icon */}
            </div>
            <CardTitle>E-Books Collection</CardTitle>
          </CardHeader>
          <CardContent>
             {/* Use muted foreground theme color for paragraph */}
            <p className="text-muted-foreground">
              Explore a collection of digital textbooks and reference materials to supplement your learning and deepen your understanding of key subjects.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        {/* Use secondary foreground theme color for heading */}
        <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Our Mission</h2>
         {/* Use muted foreground theme color for paragraph */}
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our mission is to provide BCA students with easy access to high-quality educational resources. We aim to simplify the learning process by consolidating notes, question papers, practical materials, and e-books in one convenient location. This platform is created and maintained by Satyam Vishwakarma (S.R) with the goal of supporting fellow students in their academic journey.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
