"use client";

import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from 'next/link';

export function Hero() {
  const roseImg = PlaceHolderImages.find(img => img.id === 'hero-rose');

  const scrollToContent = () => {
    const nextSection = document.getElementById('after-hero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[105svh] flex items-center overflow-hidden bg-white">
      {/* Background Image Container with Edge Blur */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={roseImg?.imageUrl || ""}
          alt="Cinematic Background"
          fill
          className="object-cover brightness-105"
          style={{ objectPosition: '30% 40%' }}
          data-ai-hint="signature rose background"
          priority
        />
        
        {/* Glassmorphism Edge Blur Overlay */}
        <div className="absolute inset-0 z-10 backdrop-blur-[20px] [mask-image:radial-gradient(circle_at_center,transparent_45%,black_100%)]" />
        
        {/* Light Mask for legibility */}
        <div className="absolute inset-0 bg-black/5 z-20" />
        
        {/* Thin layer of soft white fog rising from bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/60 via-white/20 to-transparent z-30" />
      </div>

      <div className="container mx-auto px-12 relative z-40 flex justify-end items-center min-h-screen">
        <div className="max-w-full lg:max-w-[50%] mt-10">
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-morphism rounded-[4rem] p-10 md:p-12 space-y-8 text-left shadow-[0_60px_120px_-30px_rgba(166,123,91,0.35)] border border-white/40"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-pink/10 text-rose-pink text-[10px] font-bold uppercase tracking-[0.3em] border border-rose-pink/20 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> THE NEXT GENERATION OF FANTASY
                </span>
              </motion.div>
              
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
                Crafting illustrated stories that <br />
                unfold like petals, <span className="font-script text-6xl md:text-7xl lg:text-8xl text-rose-pink block mt-2 drop-shadow-sm">blooming</span> <span className="block -mt-2">layer by layer.</span>
              </h1>
              
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed font-headline italic">
                Creating magical storybooks, enchanting characters, and cinematic animated adventures that capture the heart of imagination.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Button asChild className="h-12 px-10 rounded-full bg-rose-pink text-white hover:bg-rose-pink/90 text-[10px] font-bold uppercase tracking-widest shadow-2xl shadow-rose-pink/30 group">
                <Link href="/books">
                  Explore Stories <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-10 rounded-full border-rose-pink/20 bg-white/50 backdrop-blur-md text-rose-pink hover:bg-rose-pink hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest group">
                <Link href="/gallery">
                  <Sparkles className="mr-3 w-4 h-4" /> Meet the Characters
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40"
      >
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center gap-3 group text-rose-pink/40 hover:text-rose-pink transition-colors"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border border-rose-pink/20 flex justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-1 bg-rose-pink rounded-full"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
