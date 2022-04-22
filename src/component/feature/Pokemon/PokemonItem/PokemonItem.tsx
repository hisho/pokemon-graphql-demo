import { Avatar, Box, Text, Title } from '@mantine/core'
import { memo } from 'react'
import { Navigate } from '@src/component/functional/Navigate/Navigate'
import { PokemonItem_PokemonFragment } from '@src/component/feature/Pokemon/PokemonItem/PokemonItem.generate.graphql'

export const PokemonItem = memo(
  ({ image, name, number }: PokemonItem_PokemonFragment) => {
    return (
      <Navigate
        href={(path) => path.pokemon._pokemon_name(name ?? 'null').$url()}
      >
        <Box component={'a'}>
          <Title>{number}</Title>
          <Avatar src={image} alt={name ?? ''} />
          <Title>{name}</Title>
        </Box>
      </Navigate>
    )
  }
)
