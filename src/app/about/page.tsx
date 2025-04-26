import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenText, FileText, Lightbulb, Book } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 fade-in-up px-4"> {/* Added horizontal padding */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">About BCA Resource Hub</h1> {/* Responsive heading */}

      <section className="mb-12">
        <p className="text-base md:text-lg text-center text-muted-foreground mb-8 max-w-4xl mx-auto"> {/* Responsive text, max-width */}
          Welcome to the BCA Resource Hub, your dedicated platform for accessing essential materials for the Bachelor of Computer Applications (BCA) program, particularly focusing on resources relevant to YCMOU (Yashwantrao Chavan Maharashtra Open University) students.
        </p>
      </section>

      {/* Adjusted grid for better responsiveness */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex justify-center mb-4 text-primary">
              <BookOpenText className="h-10 w-10 md:h-12 md:w-12" /> {/* Responsive icon size */}
            </div>
            <CardTitle className="text-lg md:text-xl">Comprehensive Notes</CardTitle> {/* Responsive title */}
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground"> {/* Responsive text */}
              Dive into detailed study notes covering a wide range of BCA subjects. Our notes are curated to help you understand core concepts and excel in your coursework.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex justify-center mb-4 text-primary">
              <FileText className="h-10 w-10 md:h-12 md:w-12" /> {/* Responsive icon size */}
            </div>
            <CardTitle className="text-lg md:text-xl">Question Paper Archive</CardTitle> {/* Responsive title */}
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground"> {/* Responsive text */}
              Practice makes perfect! Access a collection of previous year's question papers to familiarize yourself with exam patterns and important topics.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex justify-center mb-4 text-primary">
              <Lightbulb className="h-10 w-10 md:h-12 md:w-12" /> {/* Responsive icon size */}
            </div>
            <CardTitle className="text-lg md:text-xl">Practical Guides</CardTitle> {/* Responsive title */}
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground"> {/* Responsive text */}
              Strengthen your practical skills with our guides and materials designed for lab sessions and practical examinations relevant to the BCA curriculum.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg hover:border-accent hover:shadow-accent/20">
          <CardHeader>
            <div className="flex justify-center mb-4 text-primary">
              <Book className="h-10 w-10 md:h-12 md:w-12" /> {/* Responsive icon size */}
            </div>
            <CardTitle className="text-lg md:text-xl">E-Books Collection</CardTitle> {/* Responsive title */}
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground"> {/* Responsive text */}
              Explore a collection of digital textbooks and reference materials to supplement your learning and deepen your understanding of key subjects.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-secondary-foreground">Our Mission</h2> {/* Responsive heading */}
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto"> {/* Responsive text */}
          Our mission is to provide BCA students with easy access to high-quality educational resources. We aim to simplify the learning process by consolidating notes, question papers, practical materials, and e-books in one convenient location. This platform is created and maintained by Satyam Vishwakarma (S.R) with the goal of supporting fellow students in their academic journey.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
