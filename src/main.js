import { createApp } from 'vue'
import App from '../src/App.vue'
import store from './store'
import "../src/assets/styles/base.css";
import "../src/assets/styles/fonts.css";
import "../src/assets/styles/normalize.css";

/* const app = createApp(App).mount('#app') */
new Vue({
	store,
	render: h => h(App)
}).$mount('#app')