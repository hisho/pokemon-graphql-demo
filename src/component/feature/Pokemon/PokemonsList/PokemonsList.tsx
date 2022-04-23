import { ApolloError } from '@apollo/client'
import { Box, Skeleton } from '@mantine/core'
import { range } from '@mantine/hooks'
import { PokemonsQuery } from '@src/component/feature/Pokemon/PokemonsList/PokemonsList.generate.graphql'
import { ReactElement } from 'react'

type PokemonsProps = {
  children: (pokemons: NonNullable<PokemonsQuery['pokemons']>) => ReactElement[]
  data?: PokemonsQuery
  error?: ApolloError
  isLoading: boolean
}

export const PokemonsList = ({
  children,
  data,
  error,
  isLoading,
}: PokemonsProps) => {
  const gridStyles = {
    sx: {
      display: 'grid',
      gap: '20px',
      gridTemplateColumns: 'repeat(auto-fit,minmax(248px,1fr))',
    },
  }
  if (isLoading) {
    return (
      <Box {...gridStyles}>
        {range(0, 60).map((item) => (
          <Skeleton height={'46px'} key={`loading_skelton_${item}`}>
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
