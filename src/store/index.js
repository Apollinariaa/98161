import { createStore } from 'vuex'
import vacancy from './modules/vacancy'
import description from './modules/description'

const store = createStore({
  modules: {
    vacancy,
		description	
  }
})

export default store;
