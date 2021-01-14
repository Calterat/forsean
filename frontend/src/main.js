// import { createApp } from 'vue'
import Vue from 'vue';
import VueRouter from 'vue-router';

import RetrieveUser from './components/User.vue';
import RetrieveNote from './components/Note.vue';

import App from './App'

// createApp(App).mount('#app')

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'RetrieveUser',
    path: 'api/user',
    component: RetrieveUser
  },
  {
    name: 'RetrieveNote',
    path: 'api/note',
    component: RetrieveNote
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({ router, render: app => app(App) }).mount('#app');