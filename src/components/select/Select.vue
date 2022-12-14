<template>
</template>

<script>
import "./select.css";

export default {
  name: "Select",
  data() {
    return {
			searchForm: '',
      formWorks: [
        "Полный день",
        "Удаленная работа",
        "Сменный график",
        "Вахтовый метод",
      ],
    };
  },
  props: {
    validVacancy: {
      type: Array,
      required: true,
      default() {
        return {};
      },
    },
  },
  computed: {
    filteredForm() {
			return this.formWorks.filter(formWork => {
				return formWork.indexOf(this.searchForm !== -1)
			})
		},
  },
};
</script>
