import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Gradient overlay just for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#030303]/50 to-[#030303] pointer-events-none"></div>

      {/* Content */}
      <div className="z-10 text-center px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-block py-2 px-5 rounded-full border border-white/10 glass text-zinc-300 text-xs tracking-[0.2em] uppercase font-semibold shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 w-[200%] rotate-12 -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
          <span className="relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
            Cloud & 3D Technology Specialist
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tighter mb-8 text-white text-glow leading-none"
        >
          P. Bhuvan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-sans leading-relaxed tracking-wide font-light"
        >
          Architecting scalable, serverless cloud infrastructures and developing immersive spatial environments. Building the future intersection of Cloud and WebGL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 relative"
        >
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-150 pointer-events-none"></div>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all w-full sm:w-auto relative z-10 text-sm uppercase tracking-widest"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto relative z-10 text-sm uppercase tracking-widest"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-display font-medium">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
}
