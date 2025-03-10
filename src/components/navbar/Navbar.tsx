'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hero from '../hero/Hero';
import Features from '../features/Features';
import Execute from '../execute/Execute';
import Pricing from '../pricing/Pricing';
import Question from '../question/Question';
import Footer from '../footer/Footer';

// Add these CSS styles at the top of your file or in a separate CSS module
const styles = `
  .animate-section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }

  .animate-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-animate {
    animation: fadeIn 1s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animatedSections, setAnimatedSections] = useState({
    hero: false,
    features: false,
    pricing: false,
    contact: false,
  });

  const pathname = usePathname();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setAnimatedSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }));
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    // Observe all sections
    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  // Scroll handler for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this useEffect to trigger hero animation on mount
  useEffect(() => {
    setAnimatedSections((prev) => ({ ...prev, hero: true }));
  }, []);

  return (
    <>
      <style>{styles}</style>
      <nav className="fixed top-0 left-0 w-full bg-[var(--white)] shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between h-16 ${isMenuOpen ? 'hidden' : ''}`}>
            <div className="flex items-center">
              <div className="lg:hidden">
                <button 
                  onClick={toggleMenu}
                  className="text-[var(--greyadd)] hover:text-gray-900 focus:outline-none cursor-pointer"
                >
                  <svg 
                    className="h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    ) : (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16" 
                      />
                    )}
                  </svg>
                </button>
              </div>
              <div className="w-[118px] md:w-[182px] flex items-center">
                <Link className="ml-[-6px]" href="/">
                  <Image 
                    src="/images/setup.svg"
                    alt="Setup-suite Logo"
                    width={182}
                    height={100}
                    layout="responsive"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block space-x-16">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-[var(--primary)] text-base relative ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-[var(--primary)] text-base"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-[var(--primary)] text-base cursor-pointer"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[var(--primary)] text-base"
              >
                Contact us
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/#" 
                className="text-[var(--primary)] text-base hover:text-gray-900 transition duration-300"
              >
                Sign In
              </Link>
              <Link 
                href="#" 
                className="bg-[var(--foreground)] text-[var(--white)] px-4 py-2 rounded-full font-semibold border-[1.46px] border-[var(--border)] border-b-5 border-b-[var(--border-bottom)]"
              >
                Sign up
              </Link>
            </div>

            <div className="md:hidden lg:hidden">
              <Link 
                href="#" 
                className="text-[var(--primary)] text-[12px] hover:text-gray-900 transition duration-300"
              >
                Sign In
              </Link>
              <Link 
                href="#" 
                className="bg-[var(--foreground)] text-[var(--white)] text-[12px] ml-[10px] px-3 py-1 rounded-full font-semibold border-[1.46px] border-[var(--border)] border-b-5 border-b-[var(--border-bottom)]"
              >
                Sign up
              </Link>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[var(--white)] flex flex-col items-center justify-center transition-all duration-300 z-40">
              <div className='absolute top-4 left-6 text-[var(--greyadd)] hover:text-gray-900 focus:outline-none cursor-pointer w-[118px]'>
                <Image 
                  src="/images/setup.svg"
                  width={118}
                  height={65}
                  alt='logo'
                  layout='responsive'
                />
              </div>
              <button 
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-[var(--greyadd)] hover:text-gray-900 focus:outline-none cursor-pointer"
              >
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              <div className="flex flex-col items-left mt-[-190px] space-y-10">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className={`text-[var(--primary)] text-[14px] font-semibold hover:text-gray-900 flex pl-6 justify-start text-left ${pathname === '/' ? 'bg-[var(--border-bottom)] text-white rounded-lg w-[360px] py-2' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className={`text-[var(--primary)] text-[14px] font-semibold hover:text-gray-900 flex pl-6 justify-start text-left`}
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className={`text-[var(--primary)] text-[14px] font-semibold hover:text-gray-900 flex pl-6 justify-start text-left`}
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-[var(--primary)] text-[14px] font-semibold hover:text-gray-900 flex pl-6 justify-start text-left`}
                >
                  Contact us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Animated Sections */}
      <div id="hero" ref={heroRef} className={`pt-1 ${animatedSections.hero ? 'hero-animate' : ''}`}>
        <Hero />
      </div>

      <div 
        id="features" 
        ref={featuresRef} 
        className={`animate-section ${animatedSections.features ? 'visible' : ''}`}
      >
        <Features />
      </div>

      <Execute />
      

      <div 
        id="pricing" 
        ref={pricingRef} 
        className={`animate-section ${animatedSections.pricing ? 'visible' : ''}`}
      >
        <Pricing />
      </div>

      <Question />

      <div 
        id="contact" 
        ref={contactRef} 
        className={`animate-section ${animatedSections.contact ? 'visible' : ''}`}
      >
        <Footer />
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[var(--foreground)] text-[var(--white)] p-3 rounded-full shadow-lg hover:bg-[var(--border-bottom)] transition-colors duration-300 z-50"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default Navbar;