import React, { Component } from 'react';

class Item extends Component {
  item = {
    fontSize: "16pt",
    color: "#00f",
    textDecoration: "underline",
    textDecorationColor: "#ddf"
  };

  num = {
    fontWeight: "bold",
    color: "red"
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p style={this.item}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    );
  }
}

export default Item;
