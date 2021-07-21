import Link from 'next/link'
import { client } from '../libs/client'

type Props = {
  blog: { id: string; title: string }[]
}

export default function Home({ blog }: Props) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get<{ contents: [] }>({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
