const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../dist/devpanel.tmpl.html');
const distPath = path.join(__dirname, '../dist/devpanel.html');
const startRemoteDev = require('remotedev-server');

const html = fs.readFileSync(filePath, 'utf-8');

module.exports = function(argv) {
  if (argv.hostname) {
    fs.writeFileSync(
      distPath,
      html.replace(
        '__remotedevOptionsSet__',
        'window.remotedevOptions = ' + JSON.stringify({
          hostname: argv.hostname,
          port: argv.port || 8000,
          autoReconnect: true
        })
      )
    );
    // have hostname, start remotedev server
    if (argv.runserver) {
      startRemoteDev(argv);
    }
  } else {
    fs.writeFileSync(distPath, html);
  }
};
