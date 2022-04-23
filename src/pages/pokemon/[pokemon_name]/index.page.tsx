import { Layout } from '@src/layout/Layout'
import { PokemonContents } from '@src/pages/pokemon/[pokemon_name]/Pokemon.contents'
import type { NextPageWithLayout } from 'next'

/**
 * server side & redirect ...
 */

const Pokemon: NextPageWithLayout = () => {
  return <PokemonContents />
}

Pokemon.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Pokemon
