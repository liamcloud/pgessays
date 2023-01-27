
import { useRouter } from 'next/router'
import articleData from './essays.json'

const Article = () => {
  const router = useRouter()
  const { slug } = router.query

  const article = articleData.find(article => article.slug === slug)

  return (
    <div>
      <h1>{article.title}</h1>
    </div>
  )
}

export default Article