import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--primary)" />
            <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>StartupConnect</span>
            <span className={styles.logoSubtitle}>Ethiopia</span>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.activeLink}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/startups" className={styles.link}>Browse Startups</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
        
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/register" className={styles.registerBtn}>Register</Link>
        </div>
      </div>
    </header>
  );
}
