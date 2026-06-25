"use client";

import { Navbar } from "@/components/Petals/Navbar";
import { Footer } from "@/components/Petals/Footer";
import { FloatingPetals } from "@/components/Petals/FloatingPetals";
import { FinalCTA } from "@/components/Petals/FinalCTA";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Sparkles, 
  BookOpen, 
  PenTool, 
  Video, 
  Palette, 
  Cpu, 
  Home, 
  Heart,
  Eye,
  Rocket,
  CheckCircle2,
  Users,
  Wand2,
  Globe,
  Stars,
  UserCircle
} from "lucide-react";

const publishingFeature = {
  icon: Heart,
  title: "Publishing & Storybooks",
  desc: "At the heart of PETALS is our commitment to physical and digital publishing. We create exquisitely illustrated books, fantasy collections, lore guides, and immersive bedtime stories designed to be keepsakes for dreamers of all ages.",
  details: [
    "Premium Hardbound Collections",
    "Digital Immersive Storybooks",
    "Curated Lore & Art Guides",
    "Global Amazon Distribution"
  ]
};

const secondaryFeatures = [
  {
    icon: Video,
    title: "Animation & Cinematic Experiences",
    desc: "We bring stories to life through animated shorts, visual storytelling, cinematic sequences, narrated fantasy experiences, and atmospheric creative productions.",
    details: [
      "Cinematic 4K Short Films",
      "Character Animation Reels",
      "Atmospheric Story Trailers"
    ]
  },
  {
    icon: PenTool,
    title: "Fantasy Illustration & Art",
    desc: "Our illustrations celebrate beauty, imagination, and storytelling through enchanting characters, whimsical landscapes, floral fantasy aesthetics, and emotionally expressive artwork.",
    details: [
      "Bespoke Character Concepts",
      "Whimsical Fantasy Landscapes",
      "Floral & Enchanted Aesthetics"
    ]
  }
];

const regularCreations = [
  {
    icon: BookOpen,
    title: "Original Fantasy Storytelling",
    desc: "We develop creator-owned fantasy worlds filled with unforgettable characters, magical adventures, emotional journeys, and timeless themes of hope and friendship."
  },
  {
    icon: Palette,
    title: "Fine Art, Paintings & Sketches",
    desc: "PETALS embraces the artistic process through fantasy-inspired paintings, concept art, sketch collections, watercolor illustrations, and curated artbook experiences."
  },
  {
    icon: Cpu,
    title: "AI-Assisted Creative Production",
    desc: "We thoughtfully combine artistic vision with modern creative technology. Every AI-assisted artwork is guided by original storytelling, worldbuilding, and emotional direction."
  },
  {
    icon: Home,
    title: "Fantasy Décor & Collectible Art",
    desc: "Our creations extend beyond stories into beautiful decorative art, collectible illustrations, children's room décor, and wall prints designed to bring wonder into everyday spaces."
  }
];

const creatorTools = [
  "Gemini Storyweaver",
  "Lore Weaver AI",
  "Character Creator AI",
  "Imagen Art Studio",
  "Nano Banana Creator",
  "Flow Cinematic Studio",
  "Lyria Music Composer",
  "Birthday Storybook Creator",
  "Parent Story Creator",
  "Learning Adventure Builder"
];

const audienceGroups = [
  {
    title: "Authors & Storytellers",
    desc: "Bring books, characters, and worlds to life.",
    icon: PenTool
  },
  {
    title: "Families & Parents",
    desc: "Create personalized storybooks, bedtime adventures, and cherished memories.",
    icon: Heart
  },
  {
    title: "Educators & Students",
    desc: "Transform learning into engaging adventures through educational storytelling.",
    icon: Globe
  },
  {
    title: "Artists & Creators",
    desc: "Explore new ways to create illustrations, animations, and visual experiences.",
    icon: Palette
  },
  {
    title: "Dreamers of All Ages",
    desc: "Because imagination belongs to everyone.",
    icon: Stars
  }
];

export default function AboutPage() {
  const logoImg = PlaceHolderImages.find(img => img.id === 'petals-logo');
  const heroRose = PlaceHolderImages.find(img => img.id === 'hero-rose');

  return (
    <div className="min-h-screen bg-pearl-white selection:bg-rose-pink selection:text-white">
      <FloatingPetals />
      <Navbar />

      <main>
        {/* Editorial Hero Section */}
        <section className="relative pt-64 pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroRose?.imageUrl || ""}
              alt="Rose"
              fill
              className="object-cover opacity-20"
              priority
              data-ai-hint="pink rose"
            />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-rose-pink/10 text-rose-pink text-[10px] font-bold uppercase tracking-[0.4em] border border-rose-pink/20 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5" /> Discover Our Heart
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl md:text-6xl lg:text-7xl text-foreground"
            >
              About <span className="italic text-rose-pink">PETALS Studio</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-headline italic leading-relaxed max-w-2xl mx-auto"
            >
              &quot;Crafting illustrated stories that unfold like petals, blooming layer by layer.&quot;
            </motion.p>
          </div>
        </section>

        {/* Company Introduction Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10 text-center lg:text-left"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-rose-pink font-bold uppercase tracking-[0.2em] text-[10px]">
                    🌸 Company Name
                  </div>
                  <h2 className="font-headline text-5xl md:text-7xl text-foreground leading-tight">PETALS Studio</h2>
                  <div className="h-1 w-12 bg-rose-pink rounded-full mx-auto lg:mx-0" />
                </div>

                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-rose-pink font-bold uppercase tracking-[0.2em] text-[10px]">
                      ✨ Tagline
                    </div>
                    <p className="text-2xl md:text-3xl text-rose-pink font-headline italic leading-tight">
                      &quot;Crafting illustrated stories that unfold like petals, <span className="font-script text-4xl md:text-5xl not-italic ml-1">blooming</span> layer by layer.&quot;
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-rose-pink font-bold uppercase tracking-[0.2em] text-[10px]">
                      📖 About the Company
                    </div>
                    <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-headline italic leading-relaxed">
                      <p>
                        PETALS Studio is a premium fantasy storytelling and creative studio dedicated to creating enchanting books, magical characters, whimsical worlds, beautiful illustrations, and unforgettable storytelling experiences.
                      </p>
                      <p>
                        We believe stories are more than words on a page—they are journeys that inspire imagination, spark wonder, and leave lasting memories in the hearts of readers of all ages.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-rose-pink/10 blur-[120px] rounded-full scale-125 animate-pulse" />
                <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border border-rose-pink/20 p-4 bg-white/40 backdrop-blur-md shadow-2xl group hover:scale-105 transition-transform duration-500">
                  <Image 
                    src={logoImg?.imageUrl || ""}
                    alt="PETALS Studio Logo"
                    fill
                    className="object-cover p-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Side-by-Side Section */}
        <section className="py-24 bg-rose-pink/5 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 md:p-16 rounded-[4rem] border border-rose-pink/10 shadow-xl flex flex-col items-center text-center space-y-10 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-3xl bg-rose-pink/10 text-rose-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8" />
                </div>
                <div className="space-y-6">
                  <h2 className="font-headline text-5xl">Our Vision</h2>
                  <div className="h-1 w-12 bg-rose-pink mx-auto rounded-full opacity-30" />
                </div>
                <p className="text-2xl md:text-3xl text-foreground font-headline italic leading-relaxed">
                  To build a <span className="text-rose-pink not-italic font-bold">timeless fantasy universe</span> where storytelling, illustration, and imagination come together to inspire generations.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 md:p-16 rounded-[4rem] border border-rose-pink/10 shadow-xl flex flex-col items-center text-center space-y-10 group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-3xl bg-rose-pink/10 text-rose-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8" />
                </div>
                <div className="space-y-6">
                  <h2 className="font-headline text-5xl">Our Mission</h2>
                  <div className="h-1 w-12 bg-rose-pink mx-auto rounded-full opacity-30" />
                </div>
                <div className="text-lg md:text-xl text-muted-foreground font-headline italic leading-relaxed space-y-6">
                  <p>
                    PETALS Studio is dedicated to creating enchanting worlds and emotionally meaningful experiences through art and imagination.
                  </p>
                  <p>
                    We bring together fantasy storytelling, illustration, animation, and fine art under one cohesive creative vision to spark wonder and leave a lasting emotional impression.
                  </p>
                  <p className="text-rose-pink font-bold text-2xl not-italic">
                    We create more than stories—we build worlds.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Creator Studio Section */}
        <section className="py-32 relative overflow-hidden bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-rose-pink font-bold uppercase tracking-widest text-xs">
                    <Wand2 className="w-4 h-4" /> The Heart of Innovation
                  </div>
                  <h2 className="font-headline text-5xl md:text-6xl">Creator Studio</h2>
                  <div className="h-1 w-12 bg-rose-pink rounded-full" />
                </div>
                <div className="space-y-6 text-xl text-muted-foreground font-headline italic leading-relaxed">
                  <p>
                    At the heart of PETALS Studio is Creator Studio — an evolving collection of AI-powered creative tools designed to help storytellers create, illustrate, animate, compose, and publish their ideas.
                  </p>
                </div>
                <div className="p-8 rounded-[3rem] bg-rose-pink/5 border border-rose-pink/10 shadow-sm">
                  <p className="text-lg text-foreground font-headline italic leading-relaxed">
                    Together, these tools enable creators to move from imagination to finished creation within a unified creative ecosystem.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="glass-morphism rounded-[3rem] p-10 space-y-6 border border-rose-pink/10 shadow-xl">
                  <h3 className="font-headline text-2xl text-rose-pink">Current tools include:</h3>
                  <ul className="space-y-3">
                    {creatorTools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground font-headline italic text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-pink" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who PETALS Studio Serves Section */}
        <section className="py-32 bg-rose-pink/5 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-headline text-5xl md:text-6xl">Who PETALS Studio Serves</h2>
              <p className="text-xl text-muted-foreground italic font-headline">Because imagination belongs to everyone.</p>
              <div className="h-1 w-12 bg-rose-pink rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {audienceGroups.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-rose-pink/10 group flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-rose-pink/10 text-rose-pink flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <group.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-headline text-3xl group-hover:text-rose-pink transition-colors">{group.title}</h3>
                    <p className="text-muted-foreground leading-relaxed italic font-headline text-lg">{group.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Create Grid */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-headline text-5xl md:text-6xl">What We Create</h2>
              <p className="text-xl text-muted-foreground italic font-headline">Crafting wonders across every magical medium.</p>
            </div>

            {/* Row 1: Publishing Featured Card (Big) - Made Smaller */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8 bg-rose-pink/5 p-8 md:p-12 rounded-[2.5rem] border border-rose-pink/10 shadow-lg flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-all duration-500 min-h-[300px]"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-rose-pink flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <publishingFeature.icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="font-headline text-2xl md:text-3xl text-rose-pink">{publishingFeature.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground italic font-headline leading-relaxed">
                    {publishingFeature.desc}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] border border-rose-pink/10 shadow-sm flex flex-col justify-center space-y-6 group hover:shadow-xl transition-all duration-500 min-h-[300px]"
              >
                <div className="flex items-center gap-2 text-rose-pink font-bold uppercase tracking-widest text-[10px]">
                  <Sparkles className="w-3.5 h-3.5" /> Technical Standards
                </div>
                <ul className="space-y-4">
                  {publishingFeature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-muted-foreground italic font-headline text-sm">
                      <CheckCircle2 className="w-4 h-4 text-rose-pink shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Row 2: Animation & Illustration Side-by-Side - Made Smaller */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
              {secondaryFeatures.map((featured, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rose-pink/5 p-8 md:p-10 rounded-[2.5rem] border border-rose-pink/10 shadow-lg flex flex-col gap-8 group hover:shadow-xl transition-all duration-500 min-h-[320px]"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-16 h-16 rounded-full bg-white text-rose-pink flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <featured.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="font-headline text-2xl text-rose-pink leading-tight">{featured.title}</h3>
                      <p className="text-muted-foreground italic font-headline leading-relaxed text-base">
                        {featured.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-rose-pink/10 mt-auto">
                    <ul className="grid grid-cols-1 gap-2.5">
                      {featured.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground italic font-headline text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-pink shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {regularCreations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-rose-pink/10 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-rose-pink/10 text-rose-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline text-2xl mb-4 group-hover:text-rose-pink transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm italic">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
