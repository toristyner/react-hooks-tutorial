import React from 'react'

const CheckBox = props => (
  <input
    type='checkbox'
    className='checkbox'
    defaultChecked={props.checked}
    onChange={({ target }) => props.onCheck({ id: props.id, isChecked: target.checked })}
  />
)

export default CheckBox;
