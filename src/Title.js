import React, { Component } from 'react';

let data = {
  title: 'React-Context',
  message: 'this is sample message.'
};

const SampleContext = React.createContext(data);

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
