"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  Globe, 
  Palette, 
  Video, 
  Music, 
  ArrowRight,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DreamweaverPortal } from "@/components/Petals/DreamweaverPortal";

const aiFeatures = [
  {
    icon: BookOpen,
    title: "Gemini Storyweaver",
    desc: "Create personalized stories, magical adventures, and storybook chapters."
  },
  {
    icon: Users,
    title: "Character Creator AI",
    desc: "Design heroes, princesses, fairies, magical creatures, and detailed backstories."
  },
  {
    icon: Globe,
    title: "Lore Weaver AI",
    desc: "Build fantasy worlds, kingdoms, cultures, creatures, and magical lore."
  },
  {
    icon: Palette,
    title: "Imagen Art Studio",
    desc: "Generate beautiful illustrations, fantasy artwork, posters, and storybook scenes."
  },
  {
    icon: Video,
    title: "Flow Cinematic Studio",
    desc: "Transform stories into animated adventures, trailers, and visual experiences."
  },
  {
    icon: Music,
    title: "Lyria Music Composer",
    desc: "Create magical soundtracks, lullabies, fantasy themes, and musical storytelling."
  }
];

export function CreatorIntro() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Decorative Floral Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-pink/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fairy-gold/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-rose-pink/10 text-rose-pink text-[10px] font-bold uppercase tracking-[0.4em] border border-rose-pink/20 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> THE FUTURE OF CREATIVE STORYTELLING
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="font-headline text-5xl md:text-7xl text-foreground">
              Introducing <span className="italic text-rose-pink">Creator Studio</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground font-headline italic">
              Where Imagination Blooms Into Stories, Art, Music & Adventures
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-headline italic max-w-4xl mx-auto leading-relaxed pt-4"
          >
            Creator Studio is PETALS Studio&apos;s next-generation AI-powered creative platform designed for children, parents, educators, storytellers, and dreamers. Using Google&apos;s creative AI ecosystem, we transform ideas into magical experiences.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-morphism rounded-[2.5rem] p-8 md:p-10 border border-rose-pink/10 group hover:shadow-2xl hover:shadow-rose-pink/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-6 right-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-pink/5 text-rose-pink text-[9px] font-bold uppercase tracking-widest border border-rose-pink/10">
                  <Clock className="w-3 h-3" /> Coming Soon
                </div>
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-rose-pink/10 text-rose-pink flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-headline text-2xl mb-4 text-foreground group-hover:text-rose-pink transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm italic font-headline leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dreamweaver Portal Section (Moved here) */}
        <DreamweaverPortal />

        {/* Vision Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[4rem] bg-rose-pink/5 border border-rose-pink/10 text-center space-y-10 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(166,123,91,0.2)]"
        >
          <div className="space-y-6 relative z-10">
            <h3 className="font-headline text-4xl md:text-5xl text-foreground">Every Child Can Become a Creator</h3>
            <div className="h-1 w-16 bg-rose-pink mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <p className="text-xl md:text-2xl text-muted-foreground font-headline italic leading-relaxed">
              PETALS Studio believes every child deserves the opportunity to become an author, artist, storyteller, dreamer, and world-builder. Creator Studio combines imagination with responsible AI to help families create meaningful stories and magical memories together.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
              <Button asChild size="sm" className="bg-rose-pink text-white hover:bg-rose-pink/90 rounded-full px-10 h-12 text-xs font-bold uppercase tracking-widest shadow-xl shadow-rose-pink/20">
                <Link href="/creator">Explore Creator Studio</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-rose-pink text-rose-pink hover:bg-rose-pink/5 rounded-full px-10 h-12 text-xs font-bold uppercase tracking-widest">
                <Link href="/creator">View Creative Tools</Link>
              </Button>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground opacity-60 pt-8">
              Powered by Google&apos;s Creative AI Ecosystem
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
