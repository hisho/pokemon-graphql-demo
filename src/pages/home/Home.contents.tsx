import { useQuery } from '@apollo/client'
import { PokemonsDocument } from '@src/component/feature/Pokemon/Pokemons/pokemons.generate.graphql'
import { Box, Text, Title } from '@mantine/core'
import { Navigate } from '@src/component/functional/Navigate/Navigate'
import { Pokemons } from '@src/component/feature/Pokemon/Pokemons/Pokemons'

/**
 * contents
 */
export const HomeContents = () => {
  const { data, loading: isLoading, error } = useQuery(PokemonsDocument)

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px',
      }}
    >
      <Pokemons data={data} isLoading={isLoading} error={error}>
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
      </Pokemons>
    </Box>
  )
}
