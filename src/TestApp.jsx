import React, { Component } from 'react';

class ChildCmp extends Component {
  render() {
    return <button>{this.props.liked ? '喜欢' : '不喜欢'}</button>
  }
}

class TestApp extends Component {
  state = {
    liked: false
  }

  render() {
    return <div>
      <button onClick={() => this.setState({ liked: true })}>喜欢</button>
      <ChildCmp liked={this.state.liked} />
    </div>
  }
}

ReactDOM.render(
  <TestApp />,
  document.getElementById('root'));