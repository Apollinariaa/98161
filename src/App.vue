<template>
 <div id="app">
    <request></request>
  </div>
</template>

<script>
import Request from '../src/components/request/Request.vue'
import Vacancy from '../src/components/vacancy/Vacancy.vue'

export default {
  name: 'app',
  components: { Request, Vacancy },
	async getDescription(id) {
		let response = await fetch(`https://api.hh.ru/vacancies/${id}?host=hh.ru`, {
						method: "GET",
						headers: {
								"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
						}
					});
		let content = await response.json();
		return content.description;
	},

	async getResponse(i = 0) {
	let response = await fetch(`https://api.hh.ru/vacancies/?per_page=5&page=${i}`, {
						method: "GET",
						headers: {
								"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36"
						}
					});
	let content = await response.json();
	content = content.items;
	return content;
	},

	async showVacancies(content) {
		const img = '../../assets/img/no_logo.png';
		let arrForm = [];
		<vacancy description=''></vacancy>
	}

}

</script>
