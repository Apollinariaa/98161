<template>
  <div id="app">
    <main class="vacancies-section">
      <h1 class="vacancies-section__title title">List of vacancies</h1>
      <div class="vacancies-section__drop-down-menu drop-down-menu">
        <label
          >Form<br />
          <select class="drop-down-menu__menu">
            <option
              v-for="item in formWorks"
              :key="item.id"
              @click="sortByVacancies(item)"
            >
              {{ item.formWork }}
            </option>
          </select>
        </label>
        <hr class="drop-down-menu__hr" />
      </div>
			<router-link :to={name: "vacancies", params: {}}/>
      <vacancy
        v-for="vacancy in filteredForm"
        :key="vacancy.id"
        v-bind:name="vacancy.name"
        v-bind:form="vacancy.schedule.name"
        v-bind:company="vacancy.employer.name"
        v-bind:web="vacancy.alternate_url"
        v-bind:address="vacancy.area.name"
        v-bind:responsibility="vacancy.snippet.responsibility"
      ></vacancy>
    </main>
  </div>
</template>

<script>
import "./App.css";
import Vacancy from "./components/vacancy/Vacancy";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: { Vacancy },
  data() {
    return {
      searchForm: "",
      formWorks: [
        { formWork: "Не выбрано", id: 0 },
        { formWork: "Полный день", id: 1 },
        { formWork: "Сменный график", id: 2 },
      ],
      sortedVacancy: [],
    };
  },
  computed: {
    ...mapGetters(["validVacancy"]),
    filteredForm() {
      console.log(this.sortedVacancy.length);
      if (this.sortedVacancy.length > 0) {
        return this.sortedVacancy;
      } else {
        return this.validVacancy;
      }
    },
  },
  methods: {
    ...mapActions(["fetchVacancy"]),
    sortByVacancies(item) {
      this.sortedVacancy = [];
      let mm = this;
      this.validVacancy.map(function (elem) {
        console.log(elem.schedule.name);
        if (elem.schedule.name === item.formWork) {
          mm.sortedVacancy.push(elem);
        }
      });
    },
  },
  async beforeCreate() {
    this.$store.dispatch("fetchVacancy");
  },
};
</script>
