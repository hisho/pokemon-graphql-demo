import { useQuery } from '@apollo/client'
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  Skeleton,
  Title,
} from '@mantine/core'
import { PokemonCard } from '@src/component/feature/Pokemon/PokemonCard/PokemonCard'
import { Navigate } from '@src/component/functional/Navigate/Navigate'
import { PokemonNamePageDocument } from '@src/pages/pokemon/[pokemon_name]/pokemonNamePage.generate.graphql'
import { useRouter } from 'next/router'

const Pokemon = ({ name }: { name: string }) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery(PokemonNamePageDocument, {
    variables: {
      name,
    },
  })

  if (isLoading) {
    return (
      <Card shadow={'sm'} sx={{ position: 'relative' }}>
        <Skeleton height={'24.8px'} width={'56px'} />
        <AspectRatio mt={'4px'} mx={'auto'} ratio={16 / 9}>
          <Skeleton />
        </AspectRatio>
        <Skeleton height={'44.2px'} mt={'12px'} />
        <Box mt={'8px'} sx={{ display: 'flex', gap: '12px' }}>
          <Skeleton height={'24.8px'} width={'66px'} />
          <Skeleton height={'24.8px'} width={'66px'} />
        </Box>
      </Card>
    )
  }

  if (error) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{error.message}</>
  }

  if (!data || !data.pokemon) {
    return (
      <Center sx={{ height: '402px' }}>
        <Title>No Data</Title>
      </Center>
    )
  }

  return <PokemonCard {...data.pokemon} />
}

/**
 * contents
 */
export const PokemonContents = () => {
  const { query } = useRouter()
  const pokemonName =
    typeof query['pokemon_name'] === 'string' ? query['pokemon_name'] : ''

  return (
    <>
      <Box mx={'auto'} sx={{ maxWidth: '480px', width: '100%' }}>
        <Pokemon name={pokemonName} />
      </Box>
      <Center mt={'20px'}>
        <Navigate href={(path) => path.home.$url()}>
          <Button component={'a'}>一覧に戻る</Button>
        </Navigate>
      </Center>
    </>
  )
}
