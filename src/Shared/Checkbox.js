import React from 'react'

const CheckBox = props => (
  <input
    type='checkbox'
    className='checkbox'
    checked={props.checked}
    onChange={() => {
      props.onCheck(props.id, props.checked)
    }}
  />
);

export default CheckBox;
