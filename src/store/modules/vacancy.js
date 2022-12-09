export default {
	actions: {
		async fetchVacancy(context, i=0) {
			const response = await fetch(`https://api.hh.ru/vacancies/?per_page=5&page=` + i, {
				method: 'GET',
				headers: {
					"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
				}
			})
			const vacancy = await response.json() 
			context.commit('updatePosts', vacancy.data)
			return vacancy.items
		}
	},
	mutations: {
		updatePosts: (state, vacancy) => {
			state.vacancy= vacancy;
		}
	},
	state: {
		vacancy: []
	},
	getters: {
		validVacancy(state) {
      return state.vacancy
    }
	}
}

