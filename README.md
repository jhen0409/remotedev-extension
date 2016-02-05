# RemoteDev Extension [![NPM version](http://img.shields.io/npm/v/remotedev-extension.svg?style=flat)](https://www.npmjs.com/package/remotedev-extension) [![Dependency Status](https://david-dm.org/jhen0409/remotedev-extension.svg)](https://david-dm.org/jhen0409/remotedev-extension) [![devDependency Status](https://david-dm.org/jhen0409/remotedev-extension/dev-status.svg)](https://david-dm.org/jhen0409/remotedev-extension#info=devDependencies)

> The temporary solution for including remotedev-app into the Electron DevTools

![Demo](demo.gif)

The demo is used [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

## Why?

[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) is awesome, but it [cannot running on Electron](https://github.com/zalmoxisus/redux-devtools-extension/issues/13). This project as a temporary solution, it used [remotedev-app](https://github.com/zalmoxisus/remotedev-app), and with [remotedev](https://github.com/zalmoxisus/remotedev)/[remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools).

## Installation

```bash
$ npm i --save-dev remotedev-extension
```

## Usage (Electron)

```js
// app on ready
BrowserWindow.addDevToolsExtension('node_modules/remotedev-extension/dist');

// if you want remove it
BrowserWindow.removeDevToolsExtension('RemoteDev Extension');
```

## CLI and node

```bash
$ remotedev-extension [options]
```

```js
require('remotedev-extension')(options);
```

#### Options

* --hostname: the `remotedev-server` hostname, will apply `node_modules/remotedev-extension/dist` settings.
* --port: the `remotedev-server` port, will apply `node_modules/remotedev-extension/dist` settings. (default: 8085)
* --runserver: if you have set `hostname`, will start the `remotedev-server` with options on local.

## License

[MIT](LICENSE)
