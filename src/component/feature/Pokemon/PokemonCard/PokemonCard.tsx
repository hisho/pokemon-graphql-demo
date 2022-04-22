import { PokemonCard_PokemonFragment } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard.generate.graphql'
import { Box, Image } from '@mantine/core'

export const PokemonCard = ({
  number,
  name,
  image,
  types,
}: PokemonCard_PokemonFragment) => {
  return (
    <Box>
      <Box>{number}</Box>
      <Box>{name}</Box>
      {image && (
        <Box>
          <Image src={image} />
        </Box>
      )}
      <Box>
        {types?.map((type) => (
          <Box>{type}</Box>
        ))}
      </Box>
    </Box>
  )
}
