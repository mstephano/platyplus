import create from 'zustand'
import produce from 'immer'
import path from 'object-path'
import { devtools } from 'zustand/middleware'

import { ConfigCollectionName, Contents } from '@platyplus/rxdb-hasura'

type CollectionForm = Record<string, Contents>
type FormType = Record<string, CollectionForm> &
  Record<ConfigCollectionName, CollectionForm>

const resetConfig: (input) => FormType = produce((state) => {
  state.app_config = {}
  state.table_config = {}
  state.property_config = {}
})
export const useStore = create<{
  forms: FormType
  config: FormType
  // setConfig: <T>(collection: string, id: string, document: T) => void
  setConfigForm: <T>(
    collection: ConfigCollectionName,
    values: T,
    id?: string,
    path?: string
  ) => void
  setForm: <T>(
    collectionName: string,
    document: Contents,
    values: T,
    subPath?: string
  ) => void
  resetForm: (collectionName: string, document: Contents) => void
  clearConfig: () => void
}>(
  devtools(
    (set, get) => ({
      forms: resetConfig({}),
      config: resetConfig({}),
      setConfigForm: (collection, value, givenId, path) =>
        set(
          produce((state) => {
            const id = givenId || value['id']
            if (!id) return
            if (path) {
              if (!state.forms[collection][id]) state.forms[collection][id] = {}
              state.forms[collection][id][path] = value
            } else {
              state.forms[collection][id] = value
            }
          })
        ),

      setForm: (collectionName, document, values, subPath?: string) =>
        set(
          produce((state) => {
            const fullPath = [
              collectionName,
              document.id, // ? custom id
              ...(subPath ? [subPath] : [])
            ]
            path.set(state.forms, fullPath, values)
          })
        ),
      resetForm: (collectionName, document) =>
        set(
          produce((state) => {
            path.del(state.forms, [collectionName, document.id])
          })
        ),
      clearConfig: () =>
        set(
          produce((state) => {
            state.forms = resetConfig(state.forms)
          })
        )
    }),
    'main'
  )
)