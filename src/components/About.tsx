"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Crafting Timeless <br className="hidden md:block" />
              <span className="text-gold">Spaces</span>
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full" />
            <p className="text-lg text-zinc-800 leading-relaxed max-w-lg mt-4">
              At Arshya Architects, we blend the rich heritage of Kerala architecture with ultra-modern design sensibilities. Our spaces are designed not just to be lived in, but to be experienced.
            </p>
            <p className="text-lg text-zinc-800 leading-relaxed max-w-lg">
              We focus on natural light, cross-ventilation, and sustainable materials native to our tropical climate, delivering a luxury, minimal, and deeply rooted aesthetic.
            </p>
            
            <div className="mt-8 flex gap-8">
              <div>
                <span className="block text-4xl font-bold font-heading text-zinc-900">15+</span>
                <span className="text-sm text-zinc-600 uppercase tracking-widest mt-2 block">Years of Excellence</span>
              </div>
              <div className="w-[1px] bg-black/10 h-16" />
              <div>
                <span className="block text-4xl font-bold font-heading text-zinc-900">200+</span>
                <span className="text-sm text-zinc-600 uppercase tracking-widest mt-2 block">Projects completed</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
            <motion.div style={{ y: imgY }} className="absolute inset-0 h-[120%] -top-[10%] w-full">
              <Image
                src="/images/about_kerala_1774456479897.png"
                alt="Kerala Modern Architecture Detail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
