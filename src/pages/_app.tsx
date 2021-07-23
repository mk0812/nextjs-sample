import '../styles/globals.css'

import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { CommonMeta } from '../components/Head'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
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
