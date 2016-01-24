var getConfig = require('hjs-webpack')
var generateDB = require('./scripts/generate-db')


module.exports = getConfig({
  in: 'src/index.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data, cb) {
    generateDB().then(function (db) {
      cb(null, {
        '200.html': data.defaultTemplate(),
        'index.html': [
          '<html>',
            '<head>',
              '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
            '</head>',
            '<body>',
              '<div id="root"></div>',
              '<script src="' + data.main + '"></script>',
            '</body>',
          '</html>'
        ].join(''),
        'db.json': JSON.stringify(db, null, 2)
      })
   })

  }
})
