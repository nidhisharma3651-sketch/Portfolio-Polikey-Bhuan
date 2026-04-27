import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-transparent border-t border-white/5 text-center text-zinc-500 text-sm font-light relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} P. Bhuvan. All rights reserved.</p>
        <p>Architected with React, WebGL & Tailwind</p>
      </div>
    </footer>
  );
}
