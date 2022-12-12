export default {
	actions: { // является обьектом 
		async fetchVacancy(context) {
			const response = await fetch(`https://api.hh.ru/vacancies/?per_page=5&page=5`, {
				method: 'GET',
				headers: {
					"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
				}
			})
			const vacancy = await response.json() 
			this.commit('updatePosts', vacancy.items)
			},
	},
	mutations: { // содержит функции, которые напрямую изменяют store 
		updatePosts(state, vacancy) {
			state.vacancy= vacancy;
		}
	},
	state: {
		vacancy: []// определяем начальные данные
	},
	getters: { // трансформируют данные и с помощью этой фунции мы можем получать данные 
		validVacancy(state) {
      return state.vacancy
    }
	}
}

