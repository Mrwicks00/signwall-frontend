'use client'

import { createAppKit } from '@reown/appkit/react'
import { networks, projectId, metadata, bitcoinAdapter } from '@/config'
import React, { type ReactNode } from 'react'

if (!projectId) {
  console.warn('Project ID is not defined')
}

// Create AppKit instance
createAppKit({
  adapters: [bitcoinAdapter],
  networks,
  metadata,
  projectId: projectId || 'placeholder',
  themeMode: 'dark', // Matching our cyberpunk theme
  features: {
    analytics: true, 
    email: false,
    socials: []
  },
  themeVariables: {
    '--w3m-accent': '#ff00ff', // Cyberpunk neon pink
    '--w3m-border-radius-master': '1px' // Sharper edges
  }
})

// Stacks Imports
import { Connect } from '@stacks/connect-react';
import { userSession } from '@/config';

function ContextProvider({ children }: { children: ReactNode }) {
  const authOptions = {
    appDetails: {
      name: "SignWall",
      icon: typeof window !== 'undefined' ? window.location.origin + '/next.svg' : '/next.svg',
    },
    userSession,
  };

  return (
    <Connect authOptions={authOptions}>
      {children}
    </Connect>
  )
}

export default ContextProvider
