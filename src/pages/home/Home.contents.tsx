import { useQuery } from '@apollo/client'
import { PokemonsDocument } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'
import { Box, Text, Title } from '@mantine/core'
import { Navigate } from '@src/component/functional/Navigate/Navigate'
import { PokemonsList } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList'

/**
 * contents
 */
export const HomeContents = () => {
  const { data, loading: isLoading, error } = useQuery(PokemonsDocument)

  return (
    <PokemonsList data={data} isLoading={isLoading} error={error}>
      {(pokemons) =>
        pokemons.map((pokemon) => (
          <Box key={`pokemons_${pokemon?.id}`}>
            <Text>{pokemon?.id}</Text>
            <Title>{pokemon?.name}</Title>
            {pokemon?.image && <img src={pokemon?.image} alt="" />}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {pokemon?.types?.map((type) => (
                <Text>{type}</Text>
              ))}
            </Box>
            <Navigate
              href={(path) =>
                path.pokemon._pokemon_name(pokemon?.name ?? 'null').$url()
              }
            >
              <a>詳細</a>
            </Navigate>
          </Box>
        ))
      }
    </PokemonsList>
  )
}
