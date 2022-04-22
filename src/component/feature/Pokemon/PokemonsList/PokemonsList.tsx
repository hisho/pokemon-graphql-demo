import { PokemonsQuery } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'
import { ApolloError } from '@apollo/client'
import { ReactElement } from 'react'
import { Box } from '@mantine/core'

type PokemonsProps = {
  data?: PokemonsQuery
  isLoading: boolean
  error?: ApolloError
  children: (pokemons: NonNullable<PokemonsQuery['pokemons']>) => ReactElement[]
}

export const PokemonsList = ({
  data,
  isLoading,
  error,
  children,
}: PokemonsProps) => {
  if (isLoading) {
    return <>loading...</>
  }

  if (error) {
    return <>error</>
  }

  if (!data || !data.pokemons) {
    return <>no data</>
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '20px',
      }}
    >
      {children(data.pokemons)}
    </Box>
  )
}
