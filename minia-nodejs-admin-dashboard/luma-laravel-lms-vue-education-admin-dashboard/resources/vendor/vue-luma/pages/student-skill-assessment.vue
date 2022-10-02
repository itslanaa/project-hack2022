<template>
  <div>
    <back-to-path-navbar
      :container-class="containerClass" />
    <div 
      class="mdk-box bg-primary js-mdk-box mb-0" 
      data-effects="blend-background">
      <div class="mdk-box__content">
        <div class="py-64pt text-center text-sm-left">
          <div class="container d-flex flex-column justify-content-center align-items-center">
            <h1 
              class="text-white mb-0"
              v-text="$t('Skill Assessment')" />
            <p 
              class="lead text-white-50 measure-lead-max"
              v-text="$t('Measure your skill to find out where to start.')" />
          </div>
        </div>
        <skill-assessment-navbar
          :container-class="containerClass" />
      </div>
    </div>

    <div :class="containerClass">
      <skill-assessment-form />
    </div>

  </div>
</template>

<i18n>
  {
    "ro": {
      "Skill Assessment": "Evaluare Calificare",
      "Measure your skill to find out where to start.": "Măsoară-ți abilitățile pentru a afla de unde să începi."
    }
  }
</i18n>

<script>
  // import {
  //   Page,
  //   BackToPathNavbar,
  //   SkillAssessmentNavbar,
  //   SkillAssessmentForm
  // } from 'vue-luma'

  import Page from '~/components/Page.vue'
  import BackToPathNavbar from '~/components/Course/BackToPathNavbar.vue'
  import SkillAssessmentNavbar from '~/components/Course/SkillAssessmentNavbar.vue'
  import SkillAssessmentForm from '~/components/Course/SkillAssessmentForm.vue'

  export default {
    components: {
      BackToPathNavbar,
      SkillAssessmentNavbar,
      SkillAssessmentForm
    },
    extends: Page
  }
</script>
