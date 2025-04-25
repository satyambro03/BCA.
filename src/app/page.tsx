import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to BCA</h1> {/* Updated heading */}
        <p className="text-lg text-muted-foreground">resource for quality education materials.</p> {/* Updated description */}
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Notes Section Card */}
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Access study notes for various subjects.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Updated Link: Pointing to external site and opening in new tab */}
            <Link
              href="https://www.bca-ycmou.com/notes.html"
              className="text-teal-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Notes
            </Link>
          </CardContent>
        </Card>

        {/* Question Papers Archive Card */}
        <Card>
          <CardHeader>
            <CardTitle>Question Papers</CardTitle>
            <CardDescription>Download previous exam papers for practice.</CardDescription>
          </CardHeader>
          <CardContent>
             {/* Updated Link: Pointing to external site and opening in new tab */}
            <Link
              href="https://www.bca-ycmou.com/question_papers.html"
              className="text-teal-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Question Papers
            </Link>
          </CardContent>
        </Card>

        {/* Practicals Section Card */}
        <Card>
          <CardHeader>
            <CardTitle>Practicals</CardTitle>
            <CardDescription>Find practical session materials and guides.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://www.bca-ycmou.com/practicals.html"
              className="text-teal-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Practicals
            </Link>
          </CardContent>
        </Card>

        {/* About Section Card */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Learn more about BCA</CardDescription> {/* Updated description */}
          </CardHeader>
          <CardContent>
            <Link href="/about" className="text-teal-accent hover:underline">
              About us
            </Link>
          </CardContent>
        </Card>

        {/* Add more cards for other resources as needed */}

      </section>

      {/* Attribution moved to layout */}
    </div>
  );
};

export default HomePage;
