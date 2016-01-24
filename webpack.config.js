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
              '<script>',
                '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){',
                '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
                'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
                '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");',
                'ga("create", "UA-40648195-10", "auto");',
                'ga("send", "pageview");',
              '</script>',
            '</body>',
          '</html>'
        ].join(''),
        'db.json': JSON.stringify(db, null, 2),
        'robot.txt': [
          'User-agent: *',
          'Allow: /'
        ].join('\n'),
      })
   })

  }
})
