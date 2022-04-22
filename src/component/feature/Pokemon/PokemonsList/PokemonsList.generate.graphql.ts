import * as Types from '../../../../lib/graphql/$types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { PokemonCard_PokemonFragmentDoc } from '../PokemonCard/PokemonCard.generate.graphql';
export type PokemonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, name?: string | null, image?: string | null, types?: Array<string | null> | null } | null> | null };


export const PokemonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pokemons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"-1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PokemonCard_pokemon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},...PokemonCard_PokemonFragmentDoc.definitions]} as unknown as DocumentNode<PokemonsQuery, PokemonsQueryVariables>;