import '../styles/globals.css'

import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import { CommonMeta } from '../components/Head'
import { usePageView } from '../hooks/usePageView'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  usePageView()

  return (
    <>
      <CommonMeta
        title={'タイトルです'}
        description={'ディスクリプションです'}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
