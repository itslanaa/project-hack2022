<template>
  <b-navbar
    type="light"
    class="navbar-list bg-white border-bottom-2"
    toggleable="md" 
    style="white-space: nowrap;">
    <div :class="containerClass">
      <ul class="nav navbar-nav flex navbar-list__item">
        <li class="nav-item">
          <md-icon 
            class="text-50 mr-8pt"
            v-text="'tune'" />
          {{ $t('Choose the correct answer below') }}:
        </li>
      </ul>
      <div class="nav navbar-nav ml-sm-auto navbar-list__item">
        <div class="nav-item d-flex flex-column flex-sm-row ml-sm-16pt">
          <b-btn 
            :to="routeTo(routes.studentQuizResult)" 
            variant="outline-secondary"
            class="justify-content-center w-100 w-sm-auto mb-16pt mb-sm-0"
            v-text="$t('Skip Quiz')" />

          <b-btn 
            :to="routeTo(routes.studentTakeLesson)" 
            variant="outline-secondary"
            class="justify-content-center w-100 w-sm-auto mb-16pt mb-sm-0 ml-sm-16pt"
            v-text="$t('Review Video')" />

          <b-btn 
            :to="routeTo(routes.studentQuizResult)" 
            variant="accent"
            class="justify-content-center w-100 w-sm-auto mb-16pt mb-sm-0 ml-sm-16pt">
            {{ $t('Next Question') }} 
            <md-icon 
              right
              v-text="'keyboard_arrow_right'" />
          </b-btn>
        </div>
      </div>
    </div>
  </b-navbar>
</template>

<i18n>
  {
    "ro": {
      "Choose the correct answer below": "Alege răspunsul corect de mai jos",
      "Skip Quiz": "Răspund mai târziu",
      "Review Video": "Revizuire Lecție",
      "Next Question": "Întrebarea Următoare"
    }
  }
</i18n>

<script>
  import layoutConfigMixin from '~/mixins/layout-config'
  import routeTo from '~/mixins/route-to'
  import MdIcon from '~/components/Ui/MdIcon.vue'

  export default {
    components: {
      MdIcon
    },
    mixins: [
      layoutConfigMixin,
      routeTo
    ]
  }
</script>