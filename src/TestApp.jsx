import React, { Component } from 'react';

class TestApp extends Component {
  state = {
    liked: false
  }

  render() {
    if (this.state.liked) {
      return <span>已喜欢!</span>
    }

    return <button onClick={() => this.setState({ liked: true })}>喜欢</button>
  }
}

ReactDOM.render(
  <TestApp />,
  document.getElementById('root'));