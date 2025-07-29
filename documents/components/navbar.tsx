'use client'
import { useEffect } from 'react'
import { HomeIcon, UsersIcon, TrashIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { Kbd } from '@heroui/kbd'
import { Input } from '@heroui/input'
import { Image } from '@heroui/image'
import { Avatar } from '@heroui/avatar'
import { link as linkStyles } from '@heroui/theme'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { SearchIcon } from '@/components/icons'

const iconMap = {
  home: HomeIcon,
  users: UsersIcon,
  trash: TrashIcon,
  help: QuestionMarkCircleIcon
}

export const Navbar = () => {
  const pathname = usePathname() // 获取当前路径

  useEffect(() => {}, [])
  // 搜索框
  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm'
      }}
      endContent={
        <Kbd
          className='hidden lg:inline-block'
          keys={['command']}
        >
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='搜索文档...'
      startContent={<SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />}
      type='search'
    />
  )

  return (
    <nav className='w-full border-b border-gray-200 dark:border-gray-700 px-4 sticky top-0 z-50 bg-white dark:bg-black pl-10 pr-10'>
      <div className='flex items-center justify-between h-16'>
        {/* navbar左边部分 */}
        <div className='flex items-center gap-4'>
          {/* 网站logo和标题 */}
          <NextLink
            className='flex items-center gap-1'
            href='/'
          >
            <Image
              alt='logo'
              src='/logo.png'
              width={35}
            />
            <p className='font-bold text-inherit'>文档系统</p>
          </NextLink>

          {/* 顶部菜单项 */}
          <ul className='hidden lg:flex gap-4 ml-2 relative top-0.5'>
            {siteConfig.navItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: 'foreground' }),
                      'flex items-center gap-0.5',
                      isActive && 'text-primary font-medium',
                      'hover:text-primary'
                    )}
                    href={item.href}
                  >
                    <Icon className='h-4 w-4 text-gray-500' />
                    <p className='text-sm font-bold text-inherit text-gray-600'>{item.label}</p>
                  </NextLink>
                </li>
              )
            })}
          </ul>
        </div>

        {/* navbar右边部分 */}
        <div className='hidden sm:flex items-center gap-4'>
          <div className='hidden sm:flex gap-2'>
            <ThemeSwitch />
          </div>
          <div className='hidden lg:block'>{searchInput}</div>
          <div className='hidden md:block'>
            <Avatar src={'/avatar.gif'} />
          </div>
        </div>
      </div>
    </nav>
  )
}
