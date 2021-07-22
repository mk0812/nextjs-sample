import Link from 'next/link'
import { client } from '../libs/client'
import { HeadElement } from '../components/Head'

type Props = {
  blog: { id: string; title: string }[]
}

export default function Home({ blog }: Props) {
  return (
    <div>
      <HeadElement
        title={'タイトルです'}
        description={'ディスクリプションです'}
        keyword={'キーワードです！'}
        image={
          'https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/374967/e6acc3a70c1e44025ecbfa41634f96c80f24e440/x_large.png?1594472281'
        }
        url={'https://qiita.com/matsugaknight'}
      />
      <h1>いえもんのてへぺろ日記</h1>
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
