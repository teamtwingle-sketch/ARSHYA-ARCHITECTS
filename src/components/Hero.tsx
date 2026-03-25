"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Parallax effect
    gsap.to(imageRef.current, {
      y: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade out text on scroll
    gsap.to(textRef.current, {
      opacity: 0,
      y: -50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        end: "center top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef as any}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
          alt="Modern Architecture"
          fill
          priority
          className="object-cover opacity-70 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div 
        ref={textRef} 
        className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-[0.2em] text-sm uppercase font-semibold mb-6"
        >
          Arshya Architects
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-white font-bold tracking-tight leading-tight mb-8"
        >
          Modern Architecture, <br /> Rooted in Kerala
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll Down</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <motion.div
            className="w-full h-full bg-gold"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
