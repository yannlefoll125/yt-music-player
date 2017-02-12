/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

 'use strict';
 import Thing from '../api/thing/thing.model';

 Thing.find({}).remove()
 .then(() => {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
    + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
    + 'Stylus, Sass, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, '
    + 'AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep '
    + 'tests alongside code. Automatic injection of scripts and '
    + 'styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more '
    + 'code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript '
    + 'payload, minifies your scripts/css/images, and rewrites asset '
    + 'names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku '
    + 'and openshift subgenerators'
  });
});

/*
 import Local from '../api/local/local.model';

 var fs = require('fs');
 var path = require('path');

 Local.find({}).remove()
 .then(() => {
  console.log('initializing Local DB collection');

  var fileDirPath = path.join(__dirname, '../files');

  console.log('Local files folder path: ' + fileDirPath);

  var fileList = [];

  fs.readdir(fileDirPath, function(err, files) {
    if(err) {
      console.error('Local seed: error while reading dir: ' + fileDirPath);
      console.error(err);


    } else {
      console.log(fileDirPath + 'contains: ' + files);

      for(var f of files) {
        Local.create({
          name: f.toString(),
          path: path.join(fileDirPath, f.toString())
        });
      }
    }
  });


});*/