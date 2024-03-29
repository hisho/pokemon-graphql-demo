import * as Types from '../../../lib/graphql/$types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { PokemonCard_PokemonFragmentDoc } from '../../../component/feature/Pokemon/PokemonCard/PokemonCard.generate.graphql';
export type PokemonNamePageQueryVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type PokemonNamePageQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', name?: string | null, image?: string | null, types?: Array<string | null> | null, number?: string | null } | null };


export const PokemonNamePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pokemonNamePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PokemonCard_pokemon"}}]}}]}},...PokemonCard_PokemonFragmentDoc.definitions]} as unknown as DocumentNode<PokemonNamePageQuery, PokemonNamePageQueryVariables>;