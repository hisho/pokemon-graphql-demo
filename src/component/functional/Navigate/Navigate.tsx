import { pagesPath, PagesPath } from '@src/lib/pathpida/$path'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import type { UrlObject } from 'url'

/**
 * childrenはaタグのみ指定したい
 */
export type NavigateProps = Omit<LinkProps, 'href' | 'passHref'> & {
  children: ReactElement | ((state: { isCurrent: boolean }) => ReactElement)
  href: ((path: PagesPath) => UrlObject) | UrlObject
}

/**
 * @see https://nextjs.org/docs/api-reference/next/link
 * @see https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx
 */
export const Navigate = ({ children, href, ...props }: NavigateProps) => {
  const { pathname } = useRouter()
  const currentPathname =
    typeof href === 'function' ? href(pagesPath).pathname : href.pathname
  const isCurrent = pathname === currentPathname
  const state = { isCurrent }
  return (
    <Link
      passHref
      href={typeof href === 'function' ? href(pagesPath) : href}
      {...props}
    >
      {typeof children === 'function' ? children(state) : children}
    </Link>
  )
}
