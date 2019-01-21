import React, { useState } from 'react';
import { Button, ListItem, Title } from '../Shared';
import { randomInclusiveInt } from '../utils';


const HookList = props => {
  
  const {
    title,
    items
  } = props;

  const [ listItems, setListItems ] = useState(items);
  const [ newItemName, setItemName ] = useState("");

  const addToList = () => {
    const newItem = {
      id: `${newItemName}-${randomInclusiveInt}`,
      label: newItemName,
      isDone: false
    };
  
    setListItems({ ...listItems, [newItem.id]: newItem });
    setItemName("")
  }

  const checkItem = (id, isChecked) => {
    setListItems({
      ...listItems,
      [id]: {...listItems[id], isDone: isChecked }
    })
  }

  return (
    <div className="list-container">
      <div className="list">
        <Title>{title}</Title>
        {
          Object.keys(listItems).map(itemKey => {
            const item = listItems[itemKey];
            return (
              <ListItem
                key={itemKey}
                checkItem={checkItem}
                {...item}
              >{item.label}</ListItem>
            )
          })
        }
      </div>
      <div className="row">
        <input
          type="text"
          className="text-input"
          placeholder="Add a list item..."
          onChange={({target}) => setItemName(target.value)}
          value={newItemName}
        />
        <Button onClick={addToList}>Add</Button>
      </div>
    </div>
  );
}

export default HookList;