import React, { Component } from 'react';
import { Button, ListItem, Title } from '../Shared';
import { randomInclusiveInt } from '../utils';

class List extends Component {

  constructor () {
    super();
    this.state = {
      items: {},
      newItemName: ""
    }

    this.addToList = this.addToList.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentWillMount = () => {
    this.setState({ items: this.props.items || this.props.children });
  }

  addToList() {
    const id = `${this.state.newItemName}-${randomInclusiveInt()}`;
    this.setState({
      items: {
        ...this.state.items,
        [id]: {
          id,
          label: this.state.newItemName,
          isDone: false
        }
      }
    });

    this.setState({ newItemName: "" })
  }

  checkItem (id) {
    this.setState({
      items: {
        ...this.state.items,
        [id]: {
          ...this.state.items[id],
          isDone: !this.state.items[id].isDone
        }
      }
    });
  }

  handleTextChange({ target }) {
    this.setState({newItemName: target.value});
  }

  render() {
    return (
      <div className="list-container">
        <div className="list">
          <Title>{this.props.title}</Title>
          {
            Object.keys(this.state.items).map(itemKey => {
              const item = this.state.items[itemKey];
              return (
                <ListItem
                  key={item.id}
                  id={item.id}
                  checkItem={this.checkItem}
                  isDone={item.isDone}
                >{item.label}</ListItem>
              )
            })
          }
        </div>
        <div className="row">
          <input
            type="text"
            className="text-input"
            placeholder="Add item to list..."
            value={this.state.newItemName}
            onChange={this.handleTextChange}
          />
          <Button
            onClick={this.addToList}
            disabled={!this.state.newItemName}
          >Add</Button>
        </div>
      </div>
    );
  }
}

export default List;