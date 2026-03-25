"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Luxury Tropical Villa",
    category: "Architecture",
    image: "/images/proj_1_1774456761301.png",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Modern Kerala Interior",
    category: "Interior Design",
    image: "/images/proj_2_1774456859393.png",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "The Voyage Commercial",
    category: "Commercial",
    image: "/images/proj_3_1774457017613.png",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Heritage Courtyard",
    category: "Residential",
    image: "/images/about_kerala_1774456479897.png",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    title: "Eco Urban Studio",
    category: "Architecture",
    image: "/images/kerala_house_1774456436819.png",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
            >
              Featured <span className="text-gold">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-primary/70 text-lg"
            >
              A curated selection of our finest works, showcasing our commitment to luxury, minimalism, and the unique spirit of Kerala.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <button className="hidden md:inline-flex border-b-2 border-primary/20 hover:border-gold pb-1 font-semibold uppercase tracking-widest text-sm transition-colors duration-300">
              View All Projects
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden group rounded-2xl cursor-pointer ${project.className}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-heading font-semibold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
