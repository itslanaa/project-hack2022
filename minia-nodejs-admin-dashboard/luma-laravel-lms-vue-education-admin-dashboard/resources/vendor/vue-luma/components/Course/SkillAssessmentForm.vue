<template>
  <b-form 
    :action="routeTo(routes.studentSkillResult).fullPath || routeTo(routes.studentSkillResult)">
    <div class="row">
      <div class="col-lg-7">
        <div class="border-left-2 page-section pl-32pt">
          
          <div class="d-flex align-items-center page-num-container mb-16pt">
            <div class="page-num">2</div>
            <h4 v-text="$t('question', { question: 2, total: 30 })" />
          </div>

          <p class="text-70 mb-32pt mb-lg-64pt">An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>

          <p 
            class="text-50"
            v-text="$t('note')" />

          <div class="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-md-start">
            <b-btn
              :to="routeTo(routes.studentSkillResult)" 
              variant="outline-secondary"
              class="flex mb-8pt mb-sm-0 mr-sm-16pt"
              v-text="$t('Previous Question')" />
            <b-btn 
              type="submit"
              variant="accent" 
              class="flex"
              v-text="$t('Next Question')" />
          </div>

        </div>
      </div>
      <div class="col-lg-5">
        <div class="page-section">
          <page-separator 
            :title="$t('Your Answer')" />
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input 
                id="customCheck01" 
                type="checkbox" 
                class="custom-control-input">
              <label 
                for="customCheck01" 
                class="custom-control-label">Ability to use newer syntax and offers reliability</label>
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input 
                id="customCheck02" 
                type="checkbox" 
                class="custom-control-input" 
                checked="">
              <label 
                for="customCheck02" 
                class="custom-control-label">Compatibility</label>
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input 
                id="customCheck03" 
                type="checkbox" 
                class="custom-control-input">
              <label 
                for="customCheck03" 
                class="custom-control-label">Usage of missing features</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-form>
</template>

<i18n>
  {
    "en": {
      "question": "Question {question} of {total}",
      "note": "Note: There can be multiple correct answers to this question."
    },
    "ro": {
      "question": "Întrebarea {question} din {total}",
      "note": "Atenție: Pot exista mai multe răspunsuri corecte la această întrebare.",
      "Your Answer": "Răspunsul Tău",
      "Next Question": "Întrebarea Următoare",
      "Previous Question": "Întrebarea Precedentă"
    }
  }
</i18n>

<script>
  import routeTo from '~/mixins/route-to'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      PageSeparator
    },
    mixins: [routeTo]
  }
</script>