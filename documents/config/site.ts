export type SidebarItem = { label: string; href: string; icon: string }

export type SidebarItemsConfig = {
  [key: string]: SidebarItem[] // 👈 添加索引签名
}

export const siteConfig = {
  name: '文档系统',
  description: '一个基于 Next.js 13 的文档系统',

  navItems: [
    { label: '首页', href: '/', icon: 'home' },
    { label: '团队', href: '/team', icon: 'users' },
    { label: '回收站', href: '/recycle', icon: 'trash' },
    { label: '帮助', href: '/help', icon: 'help' }
  ],

  sidebarItems: {
    '/': [
      { label: '最近浏览文档', href: '/', icon: 'eye' },
      { label: '我收藏的文档', href: '/favorites', icon: 'star' },
      { label: '我创建的文档', href: '/created', icon: 'document' },
      { label: '我协作的文档', href: '/shared', icon: 'users' }
    ],
    '/team': [
      { label: '团队成员', href: '/team', icon: 'users' },
      { label: '团队文档', href: '/team/docs', icon: 'document-text' },
      { label: '邀请成员', href: '/team/invite', icon: 'mail' }
    ],
    '/recycle': [
      { label: '我的回收站', href: '/recycle', icon: 'archive-box' },
      { label: '清空记录', href: '/recycle/clear', icon: 'trash' }
    ],
    '/help': [
      { label: '使用指南', href: '/help', icon: 'book-open' },
      { label: '快捷键说明', href: '/help/shortcuts', icon: 'keyboard' },
      { label: '联系我们', href: '/help/contact', icon: 'phone' }
    ]
  } satisfies SidebarItemsConfig
}
