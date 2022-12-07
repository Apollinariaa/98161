<template>
  <section class="request-section">
    <h3 class="request-section__title title">Leave a request</h3>
    <div class="request-section__request request">
      <div class="request__left-wrapper request-form">
        <div class="request-form__field">
          <div class="request-field">
            <label class="request-field__label"
              >Your name: <br />
              <input
                class="request-field__input"
                inputmode="text"
                placeholder="Please introduce yourself"
                required
            /></label>
          </div>
          <hr class="text_hr" />
          <div class="request-field">
            <label class="request-field__label"
              >Email: <br />
              <input
                class="request-field__input"
                inputmode="text"
                placeholder="ivanov@mail.ru"
                required
            /></label>
          </div>
          <hr class="text_hr" />
          <div class="request-field">
            <label class="request-field__label"
              >Phone number: <br />
              <input
                class="request-field__input"
                inputmode="tel"
                id="phone"
                type="text"
                placeholder="+7 (999) 123-45-78"
                required
            /></label>
          </div>
          <hr class="text_hr" />
          <div class="request-field">
            <label class="request-field__label"
              >Comment: <br />
              <input
                class="request-field__input"
                inputmode="text"
                placeholder="Message text"
            /></label>
          </div>
          <hr class="text_hr" />
          <button 
						class="btn request-field__btn"
					>Send
					</button>
          <div class="request-field">
            By clicking "Send" you confirm your consent to the <br/>
						<a
              class="request-field__a"
              href="#"
            >processing of personal data
						</a>
          </div>
        </div>
      </div>

      <div class="request__right-wrapper request-info">
        <p class="request-info__text">
          We will advise you and help you start a new project
        </p>
        <p class="request-info__contacts">+7 499 391-66-69</p>
        <p style="margin-bottom: 70px" class="request-info__contacts">
          mail@greensight.ru
        </p>
        <p class="request-info__adress">
          Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
        </p>
        <p class="request-info__adress">How to get there?</p>
      </div>
    </div>
  </section>
</template>

<script>
import "./request.css";

export default {
  data() {
    return {};
  },
};
</script>
