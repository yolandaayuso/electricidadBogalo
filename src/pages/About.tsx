
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AboutHero from '@/components/about/AboutHero';
import CompanyHistory from '@/components/about/CompanyHistory';
import CompanyValues from '@/components/about/CompanyValues';
import TeamSection from '@/components/about/TeamSection';
import ContactSection from '@/components/about/ContactSection';

const About = () => {
  return (
    <>
      <SEO 
        title="Quiénes Somos" 
        description="Electricidad Bógalo es una empresa con más de 20 años de experiencia en instalaciones eléctricas y energías renovables, comprometida con la calidad y el servicio al cliente."
        keywords="electricista Ciudad Real, empresa instalaciones eléctricas, energías renovables Castilla-La Mancha, Campo de Montiel"
      />
      <Navbar />
      <main>
        <AboutHero />
        <CompanyHistory />
        <CompanyValues />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
