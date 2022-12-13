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
			:validVacancy = "validVacancy"
    ></vacancy>
		</main>
		<Request></Request>  
  </div>
</template>

<script>
/* v-bind:logo="vacancy.employer.logo_urls['240']" */
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
	}
}
</script>




