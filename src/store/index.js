import { createStore } from 'vuex'
import vacancy from './modules/vacancy'

const store = createStore({
  modules: {
    vacancy
  }
})

export default store;
