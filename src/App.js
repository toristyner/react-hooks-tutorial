import React, { Component } from 'react';
import ClassList from './ClassComponents/List';
import HookList from './ReactHooks/List'
import './App.css';

const items = {
  itemOne: {
    id: "itemOne",
    label: "Item One"
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>Simple List App</div>
        <div className="row">
          <ClassList title="React Classes">{items}</ClassList>
          <HookList
            title="React Hooks"
            items={items}
          />
        </div>
      </div>
    );
  }
}

export default App;
