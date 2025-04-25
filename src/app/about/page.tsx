import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 fade-in-up"> {/* Added animation */}
      {/* Apply primary color to heading */}
      <h1 className="text-3xl font-bold mb-8 text-primary">About BCA</h1> {/* Updated heading */}
      {/* Add your about content here */}
      <p>This page provides information about the Bachelor of Computer Applications program.</p>
      <p className="mt-4">Explore our resources including notes, question papers, and practical guides.</p>
    </div>
  );
};

export default AboutPage;
