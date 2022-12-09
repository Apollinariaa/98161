<template>
  <div id="app">
    <request></request>  
    <vacancy
		:post="post"
		v-for="vacancy in validVacancy"
		:key="vacancy.id"
		:name="vacancy.name"
    ></vacancy>
  </div>
</template>

<script>
import Request from "./components/request/Request";
import Vacancy from './components/vacancy/Vacancy';
import { mapGetters, mapActions } from "vuex";

export default {
	name: "app",
	components: {Request, Vacancy},
	data() {
		return {
			post: {
					id: 1,
				  title: 'My Journey with Vue'
			}
		}
	},
	methods: {
		...mapActions([
			"fetchVacancy",
 			/* "fetchContent"  */
		]),
		...mapGetters([
			"validVacancy",
 			/* "getContent"  */
		]),
		async mounted() {
    	this.fetchVacancy(4);
			/* this.fetchContent({{vacancy.id}})  */
  	},
	}
}
</script>


