import essays from './essays.json'
import { useState } from 'react'
import Link from 'next/link'

const Posts = (posts) => {
  const [category, setCategory] = useState('mostrecent')
  const [search, setSearch] = useState('')
  return (
    <div className="grid">
      {essays
        .filter((essay) => {
          if (search == '') {
            return essay
          } else if (
            essay.title.toLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return essay
          }
        })
        .map((essay) => {
          if (essay.category.indexOf(category) !== -1) {
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
  )
}

export default Posts
