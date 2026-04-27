import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "Persona Pitch Global",
    location: "Bhubaneswar, Odisha",
    period: "Oct 2025 - Present",
    description: [
      "Leading the development of an AI-first HRIS designed to automate and intelligently manage end-to-end HR operations.",
      "Focused on building human-centric, compliant, and future-ready HR solutions."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Tata Steel",
    location: "Jamshedpur",
    period: "Jun 2025",
    description: [
      "Developed and deployed an event-driven serverless architecture project to automate industrial IT workflows using AWS services.",
      "Gained hands-on experience with cloud computing, serverless design, and workflow automation in a large-scale industrial environment.",
      "Collaborated with cross-disciplinary teams to ensure seamless integration of cloud solutions with existing IT infrastructure.",
      "Certified by Shavak Nanavati Technical Institute (SNTI), an ISO 9001:2015 accredited organization."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">
            Experience.
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 glass text-purple-400 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-0 md:ml-0 overflow-hidden relative">
                <Briefcase size={20} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl glass-panel group-hover:border-white/20 transition-all ml-4 md:ml-0 md:hover:-translate-y-2 duration-500 cursor-default relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold text-white mb-1 tracking-tight">{exp.role}</h3>
                  <h4 className="border-b border-white/5 pb-4 text-purple-400 font-semibold mb-6 text-lg">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-zinc-400 font-medium">
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-zinc-500" /> {exp.period}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={14} className="text-zinc-500" /> {exp.location}</div>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-zinc-400 text-sm flex gap-3 leading-relaxed font-light">
                        <span className="text-purple-500/50 mt-1.5 block h-[2px] w-4 shrink-0 bg-current"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
