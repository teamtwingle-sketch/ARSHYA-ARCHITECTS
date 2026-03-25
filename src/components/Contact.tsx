"use client";

import { motion } from "framer-motion";
import { Copy, MapPin, PhoneCall, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-black/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
          >
            Let's <span className="text-gold">Talk</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-primary/60 text-lg max-w-2xl"
          >
            Whether it's a luxury villa or a commercial masterpiece, we are ready to turn your vision into reality. Reach out today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-foreground/10 p-8 md:p-12 rounded-3xl shadow-sm"
          >
            <h3 className="text-2xl font-bold font-heading mb-8">Send us a message</h3>
            <form 
              className="flex flex-col gap-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                
                const text = `Hi Arshya Architects!\n\nI am ${name}. My contact is ${phone}.\n\nMessage:\n${message}`;
                const whatsappUrl = `https://wa.me/918593000445?text=${encodeURIComponent(text)}`;
                
                window.open(whatsappUrl, '_blank');
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide uppercase text-primary/60" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  required
                  className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-primary" 
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide uppercase text-primary/60" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  id="phone" 
                  required
                  className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-primary" 
                  placeholder="+91 8593000445"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-wide uppercase text-primary/60" htmlFor="message">Message</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows={4} 
                  required
                  className="w-full bg-background border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all font-body text-primary resize-none" 
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                className="mt-4 bg-primary text-primary-foreground font-semibold py-4 rounded-xl hover:bg-gold hover:text-primary transition-all duration-300 transform active:scale-[0.98]"
              >
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group flex gap-4 items-start">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <PhoneCall size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-primary">Phone</h4>
                  <a href="tel:+918593000445" className="text-primary/70 block hover:text-gold transition-colors">8593000445</a>
                  <a href="tel:+918593000446" className="text-primary/70 block hover:text-gold transition-colors">8593000446</a>
                </div>
              </div>
              
              <div className="group flex gap-4 items-start">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Mail size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-primary">Email</h4>
                  <a href="mailto:arshyaarchitects@gmail.com" className="text-primary/70 block hover:text-gold transition-colors break-all">arshyaarchitects@gmail.com</a>
                </div>
              </div>

              <div className="group flex gap-4 items-start md:col-span-2">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <MapPin size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-primary">Location</h4>
                  <p className="text-primary/70 leading-relaxed max-w-sm">
                    Door No. 43/2684-A2, Suite No. B3, First Floor, Kolathara Rd, Rahman Bazar, Kozhikode, Kerala – 673655
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-[300px] md:h-full min-h-[300px] bg-black/5 rounded-3xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.457816824647!2d75.8071853!3d11.215585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bff4689b9cb%3A0xe54e56570cba1a1c!2sKolathara%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
