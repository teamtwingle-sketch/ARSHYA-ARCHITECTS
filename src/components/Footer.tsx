import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <a href="/" className="inline-block relative z-50">
              <Image 
                src="/logo.png" 
                alt="Arshya Architects" 
                width={200} 
                height={60} 
                className="object-contain h-10 md:h-14 w-auto opacity-90 transition-all hover:opacity-100" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Pioneering modern architectural design rooted in the cultural and climatic context of Kerala.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/arshya_architects" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Linkedin" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-gold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#home" className="hover:text-white hover:underline underline-offset-4 transition-all">Home</Link></li>
              <li><Link href="#about" className="hover:text-white hover:underline underline-offset-4 transition-all">About Us</Link></li>
              <li><Link href="#projects" className="hover:text-white hover:underline underline-offset-4 transition-all">Portfolio</Link></li>
              <li><Link href="#services" className="hover:text-white hover:underline underline-offset-4 transition-all">Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-gold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {currentYear} Arshya Architects. All rights reserved.</p>
          <p>Designed with minimalism & precision.</p>
        </div>
      </div>
    </footer>
  );
}
