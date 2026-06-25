
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Menu, X, Wand2, Users } from "lucide-react";
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoImg = PlaceHolderImages.find(img => img.id === 'petals-logo');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Books', href: '/books' },
    { name: 'Videos', href: '/videos' },
    { name: 'Creator Studio', href: '/creator', icon: Wand2 },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
  ];

  const whatsappLink = "https://chat.whatsapp.com/LOI56PpgVYZ7MoM270xFhO";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-morphism mx-6 mt-4 rounded-full shadow-[0_20px_50px_rgba(166,123,91,0.15)]' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-rose-pink/20 transition-transform duration-500 group-hover:scale-110 shadow-sm">
            <Image 
              src={logoImg?.imageUrl || ""} 
              alt="Petals Logo" 
              fill 
              className="object-cover"
              data-ai-hint="logo"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-3xl tracking-widest uppercase font-bold">Petals</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-1 font-bold">Studio</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-bold uppercase tracking-widest hover:text-rose-pink transition-colors flex items-center gap-2 ${link.name === 'Creator Studio' ? 'text-rose-pink' : 'text-foreground/80'}`}
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="border-rose-pink/20 text-rose-pink hover:bg-rose-pink hover:text-white rounded-full px-6 h-10 text-xs font-bold uppercase tracking-widest transition-all">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Users className="w-3.5 h-3.5 mr-2" /> Join Community
              </a>
            </Button>
            <Button asChild size="sm" className="bg-rose-pink text-white hover:bg-rose-pink/90 rounded-full px-6 h-10 text-xs font-bold uppercase tracking-widest shadow-lg shadow-rose-pink/20">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass-morphism rounded-[2rem] p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-headline font-bold hover:text-rose-pink flex items-center justify-center gap-2"
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button asChild variant="outline" size="sm" className="border-rose-pink text-rose-pink rounded-full h-12">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Join Community
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-rose-pink text-white rounded-full h-12">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
