#!/bin/bash
browserify src/index.js > dist/suitup-dist.js
cp dist/suitup-dist.js example/suitup-dist.js
cd example/templates && handlebars *.handlebars -f templates.js -k each -k if -k unless