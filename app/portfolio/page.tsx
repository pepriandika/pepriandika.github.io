import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import styles from "./page.module.css";

export const metadata = {
  title: "Portfolio | Pepri Andika",
};

export default function PortfolioPage() {
  const posts = getSortedPostsData("portfolio");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title} style={{ backgroundImage: "linear-gradient(to right, #ff00ff, #ff8800)" }}>
          Portfolio
        </h1>
        <p className={styles.subtitle}>Proyek IT, Migrasi Server, dan Pengembangan Web.</p>
      </header>
      
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/portfolio/${post.slug}`} key={post.slug} className={styles.card}>
            <span className={styles.date}>{post.date}</span>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardDesc}>{post.description}</p>
            <div className={styles.tags}>
              {post.tags?.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
