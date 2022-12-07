<template>
	<div class="vacancies-block" >
		<div class="vacancies-block__left-wrapper vacancies-card">
			<img 
				class="vacancies-card__label" 
				src= "#"
				>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Form: </span>{{form}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Company: </span>{{company}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Web: </span><a href="#">{{web}}</a></div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Address: </span>{{address}}</div>
		</div>
		<div class="vacancies-block__right-wrapper vacancies-info">
			<h2  class="vacancies-info__title title">{{name}}</h2>
			<div class="vacancies-info__parent-text">
				<div class="vacancies-info__text">{{description}}</div>
			</div>
		</div>
	</div>
 

</template>

<script>
import "./vacancy.css";
export default {
  data() {
    return {};
  },
};

</script>