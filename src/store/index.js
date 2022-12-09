import { createStore } from 'vuex'
import vacancy from './modules/vacancy'
import description from './modules/description'

export default createStore({
  modules: {
    vacancy,
		description	
  }
})

