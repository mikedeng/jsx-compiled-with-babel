function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}
	return obj;
}

import React, { Component } from 'react';

class TestApp extends Component {
	constructor(...args) {
		super(...args);

		_defineProperty(this, 'state', {
			liked: false,
		});
	}

	render() {
		var _this = this;

		if (this.state.liked) {
			return React.createElement('span', null, '\u5DF2\u559C\u6B22!');
		}

		return React.createElement(
			'button',
			{
				onClick: function () {
					return _this.setState({
						liked: true,
					});
				},
			},
			'\u559C\u6B22'
		);
	}
}

ReactDOM.render(React.createElement(TestApp, null), document.getElementById('root'));
