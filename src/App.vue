<template>
 <div id="app">
	  <Request></Request>
		<Vacancy 
		v-for='vacancy in allPost'
		:key='vacancy.id'
		name={{vacancy.name}} 
		description={{description}} 
		form={{vacancy.schedule.name}}
		company={{vacancy.employer.name}}
		web={{vacancy.alternate_url}}
		address={{vacancy.area.name}}
		></Vacancy>
  </div>
</template>

<script>
import Request from './components/request/Request';
/* import Vacancy from './components/vacancy/Vacancy';  */
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'app',
	computed: mapGetters(['appPosts']),
	components: { Request, Vacancy },
	methods: mapActions(['fetchPosts']),
	async mounted() {
		this.fetchPosts();
	}
}

</script>
