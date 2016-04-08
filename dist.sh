#!/bin/bash
#browserify src/index.js > dist/suitup.min.js
browserify -g uglifyify src/index.js > dist/suitup.min.js
cp dist/suitup.min.js example/suitup.min.js
cd example/templates && handlebars *.handlebars -f templates.js -k each -k if -k unless