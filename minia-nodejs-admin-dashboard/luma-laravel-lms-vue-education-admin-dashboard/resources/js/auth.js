require('./bootstrap');

import Vue from 'vue';

import './plugins/bootstrap-vue'
import './plugins/fmv-vendor'
import './plugins/fmv-layout'
import './plugins/fmv-charts'
import './plugins/fmv-highlight'

const app = document.getElementById('app');

new Vue().$mount(app);
