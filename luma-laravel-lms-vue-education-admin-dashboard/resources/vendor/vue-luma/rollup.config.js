import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-css-only'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import i18n from '@intlify/rollup-plugin-vue-i18n'
// import { terser } from 'rollup-plugin-terser'
import url from '@rollup/plugin-url'

const path = require('path')
const projectRootDir = path.resolve(__dirname)
const customResolver = resolve({
  extensions: ['.js', '.vue']
})

const plugins = [
  peerDepsExternal(),
  alias({
    entries: [
      {
        find: '~',
        replacement: path.resolve(projectRootDir)
      }
    ],
    customResolver
  }),
  babel({
    babelHelpers: 'runtime',
    skipPreflightCheck: true,
    exclude: 'node_modules/**'
  }),
  resolve({
    extensions: ['.js', '.vue']
  }),
  commonjs(),
  vue({
    css: false,
    customBlocks: ['i18n'],
    style: {
      preprocessOptions: {
        scss: {
          includePaths: ['node_modules']
        }
      }
    }
  }),
  css({ 
    output: 'dist/vue-luma.css' 
  }),
  json(),
  i18n(),
  url({
    limit: Infinity,
    publicPath: '/public',
  })
]

const external = [
  /@babel\/runtime/,
  'bootstrap-vue',
  'bv-form-image-group',
  'dom-factory',
  'fmv-avatar',
  'fmv-charts',
  'fmv-highlight',
  'fmv-input-group-merge',
  'fmv-layout',
  'material-design-kit',
  'moment',
  'moment-range',
  'perfect-scrollbar',
  'ui-huma',
  'vue',
  'vue-no-ssr'
]

export default [
  {
    input: 'index.js',
    output: {
      format: 'esm',
      file: 'dist/vue-luma.esm.js'
    },
    plugins,
    external
  },

  // SSR build.
  {
    input: 'index.js',
    output: {
      format: 'cjs',
      file: 'dist/vue-luma.ssr.js'
    },
    plugins,
    external
  },
]
