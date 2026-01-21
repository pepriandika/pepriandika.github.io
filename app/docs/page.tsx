import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import styles from "./page.module.css"; // Reuse blog styles for consistency or create new

export const metadata = {
  title: "IT Documentation | Pepri Andika",
};

export default function DocsPage() {
  const posts = getSortedPostsData("docs");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title} style={{ backgroundImage: "linear-gradient(to right, #00f2ff, #00ff88)" }}>
          Documentation
        </h1>
        <p className={styles.subtitle}>Catatan teknis, troubleshooting, dan how-to guides.</p>
      </header>
      
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/docs/${post.slug}`} key={post.slug} className={styles.card}>
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
