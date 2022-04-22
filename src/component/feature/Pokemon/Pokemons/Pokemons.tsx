import { PokemonsQuery } from '@src/component/feature/Pokemon/Pokemons/pokemons.generate.graphql'
import { ApolloError } from '@apollo/client'
import { ReactElement } from 'react'

type PokemonsProps = {
  data?: PokemonsQuery
  isLoading: boolean
  error?: ApolloError
  children: (pokemons: NonNullable<PokemonsQuery['pokemons']>) => ReactElement[]
}

export const Pokemons = ({
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

  return <>{children(data.pokemons)}</>
}
