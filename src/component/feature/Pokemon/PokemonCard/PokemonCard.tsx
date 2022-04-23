import { AspectRatio, Box, Image } from '@mantine/core'
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
        <AspectRatio mx={'auto'} ratio={1} sx={{ maxWidth: '600px' }}>
          <Image fit={'contain'} src={image} />
        </AspectRatio>
      )}
      <Box>
        {types?.map((type) => (
          <Box key={`PokemonCard_${type}`}>{type}</Box>
        ))}
      </Box>
    </Box>
  )
}
