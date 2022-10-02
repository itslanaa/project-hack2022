<template>
  <div>
    <back-to-course-navbar
      :container-class="containerClass" />

    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="py-64pt text-center text-sm-left">
          <div class="container d-flex flex-column justify-content-center align-items-center">
            <p 
              class="lead text-white-50 measure-lead-max mb-0"
              v-text="$t('date', { date: $d(submitted_at, 'short', localeIso) })" />
            <h1 
              class="text-white mb-24pt"
              v-text="$t('score', { score: 350 })" />
            <b-btn 
              :to="routeTo(routes.studentTakeQuiz)"
              variant="outline-white"
              v-text="$t('Restart Quiz')" />
          </div>
        </div>
      </div>
    </div>

    <quiz-result-navbar
      :container-class="containerClass" />

    <div :class="containerClass">
      <quiz-result-details />
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "score": "Your Score: {score}",
      "date": "Submited on {date}"
    },
    "ro": {
      "score": "Scorul tău: {score}",
      "Restart Quiz": "Resetare Test",
      "date": "Finalizat la {date}"
    }
  }
</i18n>

<script>
  import { locales, dateTimeFormats } from '~/config/i18n'

  // import {
  //   Page,
  //   BackToCourseNavbar,
  //   QuizResultNavbar,
  //   QuizResultDetails
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import BackToCourseNavbar from '~/components/Course/BackToCourseNavbar.vue'
  import QuizResultNavbar from '~/components/Course/QuizResultNavbar.vue'
  import QuizResultDetails from '~/components/Course/QuizResultDetails.vue'

  export default {
    i18n: {
      dateTimeFormats
    },
    components: {
      BackToCourseNavbar,
      QuizResultNavbar,
      QuizResultDetails
    },
    extends: Page,
    data () {
      return {
        locales,
        submitted_at: new Date()
      }
    },
    computed: {
      localeIso() {
        return this.locales.find(locale => locale.code === this.$i18n.locale).iso
      }
    }
  }
</script>
