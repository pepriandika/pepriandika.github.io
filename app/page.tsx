import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Code with <br />
            <span className={styles.gradientText}>Passion & Purpose</span>
          </h1>
          <p className={styles.subtitle}>
            Hi, I'm <strong>Pepri Andika</strong>. I craft high-performance web experiences 
            that merge beautiful design with robust engineering.
          </p>
          <div className={styles.ctaGroup}>
            <a href="https://github.com/pepriandika" target="_blank" rel="noopener noreferrer" className={styles.buttonPrimary}>
              View GitHub
            </a>
            <a href="#" className={styles.buttonSecondary}>
              Contact Me
            </a>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h3>🚀 Next.js Expert</h3>
            <p>
              Specializing in building static and dynamic web applications using the latest Next.js features, Server Components, and more.
            </p>
          </div>

          <div className={styles.card}>
            <h3>🎨 Creative UI/UX</h3>
            <p>
              Designing intuitive interfaces with a focus on user experience, accessibility, and modern aesthetics like Glassmorphism.
            </p>
          </div>

          <div className={styles.card}>
            <h3>⚡ Performance First</h3>
            <p>
              Optimizing every line of code to ensure lightning-fast load times and smooth interactions for all users.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Pepri Andika. Built with Next.js & Passion.</p>
      </footer>
    </div>
  );
}