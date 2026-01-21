import { getAllPostSlugs, getPostData } from "@/lib/markdown";
import styles from "../../blog/[slug]/page.module.css"; // Reuse blog content styles

export async function generateStaticParams() {
  const posts = getAllPostSlugs("portfolio");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData("portfolio", slug);
  return {
    title: `${postData.title} | Portfolio`,
    description: postData.description,
  };
}

export default async function PortfolioPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData("portfolio", slug);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.date}>{postData.date}</span>
          <div className={styles.tags}>
             {postData.tags?.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
          </div>
        </div>
        <h1 className={styles.title}>{postData.title}</h1>
      </header>
      
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
      />
    </article>
  );
}
