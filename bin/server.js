#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../dist/devpanel.tmpl.html');
const distPath = path.join(__dirname, '../dist/devpanel.html');

const html = fs.readFileSync(filePath, 'utf-8');
if (argv.hostname) {
  fs.writeFileSync(
    distPath,
    html.replace(
      '__remotedevOptionsSet__',
      'window.remotedevOptions = ' + JSON.stringify({
        hostname: argv.hostname,
        port: argv.port || 80,
        autoReconnect: true
      })
    )
  );
  // have hostname, start remotedev server
  require('remotedev-server/bin/remotedev');
} else {
  fs.writeFileSync(distPath, html);
}
