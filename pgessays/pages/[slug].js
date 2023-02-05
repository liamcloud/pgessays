import articles from './essays.json'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import angels from '../public/angels.png'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import Link from 'next/link'
import { GiSoundOn } from 'react-icons/gi'

const Blog = ({ article }) => {
  const category = article[0]?.category[0]
  console.log(category + 'i love you')
  return (
    <main className={styles.main}>
      <div className="essayHeader">
        <a href="/">
          <HiOutlineArrowSmLeft />
        </a>
        <Image loader="" src={angels} alt="Adam" width={800} height={400} />
        <a href="https://www.youtube.com/watch?v=LKBk-jC1oHQ" target="_blank">
          <GiSoundOn />
        </a>
      </div>
      <div>
        <h1 className="title">{article[0]?.title}</h1>
        <p className="para">{article[0]?.content[0]}</p>
        <p className="para">{article[0]?.content[1]}</p>
        <p className="para">{article[0]?.content[2]}</p>
      </div>
      <div>
        <h1 className="like">You might also like</h1>
        <div className="grid">
          {articles.map((essay) => {
            if (
              essay.category.indexOf(category) !== -1 &&
              essay.title !== article[0]?.title &&
              essay.id < article[0]?.id + 5
            ) {
              return (
                <Link href={`${essay?.slug}`} key={essay.id}>
                  <div
                    key={essay.id}
                    className={'essayContainer'}
                    style={{ backgroundImage: `url('${essay.image}')` }}
                  >
                    <h2>{essay.title}</h2>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
      <footer>
        <h1 className="li2">Made by Liam Cloud</h1>
      </footer>
    </main>
  )
}

export default Blog

export function getStaticPaths() {
  const slugs = articles?.map((item) => ({
    params: {
      slug: `${item?.slug}`,
    },
  }))
  return { paths: slugs, fallback: false }
}
export async function getStaticProps({ params: { slug } }) {
  const article = articles.filter((item) => item?.slug === slug)

  return {
    props: {
      article,
    },
  }
}
