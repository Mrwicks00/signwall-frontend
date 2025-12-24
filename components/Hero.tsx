import styles from './Hero.module.css';
import { useConnect } from '@stacks/connect-react';
import { userSession } from '@/config';
import { useEffect, useState } from 'react';

interface HeroProps {
  onSignClick: () => void;
}

export default function Hero({ onSignClick }: HeroProps) {
  const { authenticate } = useConnect();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (userSession && userSession.isUserSignedIn()) {
      setIsSignedIn(true);
    }
  }, []);

  const handleConnect = () => {
    authenticate({
      appDetails: {
        name: 'SignWall',
        icon: window.location.origin + '/next.svg',
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  }

  // Prevent hydration mismatch
  if (!isMounted) return null; 

  return (
    <section className={styles.heroSection}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.glitchTitle} data-text="SIGNWALL">
          SIGNWALL
        </h1>
      </div>
      <p className={styles.subtitle}>
        Leave your mark on the blockchain forever. Join the decentralized guestbook of the future.
      </p>
      
      <div className={styles.ctaButton}>
         {!isSignedIn ? (
           <button className="btn-primary" onClick={handleConnect}>
              Connect Stacks
           </button>
         ) : (
           <button className="btn-primary" onClick={onSignClick}>
              Sign Wall
           </button>
         )}
      </div>
    </section>
  );
}
