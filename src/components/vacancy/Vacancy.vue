<template>
	<div class="vacancies-block">
		<div class="vacancies-block__left-wrapper vacancies-card">
			<img 
				class="vacancies-card__label" 
				src= {{ vacancy.employer.logo_urls === null ? : vacancy.employer.logo_urls.original }}
				>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Form: </span>{{vacancy.schedule.name}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Company: </span>{{vacancy.employer.name}}</div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Web: </span><a href="{(vacancy.alternate_url) ? (vacancy.alternate_url) : "#"}">${(vacancy.alternate_url) ? (vacancy.alternate_url) : "-"}</a></div>
			<div class="vacancies-card__text"><span class="vacancies-card__span">Address: </span>{{vacancy.area.name}}</div>
		</div>
		<div class="vacancies-block__right-wrapper vacancies-info">
			<h2  class="vacancies-info__title title">{{vacancy.name}}</h2>
			<div class="vacancies-info__parent-text">
				<div class="vacancies-info__text">{{description}}</div>
			</div>
		</div>
	</div>
 

</template>

<script>
import "./ vacancy.css";
export default {
  data() {
    return {};
  },
};

</script>