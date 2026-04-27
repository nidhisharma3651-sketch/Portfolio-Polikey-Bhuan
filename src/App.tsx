/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import WebGLBackground from './components/WebGLBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';

export default function App() {
  return (
    <div className="bg-[#030303] min-h-screen selection:bg-white/20 selection:text-white overflow-x-hidden">
      <div className="film-grain"></div>
      <MouseGlow />
      
      {/* Global Fixed 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10] }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }} performance={{ min: 0.5 }}>
          <Suspense fallback={null}>
            <WebGLBackground />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 w-full pointer-events-auto">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
