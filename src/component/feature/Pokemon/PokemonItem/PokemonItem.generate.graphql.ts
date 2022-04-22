import * as Types from '../../../../lib/graphql/$types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PokemonItem_PokemonFragment = { __typename?: 'Pokemon', number?: string | null, name?: string | null, image?: string | null };

export const PokemonItem_PokemonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PokemonItem_pokemon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<PokemonItem_PokemonFragment, unknown>;