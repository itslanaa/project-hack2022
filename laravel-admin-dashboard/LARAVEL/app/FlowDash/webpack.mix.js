const mix = require('laravel-mix');
const path = require('path')
const webpack = require('webpack')
const ChunkRenamePlugin = require('webpack-chunk-rename-plugin')
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

mix
  .setPublicPath('public')
  .webpackConfig(
    Object.assign({}, require('./webpack.config'), {
      plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery', // used by ui-icons page demo
          'domFactory': 'dom-factory'
        }),
        new ChunkRenamePlugin({
          initialChunksWithEntry: true,
          '/js/vendor': '/js/vendor.js'
        }),
      ],
      output: {
        filename: '[name].js',
        chunkFilename: 'js/[name].js?id=[chunkhash]' 
      }
    })
  )

mix
  .js('resources/js/vendor/flowdash/plugins/chartjs-rounded-bar.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/charts.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/daterangepicker.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/dragula.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/dropzone.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/flatpickr.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/fullcalendar.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/ion-rangeslider.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/list.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/progress-charts.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/quill.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/select2.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/toastr.js', 'public/js')
  .js('resources/js/vendor/flowdash/plugins/vector-maps.js', 'public/js')

mix
  .js('resources/js/vendor/flowdash/app-icons.js', 'public/js')
  .js('resources/js/vendor/flowdash/app.js', 'public/js')
  .js('resources/js/vendor/flowdash/check-selected-row.js', 'public/js')
  .js('resources/js/vendor/flowdash/page.analytics.js', 'public/js')
  .js('resources/js/vendor/flowdash/page.dashboard.js', 'public/js')
  .js('resources/js/vendor/flowdash/page.ecommerce.js', 'public/js')
  .js('resources/js/vendor/flowdash/page.staff.js', 'public/js')
  .js('resources/js/vendor/flowdash/page.ui-charts.js', 'public/js')
  .js('resources/js/vendor/flowdash/page.ui-vector-maps.js', 'public/js')
  .js('resources/js/vendor/flowdash/settings.js', 'public/js')
  .js('resources/js/vendor/flowdash/sidebar-mini.js', 'public/js')
  .js('resources/js/vendor/flowdash/toggle-check-all.js', 'public/js')

mix
  .version()
  .extract()
  .mergeManifest()
