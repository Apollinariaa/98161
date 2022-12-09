<template>
	<h3>{{post.title}}</h3>
	<div>
		{{name}}
	</div>
	<!-- <div class="vacancies-block" >
		<h1>HEEEEEEEELLLOOOO I VACANCY</h1>
		<div class="vacancies-block__left-wrapper vacancies-card">
			<img 
				class="vacancies-card__label" 
				 :src="require(logo)"
				alt="logo_company"
			>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Form: </span>{{vacancy.schedule.name}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Company: </span>{{company}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Web: </span><a href="#">{{web}}</a></div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Address: </span>{{address}}</div>
		</div>
		<div class="vacancies-block__right-wrapper vacancies-info">
			<h2  class="vacancies-info__title title">{{name}}</h2>
			<div class="vacancies-info__parent-text">
				<div class="vacancies-info__text">'gfhfgkhjgflkjf'</div>
			</div>
		</div>
	</div> -->
</template>

<script>
import "./vacancy.css";
/* import { mapMutations } from "vuex"; */

 export default {
	name: "Vacancy",
	props: {
		post: {
			type: Array,
			required: true,
			default() {
				return "иди нахуй"
			}
		},
		vacancy: {
			type: Array,
			required: true,
			default: "Title"
		}
	}

	
		/*

	props: {
		vacancy: {
			type: Object,
			default() {
				return {}
			}
    }
	} */
/*   data() {
    return {
		};
  },
	methods: {
    ...mapMutations(["createPost"]),
 		srcImg() {
		 return (vacancy.employer.logo_urls === null) ? img : vacancy.employer.logo_urls === null
		} 
  } */
};
</script>
