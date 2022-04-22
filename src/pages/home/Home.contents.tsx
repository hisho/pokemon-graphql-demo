import { useQuery } from '@apollo/client'
import { PokemonsDocument } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'
import { PokemonsList } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList'
import { PokemonItem } from '@src/component/feature/Pokemon/PokemonItem/PokemonItem'

/**
 * contents
 */
export const HomeContents = () => {
  const { data, loading: isLoading, error } = useQuery(PokemonsDocument)

  return (
    <PokemonsList data={data} isLoading={isLoading} error={error}>
      {(pokemons) =>
        pokemons.map((pokemon) =>
          pokemon ? (
            <PokemonItem key={`pokemonCard_${pokemon.id}`} {...pokemon} />
          ) : (
            <></>
          )
        )
      }
    </PokemonsList>
  )
}
