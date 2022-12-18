import axios from 'axios'
export default {
  mutations: {
    // содержит функции, которые напрямую изменяют store
    updatePosts(state, vacancy) {
      console.log('lol')
      state.vacancy = vacancy ;
    },
    addNewVacancy(state,vacancy) {
      console.log('lolooo')
      state.vacancy = state.vacancy.concat(vacancy);
    }
  },
  actions: {
    // является обьектом
    async fetchVacancy({commit}, params) {
      const schedule =  params.schedule ?  `&schedule=${params.schedule}` : "" ;
      const url = "https://api.hh.ru/vacancies/?per_page=5" + schedule + `&page=${params.page}`
      const response = await axios.get(url);
      if (params.page === 1){
        commit("updatePosts", response.data.items);
      }
      else {
        commit("addNewVacancy", response.data.items);
      }
      /* commit("updatePosts", response.data.items); */
    },
  },
  state: {
    vacancy: [], // определяем начальные данные
  },
  getters: {
    // трансформируют данные и с помощью этой фунции мы можем получать данные
    validVacancy(state) {
      return state.vacancy;
    },
  },
};
