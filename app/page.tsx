"use client";

import { useState } from 'react';
import Hero from "@/components/Hero";
import Wall from "@/components/Wall";
import SignModal from "@/components/SignModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Hero onSignClick={() => setIsModalOpen(true)} />
      <Wall />
      <SignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Floating Action Button for mobile or easy access */}
      <button 
        className="btn-primary"
        style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 50,
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
        }}
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>
    </main>
  );
}


