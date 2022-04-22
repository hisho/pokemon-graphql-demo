import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

export const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
    link: ApolloLink.from([
      createHttpLink({
        uri: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
      }),
    ]),
  })
