import articles from "../../public/essays.json";

const Blog = ({ article }) => {
  return (
    <div>
      <h1>{article[0]?.title}</h1>
      <p>{article[0]?.content}</p>
    </div>
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
