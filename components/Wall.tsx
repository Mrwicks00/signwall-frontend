import styles from './Wall.module.css';

interface Signature {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

// Mock Data
const MOCK_SIGNATURES: Signature[] = [
  { id: 1, name: "Satoshi", message: "Genesis block was here.", timestamp: "2009-01-03" },
  { id: 2, name: "Alice", message: "Love the cyberpunk aesthetic!", timestamp: "2024-12-24" },
  { id: 3, name: "Bob", message: "Needs more neon.", timestamp: "2024-12-24" },
  { id: 4, name: "CryptoPunk", message: "HODL until the end of time.", timestamp: "2024-12-25" },
  { id: 5, name: "Neo", message: "There is no spoon.", timestamp: "2024-12-25" },
];

export default function Wall() {
  return (
    <section className={styles.wallSection}>
      <h2 className={styles.wallHeader}>Recent Signatures</h2>
      <div className={`container ${styles.grid}`}>
        {MOCK_SIGNATURES.map((sig) => (
          <div key={sig.id} className={`glass-panel ${styles.card}`}>
            <div className={styles.cardHeader}>
              <span className={styles.name}>{sig.name}</span>
              <span className={styles.timestamp}>{sig.timestamp}</span>
            </div>
            <p className={styles.message}>{sig.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
