<template>
  <div id="app">
		<main class="vacancies-section">
			<h1 class="vacancies-section__title title">List of vacancies</h1>
		<div class="vacancies-section__drop-down-menu drop-down-menu">
			<Select 
			v-modal="selectedUnique" 
			:validVacancy = "validVacancy"
			></Select>
		</div>
    <vacancy
			v-for="vacancy in validVacancy"
      v-bind:key="vacancy.id"
			v-bind:name="vacancy.name"
			v-bind:form = "vacancy.schedule.name"
			v-bind:company = "vacancy.employer.name"
			v-bind:web = "vacancy.alternate_url"
			v-bind:address= "vacancy.area.name"
			v-bind:description = "vacancy.description"
			v-bind:logo="vacancy.employer.logo_urls['240']"
    ></vacancy>
		</main>
		<button class="btn-more-vacancies btn">Show metails</button>
		
		<request></request>  
  </div>
</template>

<script>
import Request from "./components/request/Request";
import Vacancy from './components/vacancy/Vacancy';
import Select from './components/select/Select';
import {store} from "./store/index"
import { mapGetters, mapActions, mapState } from "vuex";

export default {
	name: "app",
	components: {Request, Vacancy, Select},
	data() {
		return {
		}
	},
	computed: mapGetters(['validVacancy']),
	methods: mapActions(['fetchVacancy']),
	async beforeCreate() {
		this.$store.dispatch('fetchVacancy')

		//dispatch('fetchVacancy');
		// this.fetchVacancy();
		//console.log(fetchVacancy());
		//console.log(mapActions(['fetchVacancy']));
		//console.log(mapGetters(['validVacancy']));
		//console.log(mapState(['vacancy']));
		//console.log(this.$store.state.vacancy);
	}
}
</script>




