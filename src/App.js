import React, { Component } from 'react';
import List from './List/List';

import './App.css';

class App extends Component {
  render() {
    const detailData = [
      {
        value: 'Kevin',
        id: 50212
      },
      {
        value: 'Joe',
        ud: 55511
      }
    ]
    const simpleData = [
      <li>Cheese</li>,
      <li>Milk</li>,
      <li>Butter</li>
  ];

  const badDetailData = [
    {
        name: 'Kevin',
        id: 50212
    },
    {
        name: 'Joe',
        id: 55511
    }
]

    return (
      <div className="App">
        <List>
        </List>
      </div>
    );
  }
}

export default App;
