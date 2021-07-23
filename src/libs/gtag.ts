export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
import { Event } from '../types/googleAnalyticsEvent'

// IDが取得できない場合を想定する
export const existsGaId = GA_TRACKING_ID !== ''

// PVを測定する
export const pageView = (path: string) => {
  window.gtag('config', GA_TRACKING_ID as string, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({ action, category, label }: Event) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
  })
}
