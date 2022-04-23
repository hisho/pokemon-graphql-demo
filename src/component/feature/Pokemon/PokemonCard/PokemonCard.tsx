import { AspectRatio, Box, Card, Text, Title } from '@mantine/core'
import { PokemonCard_PokemonFragment } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard.generate.graphql'
import { getPokemonTypeColours } from '@src/constant/pokemon'

export const PokemonCard = ({
  image,
  name,
  number,
  types,
}: PokemonCard_PokemonFragment) => {
  return (
    <Card shadow={'sm'} sx={{ position: 'relative' }}>
      <Text sx={{ fontWeight: 'bold' }}>No.{number}</Text>
      {image && (
        <AspectRatio mt={'4px'} mx={'auto'} ratio={16 / 9}>
          <Box
            alt={''}
            component={'img'}
            src={image}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sx={{ objectFit: 'contain !important' }}
          />
        </AspectRatio>
      )}
      <Title mt={'12px'}>{name}</Title>
      <Box mt={'8px'} sx={{ display: 'flex', gap: '12px' }}>
        {types?.map((type) => (
          <Box
            key={`PokemonCard_${type}`}
            px={'12px'}
            sx={{
              backgroundColor: getPokemonTypeColours(type ?? ''),
              borderRadius: '8px',
            }}
          >
            {type}
          </Box>
        ))}
      </Box>
    </Card>
  )
}
