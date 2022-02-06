import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Message from './Message';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Title />
        <Message />
      </div>
    </div>
  }
}

export default App;
