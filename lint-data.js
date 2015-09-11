var path = require('path');
var child_process = require('child_process');

var exec = child_process.exec;

function lintDir(dir) {
  var child = exec('node ./node_modules/nodelint/nodelint ' + dir,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
}

function lintApp(dir) {
  var dataPath = path.join('./apps', dir, 'data');
  lintDir(dataPath);
}

lintApp('_global');

var multi = ['projects', 'services', 'repos', 'teams', 'users'];
var single = ['project', 'service', 'repo', 'team', 'user'];

for (app of multi)
  lintApp(app);

// for (app of single)
//   lintApp(app);
