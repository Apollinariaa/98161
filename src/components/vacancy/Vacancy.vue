<template>
	<div 
		class="vacancies-block" 
		v-for="vacancy in validVacancy"
		:key="vacancy.id"
	>	
		<div class="vacancies-block__left-wrapper vacancies-card">
			<img 
				class="vacancies-card__label" 
				:src="vacancy.employer.logo_urls['240']" 
				alt="logo_company"
			>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Form: </span>{{vacancy.schedule.name}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Company: </span>{{vacancy.employer.name}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Web: </span><a href="#">{{vacancy.alternate_url}}</a></div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Address: </span>{{vacancy.area.name}}</div>
		</div>
		<div class="vacancies-block__right-wrapper vacancies-info">
			<h2  class="vacancies-info__title ">{{vacancy.name}}</h2>
			<div class="vacancies-info__parent-text">
					{{vacancy.snippet.responsibility}} 
			</div>
		</div>
	</div>
</template>

<script >
import { mapActions, mapGetters} from 'vuex';
import "./vacancy.css";
 export default {
	name: "Vacancy",
	props: {
		validVacancy: {
			type: Array,
			required: true,
			default() {
				return {}
			}
		},
		id: {
			type: String,
			required: true,
			default() {
				return '73044307'
			}
		},
		name: {
			type: String,
			required: true,
			default() {
				return 5
			}
		},
		description: {
			type: String,
			required: true,
			default() {
				return "ddhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkjhdkdhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkhdkdhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkjhdkdhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkjhdkdhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkjhdkdhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkjhdkdhkldfgdgdgdfgdgfdgdfgdfgsdjfhsdkljhiruhklgjdfhkjhdkdhkl"
			}
		},
			form: {
			type: String,
			required: true,
			default() {
				return 5
			}
		},
			company: {
			type: String,
			required: true,
			default() {
				return 5
			}
		},
			web: {
			type: String,
			required: true,
			default() {
				return 5
			}
		},
			address: {
			type: String,
			required: true,
			default() {
				return 5
			}
		},
			logo: {
				default() {
				return "../../assets/img/no_logo.png"
				}
			}
	},
	data() {
		return {
		}
	},
}

</script>
