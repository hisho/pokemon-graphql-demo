import { Container } from '@mantine/core'
import { memo, ReactElement } from 'react'

type LayoutProps = {
  children: ReactElement | ReactElement[]
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <Container pt={'40px'} pb={'80px'}>
      {children}
    </Container>
  )
})
