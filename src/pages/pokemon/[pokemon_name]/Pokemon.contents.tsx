/**
 * contents
 */
import { useRouter } from 'next/router'

export const PokemonContents = () => {
  const { query } = useRouter()
  const pokemonName =
    typeof query['pokemon_name'] === 'string'
      ? query['pokemon_name']
      : undefined
  return <>syousai</>
}
