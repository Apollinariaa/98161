
export default {
	actions: {
		async fetchContent(context, id) {
			const response = axios(`https://api.hh.ru/vacancies/${id}?host=hh.ru`,{
				method: 'GET',
				headers: {
					"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
				}
			})
			const content = await response.json() 
			context.commit('setContent', content.data)
			return content;

		}
	},
	mutations: {
		setContent: (state, content) => {
			state.content= content;
		}
	},
	state: {
		content: []
	},
	getters: {
		getContent(state) {
      return state.content.description
    }
	}
}
