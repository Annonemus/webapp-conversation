import type { AppInfo } from '@/types/app'
export const APP_ID = `6f289dbb-2611-4bdd-8cc9-130bcd2aeb10`
export const API_KEY = `app-wO3ABN08oDjv3YHdqVTV1e5f`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = true
export const promptTemplate = ''

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
