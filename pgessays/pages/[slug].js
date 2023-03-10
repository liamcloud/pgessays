import articles from './essays.json'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import angels from '../public/angels.png'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import Link from 'next/link'
import { GiSoundOn } from 'react-icons/gi'

const Blog = ({ article }) => {
  const pg = article[0]?.content
  const pn = article[0]?.notes
  return (
    <main className={styles.main}>
      <div className="essayHeader">
        <Link
          className="a"
          href="https://www.youtube.com/watch?v=LKBk-jC1oHQ"
          target="_blank"
        >
          <GiSoundOn />
        </Link>
      </div>
      <Image loader="" src={angels} alt="Adam" width={800} height={400} />
      <div>
        <h1 className="title">{article[0]?.title}</h1>
        <p className="para">{article[0]?.time}</p>
        {pg?.map((para) => {
          return (
            <p className="para" key={para}>
              {para}
            </p>
          )
        })}
        <div className="hr2">
          <hr
            className="hr"
            style={{
              color: 'white',
              backgroundColor: 'white',
              height: 0.5,
              borderColor: 'white',
            }}
          />
        </div>
        {pn?.map((para) => {
          return (
            <p className="para para2" key={para}>
              {para}
            </p>
          )
        })}
        <p className="para">{article[0]?.thanks}</p>
      </div>
      <div className="cont">
        <h1 className="like">You might also like</h1>
        <div className="grid grid2">
          {articles.map((essay) => {
            if (
              (essay.title !== article[0]?.title &&
                essay.id == article[0]?.id + 3) ||
              essay.id == article[0]?.id + 1 ||
              essay.id == article[0]?.id + 2
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
        <h1 className="li2">
          Made by{' '}
          <Link href="https://twitter.com/imliamcloud" target="_blank">
            <span className="made">Liam ??????</span>
          </Link>
        </h1>
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
