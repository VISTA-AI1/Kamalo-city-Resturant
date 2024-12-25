import React from 'react';
import OwnerSection from './about/OwnerSection';
import AboutHero from './about/AboutHero';
import AboutContent from './about/AboutContent';

export default function About() {
  return (
    <div>
      <AboutHero />
      <OwnerSection />
      <AboutContent />
    </div>
  );
}