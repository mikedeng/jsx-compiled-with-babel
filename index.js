const fs = require('fs');
const babel = require('@babel/core');

const plugins = [
	'@babel/plugin-transform-react-jsx',
	'@babel/plugin-transform-arrow-functions',
	'@babel/plugin-proposal-class-properties',
];


babel.transformFile(`${__dirname}/src/TestApp.jsx`, { plugins }, function (err, result) {
	fs.writeFile(`${__dirname}/dist/out.js`, result?.code, () => {});
});