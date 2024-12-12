import React from 'react';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppPrototype } from './components/AppPrototype';
import { BetaSection } from './components/BetaSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Features />
      <AppPrototype />
      <BetaSection />
      <Footer />
    </Layout>
  );
}