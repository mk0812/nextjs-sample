import '../styles/globals.css'
import { useEffect } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { useRouter } from 'next/router'

import { CommonMeta } from '../components/Head'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      console.log('handleRouteChange')
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
