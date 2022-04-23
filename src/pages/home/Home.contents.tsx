import { useQuery } from '@apollo/client'
import { PokemonItem } from '@src/component/feature/Pokemon/PokemonItem/PokemonItem'
import { PokemonsList } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList'
import { PokemonsDocument } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'

/**
 * contents
 */
export const HomeContents = () => {
  const { data, error, loading: isLoading } = useQuery(PokemonsDocument)

  return (
    <PokemonsList data={data} error={error} isLoading={isLoading}>
      {(pokemons) =>
        pokemons.map((pokemon) =>
          pokemon ? (
            <PokemonItem key={`pokemonCard_${pokemon.id}`} {...pokemon} />
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <></>
          )
        )
      }
    </PokemonsList>
  )
}
