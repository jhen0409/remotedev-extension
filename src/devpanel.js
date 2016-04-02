const React = require('react');
const ReactDOM = require('react-dom');
const DevTools = require('remotedev-app');

const remotedevOptions = window.remotedevOptions;
const options = {
  socketOptions: remotedevOptions,
  noButtonBar: false
};

// prevent setting from previous UI setting
if (remotedevOptions && remotedevOptions.noButtonBar) {
  options.noButtonBar = true;
  localStorage.removeItem('s:hostname');
  localStorage.removeItem('s:port');
}

ReactDOM.render(
  React.createElement(DevTools, options),
  document.querySelector('#root')
);
