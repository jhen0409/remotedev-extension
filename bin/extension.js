const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../dist/devpanel.tmpl.html');
const distPath = path.join(__dirname, '../dist/devpanel.html');
const startRemoteDev = require('remotedev-server');

const html = fs.readFileSync(filePath, 'utf-8');

module.exports = function(argv) {
  if (argv.runserver) {
    argv.port = argv.port || 8000;
    startRemoteDev(argv);
  }
  if (argv.hostname || argv.port) {
    fs.writeFileSync(
      distPath,
      html.replace(
        '// __remotedevOptionsSet__',
        'window.remotedevOptions = ' + JSON.stringify({
          hostname: argv.hostname,
          port: argv.port || 8000,
          autoReconnect: true
        })
      )
    );
  } else {
    fs.writeFileSync(distPath, html);
  }
};
