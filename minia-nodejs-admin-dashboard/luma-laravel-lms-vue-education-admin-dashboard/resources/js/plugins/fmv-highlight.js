import Vue from 'vue'

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import {FmvHighlight} from 'fmv-highlight'
Vue.component('FmvHighlight', FmvHighlight)

import 'fmv-highlight/dist/fmv-highlight.css'