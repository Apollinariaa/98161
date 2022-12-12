<template>
<!-- 	<div id="vacancyList" class="drop-down-menu__list click">
		<option>Выберите из списка</option>
		<option>{{name}}</option>
	</div> -->
	<label for="">Form<br>
	<select v-modal="selectedUnique" class="drop-down-menu__menu" @change="changeOption">
		<option>Not selected</option>
		<option
			v-for="vacancy in validVacancy"
			:key="vacancy.id"
		>
			{{vacancy.schedule.name}}
		</option>
	</select>
	</label> 
	<button @click='optionsUniq' class="drop-down-menu__btn"><img class="drop-down-menu__img" src="../../assets/img/menu-btn.png" alt="#"></button>
	<hr class="drop-down-menu__hr">


</template>

<script>
import vacancy from '@/store/modules/vacancy';
import "./select.css";

export default {
  name: 'Select',
  props: {
		validVacancy: {
			type: Array,
			required: true,
			default() {
				return {}
			}
		},
  },
	data() {
		return {
			vacancies: this.validVacancy.get
		}
	},
	mounted() {
	},
  methods: {
	/* 		optionsUniq: function() {
			append()
			//console.log(this.uniqOptions)
		},
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
		showSelect: function() {
			document.querySelector("#vacancyList").classList.toggle("click");
			document.querySelector(".drop-down-menu__img").classList.toggle("rotate");
		},
		async beforeCreate() {
			console.log(this.vacancies)
			//console.log(55) 
		},*/
  }
}
</script>
<!-- 
console.log(this.vacancies)
this.vacancies.forEach(vacancy => {
	console.log(vacancy.schedule.name);
}) -->