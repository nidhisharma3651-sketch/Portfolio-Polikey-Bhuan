import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    alert("Message sent! (Mock implementation)");
    reset();
  };

  return (
    <section id="contact" className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">Get In Touch.</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-display font-bold text-white mb-6 tracking-tight text-glow">Let's build the future.</h3>
            <p className="text-zinc-400 mb-10 leading-relaxed max-w-md text-lg font-light">
              Whether you're looking to architect a scalable cloud solution or build immersive 3D/VR experiences, I'm always open to discussing new projects and collaborations.
            </p>

            <div className="space-y-6 mb-12">
              <a href="tel:7992483246" className="flex items-center gap-4 text-zinc-400 hover:text-white font-medium transition-colors group">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-white/10 group-hover:-translate-y-1 transition-all text-purple-400">
                  <Phone size={24} />
                </div>
                <span className="text-lg">+91 7992483246</span>
              </a>
              <a href="mailto:polikeybhuvan@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-white font-medium transition-colors group">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-white/10 group-hover:-translate-y-1 transition-all text-purple-400">
                  <Mail size={24} />
                </div>
                <span className="text-lg">polikeybhuvan@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-zinc-400 font-medium">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-purple-400">
                  <MapPin size={24} />
                </div>
                <span className="text-lg">Bhubaneswar, India</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mr-2">Socials</span>
              <a href="#" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-400/50 hover:bg-white/10 hover:-translate-y-1 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 glass-panel p-8 md:p-10 rounded-3xl">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full bg-white/5 border ${errors.name ? 'border-red-400' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/30 transition-all font-light`}
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-400 text-xs mt-2 block">{errors.name.message}</span>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full bg-white/5 border ${errors.email ? 'border-red-400' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/30 transition-all font-light`}
                  placeholder="john@example.com"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                />
                {errors.email && <span className="text-red-400 text-xs mt-2 block">{errors.email.message}</span>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-400' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/30 transition-all resize-none font-light`}
                  placeholder="How can we help?"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <span className="text-red-400 text-xs mt-2 block">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold uppercase tracking-wider py-4 px-6 rounded-2xl hover:bg-zinc-200 transition-all md:hover:-translate-y-1 shadow-xl"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
