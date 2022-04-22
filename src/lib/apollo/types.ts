import {
  BaseMutationOptions,
  QueryFunctionOptions,
} from '@apollo/client/react/types/types'

export type MutationOptions<TDataMutation> = Partial<
  Pick<BaseMutationOptions<TDataMutation>, 'onCompleted' | 'onError'>
>

export type QueryOptions<TDataQuery> = Partial<
  Pick<QueryFunctionOptions<TDataQuery>, 'onCompleted' | 'onError'>
>
