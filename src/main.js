import {createApp} from 'vue'
/* import { createStore } from 'vuex' */
import App from './App.vue'
import store from './store'
import "./assets/styles/normalize.css";
import "./assets/styles/fonts.css";
import "./assets/styles/base.css";

 const app = createApp(App)
 app.use(store) 
 app.mount('#app')
