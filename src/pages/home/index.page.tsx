import { Layout } from '@src/layout/Layout'
import { HomeContents } from '@src/pages/home/Home.contents'
import type { NextPageWithLayout } from 'next'

/**
 * server side & redirect ...
 */

const Home: NextPageWithLayout = () => {
  return <HomeContents />
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
