<template>
  <div>
    <back-to-course-navbar
      :container-class="containerClass" />

    <div class="bg-primary pb-lg-64pt py-32pt">
      <div :class="containerClass">
        <nav class="course-nav">

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Introduction' }"
            :to="routeTo(routes.studentTakeLesson)">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Introduction to TypeScript' }"
            :to="routeTo(routes.studentTakeLesson)">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Getting Started with Angular: Comparing Angular to AngularJS' }"
            :to="routeTo(routes.studentTakeLesson)">
            <md-icon v-text="'check_circle'" />
          </b-link>

          <b-link
            v-b-tooltip.hover.bottom="{ title: 'Quiz: Getting Started with Angular' }"
            :to="routeTo(routes.studentTakeQuiz)">
            <md-icon v-text="'account_circle'" />
          </b-link>
        </nav>
        
        <div class="d-flex flex-wrap align-items-end justify-content-end mb-16pt">
          <h1 class="text-white flex m-0">Question 1 of 5</h1>
          <p class="h1 text-white-50 font-weight-light m-0">00:14</p>
        </div>

        <p class="hero__lead measure-hero-lead text-white-50 mb-0">An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>
      </div>
    </div>

    <take-quiz-navbar
      :container-class="containerClass" />

    <div 
      :class="containerClass" 
      class="page-section">

      <take-quiz-form />

    </div>
  </div>
</template>

<script>
  // import {
  //   Page,
  //   BackToCourseNavbar,
  //   TakeQuizNavbar,
  //   TakeQuizForm,
  //   MdIcon
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import BackToCourseNavbar from '~/components/Course/BackToCourseNavbar.vue'
  import TakeQuizNavbar from '~/components/Course/TakeQuizNavbar.vue'
  import TakeQuizForm from '~/components/Course/TakeQuizForm.vue'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      BackToCourseNavbar,
      TakeQuizNavbar,
      TakeQuizForm,
      MdIcon
    },
    extends: Page
  }
</script>
