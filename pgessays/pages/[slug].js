import articles from "./essays.json";
import styles from '@/styles/Home.module.css'
import Image from "next/image"
import angels from '../public/angels.png'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { GiSoundOn } from 'react-icons/gi'

const Blog = ({ article }) => {
  return (
    <main className={styles.main}>
      <div className='essayHeader'>
      <a href="/"><HiOutlineArrowSmLeft /></a>
      <Image loader="" src={angels} alt="Adam" width={800} height={400} />
      <a href='https://www.youtube.com/watch?v=LKBk-jC1oHQ' target='_blank'><GiSoundOn /></a>
      </div>
    <div>
      <h1 className="title">{article[0]?.title}</h1>
      <p className="para">{article[0]?.content[0]}</p>
      <p className="para">{article[0]?.content[1]}</p>
      <p className="para">{article[0]?.content[2]}</p>
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
