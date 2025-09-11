import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Workflow from './components/Workflow';
import Architecture from './components/Architecture';
import Contributors from './components/Contributors';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Demo />
        <Workflow />
        <Architecture />
        <Contributors />
        <Downloads />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;