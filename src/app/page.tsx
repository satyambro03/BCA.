import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Satyam's Edu Site</h1>
        <p className="text-lg">Your go-to resource for quality education materials.</p>
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
            <Link href="/notes" className="text-accent hover:underline">
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
            <Link href="/question-papers" className="text-accent hover:underline">
              View Question Papers
            </Link>
          </CardContent>
        </Card>

        {/* Add more cards for other resources as needed */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Learn more about Satyam's Edu Site</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/about" className="text-accent hover:underline">
              About us
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Attribution */}
      <footer className="mt-12 text-center">
        <p>
          &copy; {new Date().getFullYear()} Satyam's Edu Site. All rights reserved. | By Satyam Vishwakarma
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
