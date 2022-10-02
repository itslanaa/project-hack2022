const mix = require('laravel-mix');
const path = require('path')
const webpack = require('webpack')
const purgecss = require('@fullhuman/postcss-purgecss')
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

const sassOptions = {
  sassOptions: {
    includePaths: ['node_modules']
  },
  implementation: require('sass')
}

const postCss = [
  require('@mjhenkes/postcss-rtl')
]

if (mix.inProduction()) {
  postCss.push(
    purgecss({
      content: [
        './public/js/**/*.js',
      ],
      variables: true,
      keyframes: true,
      fontFace: true,
      safelist: {
        greedy: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /mdk-box--primary/,
          /mdk-(drawer|reveal)/,
          /sidebar-submenu/,
          /sm-indent/,
          /sidebar-(light|dark-pickled-bluewood)/,
          /navbar-(light|dark-pickled-bluewood)/,
          /avatar-.*/,
          /btn-(flush|white|accent|dark|outline-(white|dark)|lg)/,
          /badge-(accent|dark|notifications)/,
          /text-rating/,
          /pagination-xsm/,
          /icon-holder--(primary|dark|light|outline-accent)/,
          /bg-(body|secondary|success|danger|warning|info)/,
          /alert-(success|danger|warning|info)/,
          /spinner-grow/,
        ]
      }
    })
  )
}

mix
  .setPublicPath('public')
  .options({ postCss })
  .webpackConfig({
    resolve: {
      symlinks: false
    }
  })

mix
  .sass('resources/scss/app.scss', 'public/css/main.css', sassOptions)
  .sass('resources/scss/vendor/fontawesome.scss', 'public/css/vendor', sassOptions)
  .sass('resources/scss/vendor/material-icons.scss', 'public/css/vendor', sassOptions)
  .sass('resources/scss/vendor/quill.scss', 'public/css/vendor', sassOptions)

mix.combine([
  'public/css/vendor/fontawesome.css',
  'public/css/vendor/material-icons.css',
  'public/css/vendor/quill.css',
  'public/css/main.css'
], 'public/css/app.css')

mix
  .version()
  .mergeManifest()