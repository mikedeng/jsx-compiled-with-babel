function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}
	return obj;
}

import React, { Component } from 'react';

class ChildCmp extends Component {
	render() {
		return React.createElement('button', null, this.props.liked ? '喜欢' : '不喜欢');
	}
}

class TestApp extends Component {
	constructor(...args) {
		super(...args);

		_defineProperty(this, 'state', {
			liked: false,
		});
	}

	render() {
		var _this = this;

		return React.createElement(
			'div',
			null,
			React.createElement(
				'button',
				{
					onClick: function () {
						return _this.setState({
							liked: true,
						});
					},
				},
				'\u559C\u6B22'
			),
			React.createElement(ChildCmp, {
				liked: this.state.liked,
			})
		);
	}
}

ReactDOM.render(React.createElement(TestApp, null), document.getElementById('root'));
