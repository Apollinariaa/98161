export default {
	actions: {
		async fetchVacancy(context, i=0) {
			const response = await fetch(`https://api.hh.ru/vacancies/?per_page=5&page=` + i)
			const vacancy = await response.json() 
			context.commit('updatePosts', vacancy)

		}
	},
	mutations: {
		updatePosts(state, vacancy) {
			state.vacancy= vacancy
		}
	},
	state: {
		vacancy: []
	},
	getters: {
		allVacancy(state) {
			return state.posts
		}

	}
}