"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, PenTool, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    desc: "We bring a fresh perspective to every project, challenging the conventional limits of design.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    desc: "Our designs prioritize eco-friendly materials and energy-efficient strategies tailored for tropical climates.",
  },
  {
    icon: PenTool,
    title: "Uncompromising Quality",
    desc: "From blueprint to final build, we ensure top-tier materials and craftsmanship.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "We believe in honest communication and trust throughout the entire lifecycle of a project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
          
          <div className="lg:w-1/3 static lg:sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6 text-zinc-900"
            >
              Why Choose <br />
              <span className="text-gold">Arshya?</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="w-16 h-1 bg-gold rounded-full mb-6" 
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-zinc-700 text-lg leading-relaxed"
            >
              Our philosophy goes beyond just creating structures. We focus on enhancing lifestyles by building environments that are both beautiful and deeply functional.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-black/5 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900">{reason.title}</h3>
                  <p className="text-zinc-600 text-base leading-relaxed">{reason.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
