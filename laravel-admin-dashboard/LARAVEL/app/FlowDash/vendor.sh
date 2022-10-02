#!/bin/bash

# flowdash
rm -rf vendor/flowdash
git clone --depth 1 --branch master git@github.com:themefy/flowdash.git vendor/flowdash
rm -rf vendor/flowdash/.git
rm -rf vendor/flowdash/src/html
rm -rf vendor/flowdash/src_docs
rm -rf vendor/flowdash/.*
rm -rf vendor/flowdash/*.js
rm -rf vendor/flowdash/*.sh
rm -rf vendor/flowdash/*.yaml
rm -rf vendor/flowdash/*.json

VARIABLES_FILE="vendor/flowdash/src/sass/_variables.scss"
echo -e "\$map-marker-blue-bg-image: false !default;\n$(cat $VARIABLES_FILE)" > $VARIABLES_FILE
echo -e "\$layout-login-bg-image: false !default;\n$(cat $VARIABLES_FILE)" > $VARIABLES_FILE
echo -e "\$fa-font-path: '~@fortawesome/fontawesome-free/webfonts/' !default;\n$(cat $VARIABLES_FILE)" > $VARIABLES_FILE
echo -e "\$material-design-icons-font-directory-path: '~material-design-icons-iconfont/dist/fonts/' !default;\n$(cat $VARIABLES_FILE)" > $VARIABLES_FILE

APP_JS_FILE="vendor/flowdash/src/js/app.js"
echo -e "import './bootstrap';\n$(cat $APP_JS_FILE)" > $APP_JS_FILE