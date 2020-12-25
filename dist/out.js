import React from 'react';

ReactDOM.render(
	React.createElement(
		'button',
		{
			onClick: function () {
				return console.log(1);
			},
		},
		'Click me!'
	),
	document.getElementById('root')
);
