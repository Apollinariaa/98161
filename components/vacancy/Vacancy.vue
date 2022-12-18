<template>
  <div class="vacancies-block">
    <div class="vacancies-block__left-wrapper vacancies-card">
      <div class="vacancies-card__text">
        <span class="vacancies-card__span">Form: </span>{{ form }}
      </div>
      <div class="vacancies-card__text">
        <span class="vacancies-card__span">Company: </span>{{ company }}
      </div>
      <div class="vacancies-card__text">
        <span class="vacancies-card__span">Web: </span
        ><a :href="web">{{ web }}</a>
      </div>
      <div class="vacancies-card__text">
        <span class="vacancies-card__span">Address: </span>{{ address }}
      </div>
    </div>
    <div class="vacancies-block__right-wrapper vacancies-info">
      <h2 class="vacancies-info__title">{{ name }}</h2>
      <div class="vacancies-info__parent-text">{{ responsibility }}</div>
    </div>
  </div>
</template>

<script>
import "./vacancy.css";
export default {
  props: {
    name: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    responsibility: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    form: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    company: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    web: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    address: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
  },
  data() {
    return {};
  },
};
</script>
