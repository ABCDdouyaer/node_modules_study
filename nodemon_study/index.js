var nodemon = require('nodemon');

nodemon({
  script: 'app.js',
  ext: 'js json md',
  ignore:['index.js','nodemon.json']
});

nodemon.on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
  setTimeout(()=>{
    nodemon.emit('quit')
  },5000)
});
// nodemon.emit('restart'); 主动重新启动服务