import { createGetInitialProps } from '@mantine/next'
import Document from 'next/document'

const getInitialProps = createGetInitialProps()

/**
 * @see https://nextjs.org/docs/advanced-features/custom-document
 * @see https://mantine.dev/theming/next/
 */
class MyDocument extends Document {
  static getInitialProps = getInitialProps
}

export default MyDocument
