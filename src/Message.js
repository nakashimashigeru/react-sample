import React, { Component } from 'react';
import { SampleContext } from './SampleContext';

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
