import React, { Component } from 'react';
import { SampleContext } from './SampleContext';

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div className='card p-2 my-3'>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

export default Title;
