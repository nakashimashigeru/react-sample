import React, { Component } from 'react';

let data = {
  title: 'React-Context',
  message: 'this is sample message.'
};

const SampleContext = React.createContext(data);

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div className='alert alert-primary'>
        <p>{this.context.message}</p>
      </div>
    );
  }
}

export default Message;
