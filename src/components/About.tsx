import React from 'react';
import { motion } from 'motion/react';

const skills = {
  "Core Technologies": ["Game Development", "3D Modeling", "Cloud Computing", "Serverless Architecture"],
  "Languages": ["C#", "Python", "Java", "C / C++"],
  "Cloud & Tools": ["AWS", "Generative AI", "Prompt Engineering"],
  "3D & Spatial": ["Unity", "Unreal Engine", "Blender", "Maya", "AR/VR", "React Three Fiber"]
};

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">
              About Me.
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-transparent mb-10"></div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-sans font-light">
              I am an experienced Chief Technology Officer and Cloud & 3D Technology Specialist. 
              My expertise lies at the intersection of architecting highly scalable, serverless 
              cloud infrastructures and developing immersive spatial environments using Unity, 
              Unreal, Blender, React Three Fiber, and WebGL.
            </p>
            <div className="p-8 glass-panel rounded-3xl mt-12 relative overflow-hidden group border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-sm tracking-widest uppercase font-semibold mb-4 text-purple-400">Education</h3>
              <div className="relative z-10">
                <h4 className="font-medium text-white text-xl font-display">Centurion University of Technology and Management</h4>
                <p className="text-zinc-500 mt-2 font-light">B.Tech in Computer Science - AR/VR & Cloud Computing</p>
                <p className="text-zinc-600 text-sm font-medium mt-3 uppercase tracking-widest">2023 - 2027</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <h3 className="text-2xl font-display font-medium text-zinc-100 mb-10 tracking-tight">Technical Arsenal</h3>
            <div className="space-y-10">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="border-b border-white/10 pb-2 mb-4 text-xs tracking-widest uppercase font-semibold text-purple-400">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 glass rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
