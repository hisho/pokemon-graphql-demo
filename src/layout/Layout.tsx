import { Container } from '@mantine/core'
import { memo, ReactElement } from 'react'

type LayoutProps = {
  children: ReactElement | ReactElement[]
}

export const Layout = memo(({ children }: LayoutProps) => {
  return <Container>{children}</Container>
})
