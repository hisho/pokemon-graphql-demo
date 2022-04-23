import { Box, Image } from '@mantine/core'
import { PokemonCard_PokemonFragment } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard.generate.graphql'

export const PokemonCard = ({
  image,
  name,
  number,
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
          <Box key={`PokemonCard_${type}`}>{type}</Box>
        ))}
      </Box>
    </Box>
  )
}
