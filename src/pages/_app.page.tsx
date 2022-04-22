/**
 * @see https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
 */

import { MantineProvider } from '@mantine/core'
import type { AppPropsWithLayout } from 'next/app'
import { memo } from 'react'

/**
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </MantineProvider>
  )
}

export default memo(MyApp)
