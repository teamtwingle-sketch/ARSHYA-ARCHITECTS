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
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group mb-12 lg:mb-0">
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

        {/* Extended SEO Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-zinc-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-600 leading-relaxed text-[15px]">
            <div>
              <h3 className="text-xl font-bold font-heading text-zinc-900 mb-4">Leading Architecture & Civil Engineering Company in Kozhikode</h3>
              <p className="mb-4">
                When searching for the <strong>best architects in Kerala</strong> or a trusted <strong>civil engineer in Kozhikode</strong>, Arshya Architects stands out with an unyielding commitment to excellence. As a premier construction company in Kozhikode, our primary goal is to merge the timeless charm of traditional Kerala architecture with the sophistication of modern, Apple-inspired minimalism. We offer highly tailored residential architects and commercial architects services specifically crafted to suit Kerala’s unique tropical climate.
              </p>
              <p>
                From structural design to securing <strong>building permits in Kerala</strong>, we provide end-to-end civil engineering services. Achieving a municipality building permit or Kerala house plan approval can seem daunting, but our dedicated regulatory team ensures smooth, hassle-free processing to get your project legally underway.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-zinc-900 mb-4">Premium Interior Design & Kerala House Plans</h3>
              <p className="mb-4">
                Our expertise isn't just limited to structural engineering. If you are looking for top-rated <strong>interior design in Kerala</strong>, our award-winning home interior designers curate spaces that reflect personality while maximizing spatial utility. Every <strong>Kerala house design</strong> we draft ensures cross-ventilation, abundant natural lighting, and climate-responsive materials that not only lower carbon footprints but promise unparalleled luxury and comfort.
              </p>
              <p>
                Whether it's modernizing a traditional Nalukettu home or constructing a bold, contemporary commercial headquarters, our team of dedicated architectural structural engineers in Kerala is ready to turn your dream vision into a tangible masterpiece. Experience why Arshya Architects is consistently ranked among the best architects in Kerala for precision, aesthetic brilliance, and rigorous build quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
