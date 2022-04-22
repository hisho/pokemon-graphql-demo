import { Avatar, Box, Text, Title } from '@mantine/core'
import { memo } from 'react'
import { Navigate } from '@src/component/functional/Navigate/Navigate'
import { PokemonItem_PokemonFragment } from '@src/component/feature/Pokemon/PokemonItem/PokemonItem.generate.graphql'
import { motion } from 'framer-motion'

export const PokemonItem = memo(
  ({ image, name, number }: PokemonItem_PokemonFragment) => {
    return (
      <Navigate
        href={(path) =>
          path.pokemon._pokemon_name(name?.toLocaleLowerCase() ?? 'null').$url()
        }
      >
        <Box
          key={name}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          component={motion.a}
          px={'12px'}
          py={'4px'}
          sx={(theme) => ({
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: 'black',
            boxShadow: theme.shadows.md,
            transition: 'box-shadow .3s ease-out',
            ':hover,:focus-visible': {
              boxShadow: theme.shadows.xs,
            },
          })}
        >
          <Text sx={{ fontSize: '14px' }}>{number}</Text>
          <Avatar
            styles={{
              image: {
                objectFit: 'contain',
                objectPosition: 'center',
              },
            }}
            src={image}
            alt={name ?? ''}
          />
          <Title sx={{ fontSize: '20px' }}>{name}</Title>
        </Box>
      </Navigate>
    )
  }
)
