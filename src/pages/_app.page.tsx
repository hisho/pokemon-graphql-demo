import { ApolloProvider } from '@apollo/client'
import { MantineProvider } from '@mantine/core'
import { createApolloClient } from '@src/lib/apollo/createApolloClient'
import type { AppPropsWithLayout } from 'next/app'
import { memo } from 'react'

/**
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ApolloProvider client={createApolloClient()}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </MantineProvider>
    </ApolloProvider>
  )
}

export default memo(MyApp)
