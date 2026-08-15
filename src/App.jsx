import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import PodcastStudioSpotlight from './components/PodcastStudioSpotlight';
import QuoteCalculator from './components/QuoteCalculator';
import Differentiators from './components/Differentiators';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  const handleOpenVideoModal = (url) => {
    setActiveVideoUrl(url);
  };

  const handleCloseVideoModal = () => {
    setActiveVideoUrl(null);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero onOpenVideoModal={handleOpenVideoModal} />
        <TrustSignals />
        <Services />
        <PodcastStudioSpotlight />
        <QuoteCalculator />
        <Differentiators />
        <Portfolio onOpenVideoModal={handleOpenVideoModal} />
        <About />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
      <VideoModal videoUrl={activeVideoUrl} onClose={handleCloseVideoModal} />
    </div>
  );
}
