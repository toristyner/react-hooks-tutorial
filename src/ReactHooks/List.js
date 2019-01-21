import React, { useState } from 'react';
import { Button, ListItem, Title } from '../Shared';
import { randomInclusiveInt } from '../utils';

const HookList = ({title, items}) => {

  const [ listItems, setListItems ] = useState(items);
  const [ newItemName, setNewItemName ] = useState("");

  const addToList = () => {
    const newItem = {
      id: `${newItemName}-${randomInclusiveInt}`,
      label: newItemName,
      isDone: false
    };
    setListItems({ ...listItems, [newItem.id]: newItem });
    setNewItemName("")
  }

  const checkItem = (id) => {
    setListItems({
      ...listItems,
      [id]: {...listItems[id], isDone: !listItems[id].isDone }
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
                id={item.id}
                checkItem={checkItem}
                isDone={!!item.isDone}
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
          onChange={({target}) => setNewItemName(target.value)}
          value={newItemName}
        />
        <Button
          onClick={addToList}
          disabled={!newItemName}
        >Add</Button>
      </div>
    </div>
  );
}

export default HookList;