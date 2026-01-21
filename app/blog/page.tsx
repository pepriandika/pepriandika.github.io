import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Pepri Andika",
};

export default function BlogPage() {
  const posts = getSortedPostsData("blog");

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>Cerita, opini, dan perjalanan karir.</p>
      </header>
      
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
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
