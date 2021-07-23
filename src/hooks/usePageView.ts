import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../libs/gtag'

export const usePageView = () => {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path: string) => {
      gtag.pageView(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
