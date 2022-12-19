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
              @click="filterByVacancies(item.form)"
            >
              {{ item.formWork }}
            </option>
          </select>
        </label>
        <hr class="drop-down-menu__hr" />
      </div>
      <Vacancy
        v-for="vacancy in vacancies"
        :key="vacancy.id"
        :name="vacancy.name"
        :form="vacancy.schedule.name"
        :company="vacancy.employer.name"
        :web="vacancy.alternate_url"
        :address="vacancy.area.name"
        :responsibility="vacancy.snippet.responsibility"
      /> 
    </main>
    <button class="btn" @click="showMore">Show more</button>
  </div>
</template>

<script>

import "@styles/pages/index.css";

export default {
  name: "Vacancies",
  data() {
    return {
      searchForm: "",
      formWorks: [
        { formWork: "Не выбрано", id: 0,  form: ""},
        { formWork: "Полный день", id: 1,  form: "fullDay"},
        { formWork: "Сменный график", id: 2,  form: "shift"},
        { formWork: "Удаленная работа", id: 3,  form: "remote"},
        { formWork: "Гибкий график", id: 4, form: "flexible" },
      ],
      sortedVacancy: [],
      params: { page: 1, schedule: "" },
    };
  },
  computed: {
    vacancies() {
      return this.$store.getters['vacancy/validVacancy'] || []   
    },
  },
  async fetch({store}) {
    this.params = { page: 1, schedule: "" }
    await store.dispatch('vacancy/fetchVacancy', this.params);
  },
/*   async beforeCreate() {
    this.params = { page: 1, schedule: "" }
    await this.$store.dispatch('vacancy/fetchVacancy', this.params)
  }, */
  methods: {
    async filterByVacancies(item){
      this.params.page = 1;
      this.params.schedule = item
      await this.$store.dispatch('vacancy/fetchVacancy', this.params)
    },
    async showMore() {
      this.params.page += 1;
      await this.$store.dispatch('vacancy/fetchVacancy', this.params)

    }
  },
};
</script>
