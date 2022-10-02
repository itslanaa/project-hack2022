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

mix.override((config) => {
  delete config.watchOptions;
});

mix
  .setPublicPath('public')
  .webpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery', // used by ui-icons page demo
        domFactory: 'dom-factory',
        process: 'process/browser',
      }),
      new ChunkRenamePlugin({
        initialChunksWithEntry: true,
        '/js/vendor': '/js/vendor.js'
      }),
    ],
    output: {
      filename: '[name].js',
      chunkFilename: 'js/[name].js?id=[chunkhash]' 
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js',
        '@': path.resolve('resources/js'),
      },
      symlinks: false
    }
  })

mix.js('resources/js/app.js', 'public/js').vue()

mix
  .version()
  .extract([
    'vue',
    'bootstrap-vue',
    'dom-factory',
    'fmv-layout',
    'fmv-highlight',
    'vue-meta'
  ])
  .mergeManifest()
