import type { SidebarItem } from '@/config/site'

import { siteConfig } from '@/config/site'

// 工具函数：找到匹配的 key
export function getSidebarItemsByPath(pathname: string): SidebarItem[] {
  const sortedKeys = Object.keys(siteConfig.sidebarItems).sort((a, b) => b.length - a.length)

  const matchedKey = sortedKeys.find((key) => pathname.startsWith(key))

  return matchedKey ? (siteConfig.sidebarItems as Record<string, SidebarItem[]>)[matchedKey] : []
}
