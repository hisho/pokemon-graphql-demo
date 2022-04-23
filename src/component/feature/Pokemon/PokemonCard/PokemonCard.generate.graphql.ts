import * as Types from '../../../../lib/graphql/$types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PokemonCard_PokemonFragment = { __typename?: 'Pokemon', name?: string | null, image?: string | null, types?: Array<string | null> | null, number?: string | null };

export const PokemonCard_PokemonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PokemonCard_pokemon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]} as unknown as DocumentNode<PokemonCard_PokemonFragment, unknown>;