import { createApp } from 'vue';
import App from './App';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/style.css';

// mount our main vue component to our div in the index.html
createApp(App).mount('#app');

