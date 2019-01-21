import React from 'react';
import CheckBox from './Checkbox';

const ListItem = props => (
  <div className="row">
    <CheckBox
      id={props.id}
      checked={props.isDone}
      onCheck={props.checkItem}
    />
    <div className="list-item">{props.children}</div> 
  </div> 
)

export default ListItem;