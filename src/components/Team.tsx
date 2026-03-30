"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "ADARSH M K",
    role: "Founder",
    image: "/founder.jpg",
  },
  {
    name: "ARYA U S",
    role: "Co-founder",
    image: "/cofounder.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white text-zinc-900 border-t border-zinc-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Meet the <span className="text-gold">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            The visionary minds behind Arshya Architects, dedicated to creating spaces that harmonize luxury, nature, and deeply rooted architectural sensibilities.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden mb-6 shadow-xl">
                {/* Fallback color while image is loading or missing */}
                <div className="absolute inset-0 bg-zinc-200" />
                
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight">{member.name}</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
