import { useQuery } from '@apollo/client'
import { PokemonsDocument } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'
import { PokemonsList } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList'
import { PokemonCard } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard'

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
            <PokemonCard key={`pokemonCard_${pokemon.id}`} {...pokemon} />
          ) : (
            <></>
          )
        )
      }
    </PokemonsList>
  )
}
