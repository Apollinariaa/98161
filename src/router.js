import Router from "vue-router";
import Vacancy from "./components/vacancy/Vacancy.vue";

let router = new Router({
  routes: [
		{ path: "/vacancies", name: 'vacancies' , component: Vacancy, props: true }
	],
});

export default router;
