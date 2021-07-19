import { List } from 'rsuite'
import { useHistory } from 'react-router-dom'

import { CollectionComponent } from './types'

export const ListCollection: CollectionComponent = ({ collection, data }) => {
  const history = useHistory()
  return (
    <List hover bordered>
      {data.map((item, index) => (
        <List.Item
          key={index}
          index={index}
          style={{
            cursor: 'pointer'
          }}
          onClick={() => {
            history.push(`/collection/${collection.name}/${item.id}`)
          }}
        >
          {item.label}
        </List.Item>
      ))}
    </List>
  )
}
