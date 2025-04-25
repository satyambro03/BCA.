import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenText, FileText, Lightbulb } from 'lucide-react'; // Import relevant icons

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 fade-in-up"> {/* Keep animation */}
      <h1 className="text-3xl font-bold mb-8 text-primary text-center">About BCA Resource Hub</h1> {/* Updated heading and centered */}

      <section className="mb-12">
        <p className="text-lg text-center text-muted-foreground mb-8">
          Welcome to the BCA Resource Hub, your dedicated platform for accessing essential materials for the Bachelor of Computer Applications (BCA) program, particularly focusing on resources relevant to YCMOU (Yashwantrao Chavan Maharashtra Open University) students.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <BookOpenText className="h-12 w-12 text-primary" />
            </div>
            <CardTitle>Comprehensive Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Dive into detailed study notes covering a wide range of BCA subjects. Our notes are curated to help you understand core concepts and excel in your coursework.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-primary" />
            </div>
            <CardTitle>Question Paper Archive</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Practice makes perfect! Access a collection of previous year's question papers to familiarize yourself with exam patterns and important topics.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center transition duration-300 ease-in-out hover:shadow-lg">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <CardTitle>Practical Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Strengthen your practical skills with our guides and materials designed for lab sessions and practical examinations relevant to the BCA curriculum.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Our Mission</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our mission is to provide BCA students with easy access to high-quality educational resources. We aim to simplify the learning process by consolidating notes, question papers, and practical materials in one convenient location. This platform is created and maintained by Satyam Vishwakarma (S.R) with the goal of supporting fellow students in their academic journey.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
