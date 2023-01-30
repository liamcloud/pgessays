import articles from "./essays.json";
import styles from '@/styles/Home.module.css'

const Blog = ({ article }) => {
  return (
    <main className={styles.main}>
    <div>
      <h1>{article[0]?.title}</h1>
      <p>{article[0]?.content}</p>
      <h2>gl</h2>
    </div>
    <div>
      <h1>gl</h1>
    </div>
    </main>
  );
};

export default Blog;

export function getStaticPaths() {
  const slugs = articles?.map((item) => ({
    params: {
      slug: `${item?.slug}`,
    },
  }));
  return { paths: slugs, fallback: false };
}
export async function getStaticProps({ params: { slug } }) {
  const article = articles.filter((item) => item?.slug === slug);

  return {
    props: {
      article,
    },
  };
}
