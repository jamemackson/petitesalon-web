'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        'images/layers-2x.png',
        'images/layers.png',
        'images/marker-icon-2x.png',
        'images/marker-icon.png',
        'images/marker-shadow.png'
      ]
    }
  });

  app.import({
    development: 'node_modules/milligram/dist/milligram.css',
    production: 'node_modules/milligram/dist/milligram.min.css'
  });

  return app.toTree();
};
