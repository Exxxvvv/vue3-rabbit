import httpInstance from '@/utils/index'
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}
