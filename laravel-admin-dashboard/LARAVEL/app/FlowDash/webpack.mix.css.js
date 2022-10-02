const mix = require('laravel-mix');
const path = require('path')
const webpack = require('webpack')
require('laravel-mix-merge-manifest')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/////////////
// OPTIONS //
/////////////

const sassOptions = {
  sassOptions: {
    includePaths: ['node_modules']
  },
  implementation: require('sass')
}

const postCss = [
  require('postcss-rtl')
]

mix
  .setPublicPath('public')
  .options({ postCss })
  .webpackConfig(require('./webpack.config'))

mix
  .copy('node_modules/ion-rangeslider/js/ion.rangeSlider.min.js', 'public/vendor')
  .copy('node_modules/jquery/dist/jquery.min.js', 'public/vendor')
  .copy('node_modules/bootstrap/dist/js/bootstrap.min.*', 'public/vendor')
  .copy('node_modules/popper.js/dist/umd/popper.min.*', 'public/vendor')
  .copy('node_modules/dom-factory/dist', 'public/vendor')
  .copy('node_modules/material-design-kit/dist/material-design-kit.js', 'public/vendor')
  .copy('node_modules/perfect-scrollbar/css/*', 'public/vendor')
  .copy('node_modules/perfect-scrollbar/dist/*.min.js', 'public/vendor')
  .copy('node_modules/material-design-icons-iconfont/dist/fonts/*', 'public/fonts/material-icons')
  .copy('node_modules/@fortawesome/fontawesome-free/webfonts/*', 'public/fonts/fontawesome-free')
  .copy('node_modules/vue/dist/vue.min.js', 'public/vendor')
  .copy('node_modules/toastr/build/toastr.min.*', 'public/vendor')
  .copy('node_modules/chart.js/dist/Chart.min.js', 'public/vendor')
  .copy('node_modules/moment/min/moment.min.js', 'public/vendor')
  .copy('node_modules/moment-range/dist/moment-range.js', 'public/vendor')
  .copy('node_modules/flatpickr/dist/flatpickr.min.*', 'public/vendor/flatpickr')
  .copy('node_modules/flatpickr/dist/themes/airbnb.css', 'public/vendor/flatpickr')
  .copy('node_modules/daterangepicker/daterangepicker.*', 'public/vendor')
  .copy('node_modules/jquery-mask-plugin/dist/jquery.mask.min.js', 'public/vendor')
  .copy('node_modules/quill/dist/quill.min.js', 'public/vendor')
  .copy('node_modules/dropzone/dist/min/dropzone.min.js', 'public/vendor')
  .copy('node_modules/dragula/dist/dragula.min.*', 'public/vendor/dragula')
  .copy('node_modules/select2/dist/js/select2.min.js', 'public/vendor/select2')
  .copy('node_modules/select2/dist/css/select2.min.css', 'public/vendor/select2')
  .copy('node_modules/list.js/dist/list.min.js', 'public/vendor')
  .copy('node_modules/jqvmap/dist/jquery.vmap.min.js', 'public/vendor/jqvmap')
  .copy('node_modules/jqvmap/dist/jqvmap.min.css', 'public/vendor/jqvmap')
  .copy('node_modules/jqvmap/dist/maps/*.js', 'public/vendor/jqvmap/maps')
  .copy('node_modules/jqvmap/dist/maps/continents/*.js', 'public/vendor/jqvmap/maps/continents')
  .copy('node_modules/fullcalendar/dist/fullcalendar.min.*', 'public/vendor/fullcalendar')
  .copy('node_modules/jquery-ui-dist/jquery-ui.min.js', 'public/vendor')

mix
  .sass('resources/scss/vendor/flowdash/app.scss', 'public/css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-dropzone.scss', 'public/css/vendor/dropzone.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-flatpickr.scss', 'public/css/vendor/flatpickr.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-flatpickr-airbnb.scss', 'public/css/vendor/flatpickr-airbnb.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-fontawesome-free.scss', 'public/css/vendor/fontawesome.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-ion-rangeslider.scss', 'public/css/vendor/ion-rangeslider.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-material-icons.scss', 'public/css/vendor/material-icons.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-quill.scss', 'public/css/vendor/quill.css', sassOptions)
  .sass('resources/scss/vendor/flowdash/vendor-select2.scss', 'public/css/vendor/select2.css', sassOptions)

mix
  .version()
  .mergeManifest()