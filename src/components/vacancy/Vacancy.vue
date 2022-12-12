<template>
	<div class="vacancies-block" >
		<div class="vacancies-block__left-wrapper vacancies-card">
			<img 
				class="vacancies-card__label" 
				:src='logo' 
				alt="logo_company"
			>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Form: </span>{{form}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Company: </span>{{company}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Web: </span><a href="#">{{web}}</a></div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Address: </span>{{address}}</div>
		</div>
		<div class="vacancies-block__right-wrapper vacancies-info">
			<h2  class="vacancies-info__title ">{{name}}</h2>
			<div class="vacancies-info__parent-text">
				<div 
				class="vacancies-info__text" 
				v-for="item in fff"
				v-bind:key="item.id"
				>
					{{item.content}} 
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import "./vacancy.css";
/* import { mapMutations } from "vuex"; */

 export default {
	name: "Vacancy",
	props: {
		key: {
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
			}
	},
	data() {
		return {
			id: this.key
		}
	},
	computed: mapGetters(['getContent']),
	methods: mapActions(['fetchContent']),
	async beforeCreate() {
		//console.log(mapGetters(['getContent']))
		this.$store.dispatch(`fetchContent`) 
		//this.$store.dispatch(`fetchContent(${id})`) 
		//dispatch('fetchVacancy');
		// this.fetchVacancy();
		//console.log(fetchVacancy());
		//console.log(mapActions(['fetchContent']));
		//console.log(mapGetters(['getContent']));
		const aaa = this.$store.getters.getContent;
		console.log(this.$store.state.description) ;
		console.log(this.$store.getters.getContent);
	}
}

</script>
