const React = require('react');
const ReactDOM = require('react-dom');
const DevTools = require('remotedev-app');

ReactDOM.render(
  React.createElement(DevTools, {
    socketOptions: window.remotedevOptions
  }),
  document.querySelector('#root')
);
