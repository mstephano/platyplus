import { Metadata, ValuesOf } from '../types'

/**
 * * Maps all object relationships of the table, and returns the  array relationships of corresponding remote tables
 * @param table
 * @param tables
 */
// ! Not used yet. Keep it or remove it
export const getReverseOneToMany = (
  table: Metadata,
  tables: Record<string, Metadata>
): Array<{
  remoteTable: Metadata
  from: ValuesOf<Metadata['relationships']>
  to: ValuesOf<Metadata['relationships']>
}> =>
  table.relationships
    .filter(({ rel_type }) => rel_type === 'object')
    .reduce<
      Array<{
        remoteTable: Metadata
        from: ValuesOf<Metadata['relationships']>
      }>
    >(
      (aggr, relation) => [
        ...aggr,
        ...Object.values(tables)
          .filter(curs =>
            relation.mapping.some(
              m =>
                m.remoteTable?.table_name === curs.table_name &&
                m.remoteTable?.table_schema === curs.table_schema
            )
          )
          .map(table => ({ remoteTable: table, from: relation }))
      ],
      []
    )
    .map(({ remoteTable, from }) =>
      remoteTable.relationships
        .filter(
          rel =>
            rel.rel_type === 'array' &&
            rel.mapping.some(
              m =>
                m?.remoteTable?.table_name === table.table_name &&
                m.remoteTable?.table_schema === table.table_schema
            )
        )
        .map(remote => ({ remoteTable, from, to: remote }))
    )
    .reduce<
      Array<{
        remoteTable: Metadata
        from: ValuesOf<Metadata['relationships']>
        to: ValuesOf<Metadata['relationships']>
      }>
    >((aggr, curr) => [...aggr, ...curr], [])
