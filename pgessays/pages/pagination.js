import Link from 'next/link'

const pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <Link
          key={number}
          href=""
          className="page-link"
          onClick={() => paginate(number)}
        >
          <li key={number} className="page-item">
              {number}
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default pagination
