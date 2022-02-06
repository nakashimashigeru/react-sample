import React, { Component } from 'react';
import './App.css';
import Message from './Message';

class App extends Component {
  input = '';

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Message title="Children!">
          これはコンポーネント内のコンテンツです。
          マルでテキストを分割し、リストにして表示します。
          改行は必要ありません。
        </Message>
      </div>
    </div>
  }
}

export default App;
