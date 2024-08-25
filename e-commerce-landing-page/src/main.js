// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import './main.css'; 
createApp(App)
  .use(router)
  .mount('#app');
