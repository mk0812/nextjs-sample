import { client } from '../../libs/client'
import { GetStaticPropsContext } from 'next'
import { CommonMeta } from '../../components/Head'
import Link from 'next/link'

export default function BlogId({ blog }: any) {
  return (
    <main>
      <CommonMeta title={blog.title} description={'ディスクリプションです'} />
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <Link href="/">戻る</Link>
    </main>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get<{ contents: { id: string }[] }>({
    endpoint: 'blog',
  })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string
  const data = await client.get({ endpoint: 'blog', contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}
