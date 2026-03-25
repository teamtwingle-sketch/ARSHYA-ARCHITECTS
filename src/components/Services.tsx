"use client";

import { motion } from "framer-motion";
import { Home, BrickWall, Monitor, Users, PaintRoller } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Architecture",
    desc: "Bespoke luxury homes that blend modern aesthetics with Kerala's traditional roots.",
  },
  {
    icon: BrickWall,
    title: "Commercial Design",
    desc: "Innovative, functional, and striking commercial spaces that elevate your brand.",
  },
  {
    icon: PaintRoller,
    title: "Interior Design",
    desc: "Curated, minimal, and deeply personal interiors that offer a premium lifestyle.",
  },
  {
    icon: Monitor,
    title: "3D Visualization",
    desc: "Hyper-realistic architectural renderings to help you visualize before building.",
  },
  {
    icon: Users,
    title: "Consultation",
    desc: "Expert guidance from conceptualization to execution with a focus on sustainability.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Our <span className="text-gold">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-white/70 text-lg leading-relaxed"
          >
            We offer end-to-end architectural solutions, ensuring a seamless journey from the first sketch to the final key exchange.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold font-heading mb-4 text-white group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-body">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
