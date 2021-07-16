import React, { useMemo } from 'react'
import { useParams } from 'react-router'
import { useRxQuery } from 'rxdb-hooks'
import { Animation } from 'rsuite'

import { Contents } from '@platyplus/rxdb-hasura'
import {
  CollectionTitle,
  useCollectionTitle,
  useContentsCollection
} from '@platyplus/react-rxdb-hasura'
import { HeaderTitleWrapper } from '@platyplus/layout'
import { useQuery } from '@platyplus/navigation'
import { CollectionComponentWrapper } from '../collections'
import { CollectionToolbar } from '../collections/toolbar'

export const CollectionPage: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const query = useQuery()
  const edit = query.has('edit')

  const collection = useContentsCollection(name)
  const rxQuery = useMemo(() => collection?.find(), [collection])
  const { isFetching, result } = useRxQuery<Contents>(rxQuery)
  const [title] = useCollectionTitle(collection)
  return (
    <HeaderTitleWrapper
      title={title}
      component={<CollectionTitle collection={collection} />}
    >
      <Animation.Fade in={!isFetching}>
        {(props, ref) => (
          <div {...props}>
            <CollectionToolbar collection={collection} />
            <CollectionComponentWrapper
              collection={collection}
              data={result}
              edit={edit}
            />
          </div>
        )}
      </Animation.Fade>
    </HeaderTitleWrapper>
  )
}

export default CollectionPage
