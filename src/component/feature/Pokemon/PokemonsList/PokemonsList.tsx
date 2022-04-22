import { PokemonsQuery } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'
import { ApolloError } from '@apollo/client'
import { ReactElement } from 'react'
import { Box, Skeleton } from '@mantine/core'
import { range } from '@mantine/hooks'

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
  const gridStyles = {
    sx: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(248px,1fr))',
      gap: '20px',
    },
  }
  if (isLoading) {
    return (
      <Box {...gridStyles}>
        {range(0, 60).map((item) => (
          <Skeleton key={`loading_skelton_${item}`} height={'46px'}>
            loading...
          </Skeleton>
        ))}
      </Box>
    )
  }

  if (error) {
    return <>error</>
  }

  if (!data || !data.pokemons) {
    return <>no data</>
  }

  return <Box {...gridStyles}>{children(data.pokemons)}</Box>
}
