import { Box, Text, Title } from '@mantine/core'
import { memo } from 'react'
import { PokemonCard_PokemonFragment } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard.generate.graphql'
import { Navigate } from '@src/component/functional/Navigate/Navigate'

export const PokemonCard = memo(
  ({ image, name, types }: PokemonCard_PokemonFragment) => {
    return (
      <Box>
        <Title>{name}</Title>
        {image && <img src={image} alt="" />}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {types?.map((type) => (
            <Text>{type}</Text>
          ))}
        </Box>
        <Navigate
          href={(path) => path.pokemon._pokemon_name(name ?? 'null').$url()}
        >
          <a>詳細</a>
        </Navigate>
      </Box>
    )
  }
)
