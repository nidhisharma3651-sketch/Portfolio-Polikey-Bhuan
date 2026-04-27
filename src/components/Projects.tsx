import React, { useState } from 'react';
import { motion } from 'motion/react';
import Project3DCard from './Project3DCard';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: "urban",
    title: "Urban Horizon: 3D Open-World",
    tech: "Unity, C#, PhysX",
    period: "Jan 2026",
    description: "High-performance sandbox prototype. Engineered Modular Component-Based Architecture and sustained 60 FPS by reducing draw calls by 65%. Designed autonomous pedestrian and traffic patterns using NavMesh API.",
  },
  {
    id: "genie",
    title: "Global Generative Genie",
    tech: "AI, HRIS",
    period: "Present",
    description: "Spearheading an AI-first Human Resource Information System to automate core operations. Implemented intelligent workflows for recruitment, onboarding, payroll, and performance tracking.",
  },
  {
    id: "house",
    title: "3D House Environment",
    tech: "Blender, VR",
    period: "2025",
    description: "Designed high-fidelity 3D assets in Blender, utilizing advanced modeling, texturing, and UV-unwrapping. Engineered environments for seamless real-time rendering in VR headsets.",
  },
  {
    id: "audiobook",
    title: "Cloud-Native Audiobook",
    tech: "AWS Lambda, Amazon Polly",
    period: "Jun 2025",
    description: "Serverless event-driven application automatically generating audiobooks from text uploads utilizing AWS Lambda and Amazon Polly.",
  },
  {
    id: "notifier",
    title: "Real-Time Notifier",
    tech: "AWS SNS, Lambda",
    period: "Jun 2025",
    description: "Event-driven serverless system notifying stakeholders in real-time upon critical file uploads and workflow events via AWS SNS.",
  },
  {
    id: "portfolio",
    title: "Cloud-Hosted Portfolio",
    tech: "Amazon S3",
    period: "Jun 2025",
    description: "Highly available, scalable professional portfolio statically hosted in the cloud prioritizing global delivery and minimal latency.",
  },
  {
    id: "zarvis",
    title: "Zarvis: Multi-Modal AI",
    tech: "AWS Lex, Lambda",
    period: "Jun 2025",
    description: "Intelligent AI assistant seamlessly integrating conversational interfaces via AWS Lex with robust backend logic through AWS Lambda.",
  },
  {
    id: "vr-shooter",
    title: "VR Shooting Training Ground",
    tech: "Unity, VR, C#",
    period: "2024",
    description: "Immersive virtual reality shooting range designed for tactical training. Implemented realistic weapon mechanics, spatial audio, and dynamic target systems.",
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-3xl border border-white/5 shadow-2xl transition-all overflow-hidden flex flex-col h-full group hover:border-white/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-56 w-full relative z-10 cursor-grab active:cursor-grabbing border-b border-white/5 bg-black/20">
        <Project3DCard id={project.id} hovered={hovered} />
        
        {/* Interaction hint overlay */}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 glass px-4 py-1.5 text-[10px] tracking-widest uppercase text-zinc-300 font-semibold rounded-full pointer-events-none transition-opacity duration-300 shadow-sm border border-white/10 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          Interact with 3D Scene
        </div>
      </div>
      
      <div className="p-8 relative z-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className={`text-2xl font-display font-bold mb-2 transition-colors ${hovered ? 'text-purple-400' : 'text-white'}`}>
              {project.title}
            </h3>
            <p className="text-sm text-purple-400/80 font-medium tracking-wide">{project.tech}</p>
          </div>
          <div className="text-xs font-semibold text-zinc-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full shrink-0 ml-2 tracking-widest uppercase">{project.period}</div>
        </div>
        
        <div 
          className={`grid transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${hovered ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
        >
          <div className="overflow-hidden">
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
              {project.description}
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs tracking-widest uppercase font-semibold text-zinc-300 hover:text-white transition-colors">
                <Github size={16} /> Code
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs tracking-widest uppercase font-semibold text-zinc-300 hover:text-white transition-colors">
                <ExternalLink size={16} /> Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">Featured Projects.</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
