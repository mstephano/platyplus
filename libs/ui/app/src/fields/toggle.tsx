import { Toggle } from 'rsuite'
import { FormControlAccepterProps } from 'rsuite/lib/FormControl'

import { FieldComponent, FieldControl } from './utils'

const ToggleAccepter: React.ElementType<FormControlAccepterProps> = ({
  value,
  defaultValue,
  onChange
}) => (
  <Toggle checked={value} defaultChecked={defaultValue} onChange={onChange} />
)

export const ToggleField: FieldComponent = ({
  document,
  name,
  edit,
  editable
}) =>
  edit && editable ? (
    <FieldControl name={name} readOnly={!edit} accepter={ToggleAccepter} />
  ) : (
    <Toggle checked={document[name]} disabled />
  )
