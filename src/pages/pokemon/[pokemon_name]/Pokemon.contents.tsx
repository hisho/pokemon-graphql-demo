import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import { Navigate } from '@src/component/functional/Navigate/Navigate'
import { useQuery } from '@apollo/client'
import { PokemonDocument } from '@src/component/feature/Pokemon/PokemonCard/pokemon.generate.graphql'
import { PokemonCard } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard'

/**
 * contents
 */
export const PokemonContents = () => {
  const { query } = useRouter()
  const pokemonName =
    typeof query['pokemon_name'] === 'string'
      ? query['pokemon_name']
      : undefined

  const { data } = useQuery(PokemonDocument, {
    variables: {
      name: pokemonName,
    },
  })
  return (
    <>
      {data && <PokemonCard {...data.pokemon} />}
      <Navigate href={(path) => path.home.$url()}>
        <Button component={'a'}>一覧に戻る</Button>
      </Navigate>
    </>
  )
}
