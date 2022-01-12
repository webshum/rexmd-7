import { createApp } from 'vue'
import App from './App'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


createApp(App).use(LottieAnimation).mount('#app')
