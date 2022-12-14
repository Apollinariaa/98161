import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import "./assets/styles/normalize.css";
import "./assets/styles/fonts.css";
import "./assets/styles/base.css";
import router from './router'

 const app = createApp(App)
 app.use(store, router)
 app.mount('#app')
