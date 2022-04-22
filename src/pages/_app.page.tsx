import { MantineProvider } from '@mantine/core'
import type { AppPropsWithLayout } from 'next/app'
import { memo } from 'react'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '@src/lib/apollo/createApolloClient'

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
