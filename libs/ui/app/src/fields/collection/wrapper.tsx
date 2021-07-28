import React, { useCallback } from 'react'
import { TagPickerProps, CheckPickerProps, Animation } from 'rsuite'
import { useRxData } from 'rxdb-hooks'

import {
  useDocumentProperties,
  useDocuments
} from '@platyplus/react-rxdb-hasura'
import { Contents } from '@platyplus/rxdb-hasura'

import { CollectionFromParamsComponentWrapper } from '../../collections'
import { FieldComponent, FieldControl } from '../utils'

export const CollectionField: FieldComponent<
  | {
      accepter: React.ComponentType<CheckPickerProps | TagPickerProps>
      component: string
    }
  | CheckPickerProps
  | TagPickerProps
> = ({
  document,
  field,
  edit,
  editable,
  accepter: Accepter,
  component = 'label'
}) => {
  // TODO async - see https://rsuitejs.com/components/check-picker/#Async
  const [properties] = useDocumentProperties(document)
  const refCollectionName = properties.get(field).ref
  const queryConstructor = useCallback(
    (collection) => collection.find().sort('label'),
    []
  )

  const { isFetching, result } = useRxData<Contents>(
    refCollectionName,
    queryConstructor
  )

  const options = result.map((doc) => ({ label: doc.label, value: doc.id }))
  const { isFetching: isFetchingDocs, result: data } = useDocuments(
    refCollectionName,
    document[field]
  )
  return (
    <Animation.Fade in={!isFetching && !isFetchingDocs}>
      {(props, ref) => (
        <div {...props}>
          {edit ? (
            <FieldControl
              style={{ minWidth: 300 }}
              name={field}
              readOnly={!edit}
              data={options}
              cleanable={edit}
              accepter={Accepter}
            />
          ) : (
            <CollectionFromParamsComponentWrapper
              collectionName={refCollectionName}
              ids={document[field]}
              componentName={component}
              edit={false}
            />
          )}
        </div>
      )}
    </Animation.Fade>
  )
}
