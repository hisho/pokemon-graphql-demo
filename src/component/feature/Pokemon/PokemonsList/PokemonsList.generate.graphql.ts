import * as Types from '../../../../lib/graphql/$types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PokemonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PokemonsQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', name?: string | null, number?: string | null, image?: string | null, types?: Array<string | null> | null, id: string } | null> | null };


export const PokemonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pokemons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"-1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PokemonsQuery, PokemonsQueryVariables>;