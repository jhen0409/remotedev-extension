# RemoteDev Extension [![NPM version](http://img.shields.io/npm/v/remotedev-extension.svg?style=flat)](https://www.npmjs.com/package/remotedev-extension) [![Dependency Status](https://david-dm.org/jhen0409/remotedev-extension.svg)](https://david-dm.org/jhen0409/remotedev-extension) [![devDependency Status](https://david-dm.org/jhen0409/remotedev-extension/dev-status.svg)](https://david-dm.org/jhen0409/remotedev-extension#info=devDependencies)

> Use Redux DevTools in the Browser/Electron DevTools

![Demo](demo.png)

The demo is used [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

## Why?

[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) is awesome, but it [cannot running on Electron](https://github.com/zalmoxisus/redux-devtools-extension/issues/13). This project as a major support for the DevTools Extension of [Electron](https://github.com/atom/electron), it means that it doesn't use __background script__.

This extension is included [remotedev-app](https://github.com/zalmoxisus/remotedev-app), can be used with [remotedev](https://github.com/zalmoxisus/remotedev) / [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools).

## Installation

```bash
$ npm i --save-dev remotedev-extension
```

## Usage (Browser)

[Download Chrome Extension](https://chrome.google.com/webstore/detail/remotedev-devtools/npmkpkaejamnfodceoimeeioacfcijop)
[Download Opera Extension](https://addons.opera.com/extensions/details/remotedev-devtools)

## Usage (Electron)

```js
// app on ready
BrowserWindow.addDevToolsExtension('node_modules/remotedev-extension/dist');

// if you want remove it
BrowserWindow.removeDevToolsExtension('RemoteDev DevTools');
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
(default: `localhost` if `port` is set)
* --port: the `remotedev-server` port, will apply `node_modules/remotedev-extension/dist` settings.  
(default: `8000` if `runserver` or `hostname` is set)
* --runserver: start the `remotedev-server` with options on local.

## Example

__*[Electron]*__ You can refer to commits of [this fork](https://github.com/jhen0409/electron-react-boilerplate/commits/remotedev-ext).

## License

[MIT](LICENSE)
